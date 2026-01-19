
export enum ThemeType {
  STRAWBERRY = 'strawberry',
  GRAPE = 'grape'
}

export interface InbodyStat {
  label: string;
  change: string;
  percentage: number;
  colorClass: string;
}

export interface CaseData {
  id: string;
  theme: ThemeType;
  duration: string;
  weightLoss: string;
  weightChange: {
    from: string;
    to: string;
  };
  stats: InbodyStat[];
  patient: {
    name: string;
    age: number;
    job: string;
  };
  testimonial: string;
}
