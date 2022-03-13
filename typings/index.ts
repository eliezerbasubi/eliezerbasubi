import { ReactNode } from 'react';

export type TLineDirection = 'left' | 'right';

export interface IExperience {
  _id?: number;
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  active?: boolean;
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

export type TSupportedSocials =
  | 'email'
  | 'linkedin'
  | 'twitter'
  | 'github'
  | 'telegram';

export type TSocial = Record<
  TSupportedSocials,
  { icon: ReactNode; url?: string }
>;

export interface IAbout {
  fullName: string;
  jobTitle: string;
  greeting?: string;
  personalDescription: string;
  avatarUrl?: unknown;
  socials?: Record<TSupportedSocials, string>;
}

export type TSkill = { _id: string; title: string; _type?: string };

export interface ISkills {
  _id: string;
  key: string;
  title: string;
  description: string;
  skills: TSkill[];
}

export interface IUserInfoState {
  about: IAbout;
  experience: IExperience[];
  skills: ISkills[];
}
