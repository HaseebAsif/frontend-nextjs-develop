import React from 'react';

import dynamic from 'next/dynamic';

const DynamicLogin = dynamic(
  () => import('routes/Login').then((mod) => mod.Login),
  {
    ssr: false
  }
);

export default () => {
  return <DynamicLogin />;
};
