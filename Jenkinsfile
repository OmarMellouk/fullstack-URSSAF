#!groovy
@Library('fedex_shared_libs') _

pipeline {
  // Agent Jenkins utilisé par défaut
  agent { label 'docker' }

  // Définition de variables qui sont utilisé dans le build --> A REDEFINIR POUR VOTRE PROJET
  environment {
    HOME = '.'
    //Le project Key est utilisé comme clé sous sonar, comme nom du package nom ou encore comme artifactId sous le nexus maven
    PROJECT_KEY = 'fullstack-spa-intranet'
    NOM_TARGET_HAWAI = 'fullstack_fe'
    //Le project group est utilisé comme groupId sous le nexus maven
    PROJECT_GROUP = 'fr.urssaf.bt.aea'
  }
  parameters {
    booleanParam(name: 'CREATE_TAG', defaultValue: false, description: 'Si coché, un tag est crée')
  }
  stages {
    stage('Get Version') {
      steps {
        script {
          docker.image('node:16.16.0').inside {
            CURRENT_VERSION = sh(script: 'node -e "console.log(require(\'./package.json\').version);"', returnStdout: true)
            CURRENT_VERSION = CURRENT_VERSION.trim()
            // Release ou SNAPSHOT
            if (CURRENT_VERSION.contains("-SNAPSHOT")) {
              // Récupération du nom de la branche d'ou provient le projet
              brancheGit = "${GIT_BRANCH.replaceAll('/', '-').replaceAll('origin-', '')}"
              VERSION = CURRENT_VERSION + "-${brancheGit}-" + "${env.BUILD_NUMBER}"
              //On remet SNAPSHOT à la fin
              VERSION = VERSION.replaceAll('-SNAPSHOT-', '-')
              VERSION = VERSION + '-SNAPSHOT'

              MAVEN_REPOSITORY="maven-snapshots"

            } else {
              VERSION = CURRENT_VERSION
              MAVEN_REPOSITORY="maven-releases"
            }
            echo "Version  : ${VERSION}"
          }
        }
      }
    }
    // Compilation
    stage('npm install') {
      steps {
        script {
          docker.image('node:16.16.0').inside {
            withNPM(npmrcConfig: 'npmrc') {
              sh 'npm install'
            }
          }
        }
      }
    }

    // Vérification via le linter
    stage('Lint') {
      steps {
        script {
          docker.image('node:16.16.0').inside {
            sh 'npm run lint'
          }
        }
      }
    }

    // Exécution des tests
    stage('Tests') {
      steps {
        script {
          docker.image('zenika/alpine-chrome:with-playwright').inside('--entrypoint "" --cap-add=SYS_ADMIN') {
            sh 'npm run test-ci'
            junit 'reports/*.xml'
          }
        }
      }
    }

    // On lance l'analyse du code par SonarQube
    stage('Analyse Sonarqube') {
      steps {
        script {
          docker.image('sonarsource/sonar-scanner-cli').inside {
            withSonarQubeEnv('Sonarqube HORS-COBOL') {
              // Voir le fichier sonar-project.properties pour la configuration complète de l'analyse Sonar
              sh "sonar-scanner -Dsonar.projectVersion=${VERSION} -Dsonar.branch.name=${GIT_BRANCH.replaceAll('origin/', '')}"
            }
          }
        }
      }
    }

    // Cette étape permet de vérifier si le code passe la barrière qualité de SonarQube
    stage("Vérification Quality Gate Sonar") {
      steps {
        catchError(buildResult: 'SUCCESS', stageResult: 'UNSTABLE') {
          timeout(time: 2, unit: 'MINUTES') {
            waitForQualityGate abortPipeline: true
          }
        }
      }
    }

    // Build du projet pour l'environement de production (ou équivalent). On build un tar.gz qui sera utilisé plus tard pour le deploiement sous le nexus "maven"
    stage('Compile version production') {
      steps {
        script {
          docker.image('node:16.16.0').inside {
            sh 'npm run build-prod-targz-pfs'
          }
        }
      }
    }

    // Publication sous nexus NPM
    stage('Publish nexus NPM') {
      steps {
        script {
          docker.image('node:16.16.0').inside {
            withCredentials([string(credentialsId: 'NPM_PUBLISH_TOKEN', variable: 'NPM_CONFIG__AUTH')]) {
              withEnv(['npm_config_email="indus@acoss.fr"']) {
                sh 'npm run publish-dist-pfs'
              }
            }
            stash includes: "**/*.tar.gz", name: "targz"
          }
        }
      }
    }

    //On publie sous nexus si on fait un tag
    stage('Publish NEXUS') {
      when { expression { params.CREATE_TAG } }
      steps {
        script {
          unstash "targz"
          docker.image('maven:3.6.3-openjdk-11-slim').inside {
            configFileProvider([configFile(fileId: 'Global_Maven_Settings', variable: 'MAVEN_SETTINGS_XML')]) {
              sh "mvn -s $MAVEN_SETTINGS_XML deploy:deploy-file -DgroupId=${PROJECT_GROUP} -DartifactId=${PROJECT_KEY} -Dversion=${VERSION} -Dpackaging=tar.gz -Dfile=./dist/${NOM_TARGET_HAWAI}.tar.gz -Durl=http://${NEXUS_HOSTNAME}/repository/${MAVEN_REPOSITORY}/ -DrepositoryId=${MAVEN_REPOSITORY}"
            }
          }
        }
      }
    }

    //On fait un tag si la case est cochée
    stage('Tag version') {
      when { expression { params.CREATE_TAG } }
      environment { GIT_AUTH = credentials('GITLAB_ID') }
      steps {
        script {


          sh "git tag ${VERSION} -m \"v${VERSION} tag\""
          sh 'git config --local credential.helper "!f() { echo username=\\$GIT_AUTH_USR; echo password=\\$GIT_AUTH_PSW; }; f"'
          sh "git push origin HEAD:${GIT_BRANCH.replaceAll('origin/', '')} ${VERSION}"

        }
      }
    }

  }
  post {
    success {
      script {
        if (binding.hasVariable('VERSION')) {
          // Permet d'enregistrer la version buildée qui peut être récupérée par un build parent
          env.FULLSTACK_FE_TAG_VERSION = "$VERSION"
        }
      }
    }
  }
}
