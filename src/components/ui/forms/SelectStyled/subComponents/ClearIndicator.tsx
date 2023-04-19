import React from 'react';

import { components } from 'react-select';

import { Icon } from 'components/ui/general';

export const ClearIndicator = ({
  selectProps: { iconMenuClose },
  ...rest
}: any) => {
  if (iconMenuClose)
    return (
      <components.ClearIndicator {...rest}>
        <Icon name={iconMenuClose} />
      </components.ClearIndicator>
    );

  return <components.ClearIndicator {...rest} />;
};
