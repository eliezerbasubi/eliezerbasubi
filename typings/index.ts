export type TLineDirection = 'left' | 'right';

export interface IExperience {
  id?: number;
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  duties: string[];
}

export interface IProject {
  id?: string | number;
  title: string;
  description: string;
  tags?: string[];
  thumbnail?: string;
}
export interface IArticle extends IProject {
  author?: string;
  publishedOn?: string;
  readCount?: number;
}
