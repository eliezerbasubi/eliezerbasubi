import { atom } from 'recoil';
import { IUserInfoState } from '../typings';

export const userInfoState = atom<IUserInfoState>({
  key: 'mainState',
  default: {
    about: {
      greeting: 'Hi, I am',
      fullName: 'Eliezer W. Basubi',
      jobTitle: 'Soft. Dev',
      personalDescription: 'A dynamic Senior Frontend Engineer',
      socials: {
        email: 'eliezer.basubi30@gmail.com',
        linkedin: 'https://www.linkedin.com/in/eliezerbasubi',
        github: 'https://www.twitter.com/eliezer_basubi',
        twitter: 'https://www.twitter.com/eliezer_basubi',
        telegram: 'https://t.me/eliezerbasubi',
      },
    },
    experience: [],
    skills: [],
    works: [],
  },
});
