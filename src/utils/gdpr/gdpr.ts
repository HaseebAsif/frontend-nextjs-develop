import { Consents } from 'consts/gdpr';
import { Consent } from 'redux/gdpr';
import { persistConfig } from 'redux/store';

// When redux isn't available this might come in handy
const getConsentValue = (): Consent[] => {
  const fallback: Consent[] = [Consents.Necessary];
  const persist = localStorage.getItem(`persist:${persistConfig.key}`);

  if (persist) {
    const parsePersist = JSON.parse(persist);

    if (parsePersist?.gdpr) {
      const parsePersistGdpr = JSON.parse(parsePersist.gdpr);
      return parsePersistGdpr?.consent || fallback;
    }
  }

  return fallback;
};

export const gdpr = {
  getConsentValue
};
