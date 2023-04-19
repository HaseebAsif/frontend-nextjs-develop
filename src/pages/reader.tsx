import React from 'react';

import { PrivateRoute } from 'components/tools';
import { Reader } from 'routes';

export default () => {
  return (
    <PrivateRoute>
      <Reader />
    </PrivateRoute>
  );
};
