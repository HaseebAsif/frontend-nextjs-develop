import mixpanel from 'mixpanel-browser';

import { User } from 'types/graphql';
import { isProduction } from 'utils/isProduction';

import { TrackerAPI } from './trackers';

const MixpanelTracker: TrackerAPI = {
  init(): void {
    if (process.env.REACT_APP_MIXPANEL_ID && isProduction()) {
      mixpanel.init(process.env.REACT_APP_MIXPANEL_ID, {
        debug: !isProduction(),
        api_host: 'https://api-eu.mixpanel.com',
        ignore_dnt: true
      });
    } else {
      console.error(
        'No mixpanel token available. Mixpanel tracking will not work!'
      );
    }
  },

  trackEvent(event: string, parameters?: Record<string, unknown>): void {
    if (process.env.REACT_APP_MIXPANEL_ID && isProduction()) {
      mixpanel.track(event, parameters);
    }
  },

  identify(user: User): void {
    if (process.env.REACT_APP_MIXPANEL_ID && isProduction()) {
      mixpanel.identify(user.email);
    }
  }
};

export const NewMixpanelTracker = () => MixpanelTracker;
