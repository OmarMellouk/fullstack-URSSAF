export interface Arborescence {
  text: string;
  value: any; // true : case cochée, false : case décochée, null, case semi-cochée
  children?: Arborescence[];
  expandChildByDefault?: boolean;
  icon?: string;
}

export interface ArborescenceOutputEvent {
  value: boolean;
  parentsIndexes: string;
}