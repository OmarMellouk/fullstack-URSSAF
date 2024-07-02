import {Injectable} from '@angular/core';
import {IAppConfig} from './app-config.model';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class AppConfigService {

    settings: IAppConfig;

    constructor(private http: HttpClient) {
    }

    loadConfiguration() {
        return new Promise((r, e) => {
            // 1 :  Chargement de la conf a distance : (attention au CORS)
            // this.http.get('http://localhost/configuration.json').subscribe((settings: IAppConfig) => {
            // ou 2 :Chargement de la conf dans les assets :
            this.http.get('./assets/configuration/configuration.json').subscribe((settings: IAppConfig) => {
                Object.assign(this, settings);
                this.settings = settings;
                r(this);
            }, (httpErrorResponse: HttpErrorResponse) => {
                console.log('Error retrieving configuration file: ' + httpErrorResponse.message);
                e(httpErrorResponse);
            });
        });
    }


    public apiBaseUrl(): string {
        return this.settings.apiServer.baseUrl;
    }
    public loggingConsoleEnabled(): boolean {
        return this.settings.logging.console;
    }

    public setSettings(settings) {
        this.settings = settings;
    }

}
