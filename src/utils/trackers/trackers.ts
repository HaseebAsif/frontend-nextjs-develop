import { User } from 'types/graphql';

export interface TrackerAPI {
  init(): void;

  trackEvent(event: string, parameters?: Record<string, unknown>): void;
  identify(user: User): void;
}

export class Trackers implements TrackerAPI {
  adapters: TrackerAPI[];

  constructor(adapters: Array<TrackerAPI>) {
    this.adapters = adapters;
  }

  init() {
    this.adapters.forEach((adapter: TrackerAPI) => adapter.init());
  }

  trackEvent(event: string, parameters?: Record<string, unknown>): void {
    this.adapters.forEach((adapter: TrackerAPI) =>
      adapter.trackEvent(event, parameters)
    );
  }

  identify(user: User): void {
    this.adapters.forEach((adapter: TrackerAPI) => adapter.identify(user));
  }
}
