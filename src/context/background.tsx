import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState
} from 'react';

interface BackgroundContextProviderProps {
  children: ReactNode;
  color?: 'light' | 'beta' | 'delta';
}

export const BackgroundContext = createContext<
  [string | undefined, Dispatch<SetStateAction<string | undefined>>]
>([undefined, () => {}]);

export const BackgroundContextProvider = ({
  children,
  color = 'light'
}: BackgroundContextProviderProps) => {
  const [backgroundColor, setBackgroundColor] = useState<string | undefined>(
    color || undefined
  );

  useEffect(() => {
    if (color) {
      setBackgroundColor(color);
    }
  }, [color]);

  return (
    <BackgroundContext.Provider value={[backgroundColor, setBackgroundColor]}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const BackgroundContextConsumer = BackgroundContext.Consumer;
