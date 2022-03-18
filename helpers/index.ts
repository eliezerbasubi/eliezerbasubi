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
