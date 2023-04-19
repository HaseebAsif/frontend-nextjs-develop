import React from 'react';

import { AppProps } from 'next/app';

import { App } from 'components/tools';

import 'styles/_global.scss';

export default (props: AppProps) => {
  return <App {...props} />;
};
