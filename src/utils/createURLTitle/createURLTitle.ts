// Replaces diacritic chars with normal chars, replaces spaces with "-",
// Removes special characters except "-", Removes duplicates of "-";

export const createURLTitle = (title: string) => {
  return title
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s/g, '-')
    .replace(/[^a-zA-Z0-9-]/g, '')
    .replace(/(-)\1+/g, '-')
    .toLowerCase();
};
