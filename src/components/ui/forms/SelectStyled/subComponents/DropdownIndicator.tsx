import React from 'react';

import { components } from 'react-select';

import { Icon } from 'components/ui/general';

export const DropdownIndicator = ({
  selectProps: { iconMenuOpen },
  ...rest
}: any) => {
  if (iconMenuOpen)
    return (
      <components.DropdownIndicator {...rest}>
        <Icon name={iconMenuOpen} />
      </components.DropdownIndicator>
    );

  return <components.DropdownIndicator {...rest} />;
};
