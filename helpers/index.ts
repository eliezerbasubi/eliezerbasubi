export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
  });
