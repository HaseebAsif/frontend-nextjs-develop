import { useCallback, useState } from 'react';

export const useDownloadFile = (): {
  download: (path: string) => Promise<void>;
  success: boolean;
  loading: boolean;
  error: boolean;
} => {
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const resetStates = useCallback(() => {
    setSuccess(false);
    setError(false);
  }, []);

  const download = useCallback(
    async (path: string) => {
      resetStates();
      setLoading(true);

      await fetch(path)
        .then((response) => {
          response.blob().then((blob) => {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', path.replace(/^.*[\\/]/, ''));
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            setLoading(false);
            setSuccess(true);
          });
        })
        .catch(() => {
          setError(true);
          setLoading(false);
        });
    },
    [resetStates]
  );

  return { download, success, loading, error };
};
