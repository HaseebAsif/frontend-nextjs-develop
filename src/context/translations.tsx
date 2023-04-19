import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useState
} from 'react';

import { IntlProvider } from 'react-intl';

import { messages } from 'lang';

interface TranslationsContextProviderProps {
  children: ReactNode;
}

export const TranslationsContext = createContext<
  [string, Dispatch<SetStateAction<string>>]
>(['', () => {}]);

export const TranslationsContextProvider = ({
  children
}: TranslationsContextProviderProps) => {
  const [language, setLanguage] = useState('SV');

  const getMessages = useCallback((lang) => {
    switch (lang) {
      case 'SV':
        return messages.sv;
      default:
    }
  }, []);

  return (
    <TranslationsContext.Provider value={[language, setLanguage]}>
      <IntlProvider
        key={language}
        messages={getMessages(language)}
        locale={language}
        defaultLocale="sv"
      >
        {children}
      </IntlProvider>
    </TranslationsContext.Provider>
  );
};

export const TranslationsContextConsumer = TranslationsContext.Consumer;
