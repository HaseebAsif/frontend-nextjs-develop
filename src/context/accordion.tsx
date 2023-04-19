import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState
} from 'react';

interface AccordionContextProviderProps {
  children: ReactNode;
  activeIds?: string[];
}

export const AccordionContext = createContext<
  [string[], Dispatch<SetStateAction<string[]>>]
>([[], () => {}]);

export const AccordionContextProvider = ({
  children,
  activeIds
}: AccordionContextProviderProps) => {
  const [activeItems, setActiveItems] = useState<string[]>(activeIds || []);

  useEffect(() => {
    if (activeIds) {
      setActiveItems(activeIds);
    }
  }, [activeIds]);

  return (
    <AccordionContext.Provider value={[activeItems, setActiveItems]}>
      {children}
    </AccordionContext.Provider>
  );
};

export const AccordionContextConsumer = AccordionContext.Consumer;
