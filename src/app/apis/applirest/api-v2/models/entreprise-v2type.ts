/* eslint-disable */
import { AdresseType } from './adresse-type';
import { TimestampMapper } from './timestamp-mapper';
export interface EntrepriseV2Type {

  /**
   * True si la création de l'entreprise nécessite un suivi particulier
   */
  activerSuivi?: boolean;

  /**
   * Activité principale de l'entreprise
   */
  activite?: string;

  /**
   * Adresses de l'entreprise
   */
  adresses?: Array<AdresseType>;

  /**
   * Date de création
   */
  dateCreation?: string;
  dateMaj?: TimestampMapper;

  /**
   * Dénomination de l'entreprise
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
}
