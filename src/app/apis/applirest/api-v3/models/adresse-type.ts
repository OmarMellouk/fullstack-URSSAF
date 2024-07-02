/* eslint-disable */
/* eslint-disable */
import { CommuneType } from './commune-type';
import { TimestampMapper } from './timestamp-mapper';
export interface AdresseType {
  commune?: CommuneType;
  dateMaj?: TimestampMapper;

  /**
   * Identifiant de l'adresse
   */
  id?: number;

  /**
   * Premiere ligne de l'adresse
   */
  ligne1?: string;

  /**
   * Seconde ligne de l'adresse
   */
  ligne2?: string;

  /**
   * Dernier utilisateur a avoir mis a jour une table de donnees
   */
  utilisateur?: string;
}
