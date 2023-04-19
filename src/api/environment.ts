interface Environment {
  uri?: string;
}

export const environment: Environment = {};

switch (true) {
  case !!process.env.NEXT_PUBLIC_APOLLO_URI:
    environment.uri = process.env.NEXT_PUBLIC_APOLLO_URI;
    break;

  default:
    environment.uri = undefined;
}
