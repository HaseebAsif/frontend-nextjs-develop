import React from 'react';

import { Html, Head, Main, NextScript } from 'next/document';

export default () => {
  return (
    <Html>
      <Head>
        <style type="text/css" />
      </Head>
      <body>
        <Main />
        <div id="portal" />
        <div id="modal" />
        <NextScript />
      </body>
    </Html>
  );
};
