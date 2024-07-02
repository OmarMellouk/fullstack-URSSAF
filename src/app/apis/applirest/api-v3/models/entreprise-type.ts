/* eslint-disable */
import { AdresseType } from './adresse-type';
import { AttestationType } from './attestation-type';
import { TimestampMapper } from './timestamp-mapper';
export interface EntrepriseType {

  /**
   * True si la création de l'entreprise nécessite un suivi particulier
   */
  activerSuivi?: boolean;

  /**
   * Activite principale de l'entreprise
   */
  activite?: string;

  /**
   * Adresses de l'entreprise
   */
  adresses?: Array<AdresseType>;

  /**
   * Attestations de l'entreprise
   */
  attestations?: Array<AttestationType>;

  /**
   * Date de creation
   */
  dateCreation?: string;

  /**
   * Date de fondation
   */
  dateFondation?: string;
  dateMaj?: TimestampMapper;

  /**
   * Denomination de l'entreprise
   */
  denomination?: string;

  /**
   * Identifiant de l'adresse
   */
  id?: number;

  /**
   * Code NAF de l'entreprise
   */
  naf?: string;

  /**
   * Numéro SIREN de l'entreprise
   */
  siren?: string;

  /**
   * Dernier utilisateur a avoir mis a jour une table de donnees
   */
  utilisateur?: string;
}
