import React from 'react';

import { PrivateRoute } from 'components/tools';
import { SearchFavourites } from 'routes';

export default () => {
  return (
    <PrivateRoute>
      <SearchFavourites />
    </PrivateRoute>
  );
};
