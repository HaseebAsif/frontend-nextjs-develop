import TagManager, { DataLayerArgs } from 'react-gtm-module';

import { Events } from 'consts/gtm';
import { gdpr, isBuild, isLocalhost, isStaging } from 'utils';

const gtmId = process.env.REACT_APP_GTM_ID;
const okayToUseGtm = isBuild() && !isLocalhost() && !isStaging();

const init = () => {
  if (okayToUseGtm && gtmId) {
    TagManager.initialize({
      gtmId,
      dataLayer: {
        event: Events.Consent,
        consent: gdpr.getConsentValue()
      }
    });
  }
};

const push = (args: DataLayerArgs) => {
  if (okayToUseGtm && gtmId) {
    TagManager.dataLayer(args);
  }
};

export const gtm = {
  init,
  push
};
