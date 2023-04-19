import React from 'react';

import { PrivateRoute } from 'components/tools';
import { SearchLastRead } from 'routes';

export default () => {
  return (
    <PrivateRoute>
      <SearchLastRead />
    </PrivateRoute>
  );
};
