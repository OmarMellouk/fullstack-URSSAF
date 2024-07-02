export interface OngletPremierNiveau {
  label: string;
  badge?: string;
  badgeValue?: number;
  iconBefore?: string;
  iconAfter?: string;
  infobulle?: string;
  canClose?: boolean;
}

export interface OngletPremierNiveauIcone {
  label: string;
  subLabel: string;
  icon: string;
  canClose?: boolean;
}

export interface OngletDeuxiemeNiveau {
  label: string;
  badge?: string;
  badgeValue?: number;
  iconBefore?: string;
  iconAfter?: string;
  infobulle?: string;
  canClose?: boolean;
}

export interface NextActiveTab {
  value: number;
  isLast: boolean;
}
