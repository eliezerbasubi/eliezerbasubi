export type TLineDirection = 'left' | 'right';

export interface IExperience {
  id?: number;
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  duties: string[];
}
