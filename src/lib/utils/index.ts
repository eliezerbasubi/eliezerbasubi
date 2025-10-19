import { clsx, ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const formatDate = (date: string, format?: Intl.DateTimeFormatOptions) =>
  new Date(date).toLocaleDateString('en-us', format);
