/* eslint-disable */
/* eslint-disable */
import { TimestampMapper } from './timestamp-mapper';
export interface AttestationType {
  dateMaj?: TimestampMapper;

  /**
   * Identifiant de l'adresse
   */
  id?: number;

  /**
   * nom du fichier importé
   */
  nom?: string;

  /**
   * Dernier utilisateur a avoir mis a jour une table de donnees
   */
  utilisateur?: string;
}
