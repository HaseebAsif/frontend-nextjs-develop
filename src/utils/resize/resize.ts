import { isStaging } from 'utils/isStaging';

export const resizeImage = (
  url: string,
  width: string | number,
  height: string | number
) => {
  if (isStaging()) {
    return `https://proxy.booksquare.isdemo.se/${width}x${height},fit/${url}`;
  }
  return `https://proxy.booksquare.se/${width}x${height},fit/${url}`;
};
