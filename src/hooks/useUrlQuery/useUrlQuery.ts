import { useSearchParams } from 'next/navigation';

export const useUrlQuery = (): URLSearchParams => {
  const searchParams = useSearchParams();

  return new URLSearchParams(searchParams);
};
