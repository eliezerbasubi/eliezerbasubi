import { clsx, ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const formatDate = (
  date: string,
  format: {
    year: 'numeric' | '2-digit' | undefined;
    month: 'long' | 'short' | '2-digit' | undefined;
    day?: 'numeric' | '2-digit' | undefined;
  } = {
    year: 'numeric',
    month: 'long',
  }
) => new Date(date).toLocaleDateString('en-us', format);
