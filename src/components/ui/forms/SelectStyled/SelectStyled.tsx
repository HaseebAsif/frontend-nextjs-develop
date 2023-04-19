import React, { useState } from 'react';

import classNames from 'classnames';
import {
  Controller,
  RegisterOptions,
  UseFormMethods,
  Control as ControlType
} from 'react-hook-form';
import Select, {
  FocusEventHandler,
  OptionsType,
  ActionMeta
} from 'react-select';

import { Error } from 'components/ui/forms';
import {
  Control,
  Group,
  GroupHeading,
  ClearIndicator,
  DropdownIndicator,
  Input,
  Option,
  IndicatorsContainer,
  MultiValue,
  MultiValueLabel,
  MultiValueRemove,
  LoadingIndicator,
  LoadingMessage,
  NoOptionsMessage,
  SingleValue
} from 'components/ui/forms/SelectStyled/subComponents';
import { Names } from 'types/icon';

import styles from './SelectStyled.module.scss';

type OptionType = {
  label: string;
  value: string;
};
type GroupOption = {
  label: string;
  options: OptionType[];
};
type OptionTypes = OptionType[] | GroupOption[];

export interface SelectStyledProps {
  options: OptionTypes;
  control: ControlType<Record<string, any>>;
  name: string;
  className?: string;
  ariaLabel?: string;
  onChange?: (
    value: OptionType | OptionsType<OptionType> | null,
    actionMeta: ActionMeta<OptionType>
  ) => void;
  onBlur?: FocusEventHandler;
  label?: string;
  size?: 'md'; // 'sm' | 'lg'
  isMulti?: boolean;
  isClearable?: boolean;
  loading?: boolean;
  iconMultiValueRemove?: Names;
  iconMenuClose?: Names;
  iconMenuOpen?: Names;
  fullWidth?: boolean;
  color?: 'light'; // color names from $all-colors
  noOptionsMessage?: (obj: { inputValue: string }) => string | null;
  disabled?: boolean;
  placeholder?: string;
  validation?: RegisterOptions;
  error?: UseFormMethods['errors'];
  defaultValue?: {
    [key: string]: any;
  };
}

const SelectStyled = ({
  options,
  control,
  name,
  className,
  ariaLabel,
  onChange,
  onBlur,
  label,
  size = 'md',
  isMulti,
  isClearable,
  loading,
  iconMultiValueRemove,
  iconMenuClose = 'times',
  iconMenuOpen = 'caret-down',
  fullWidth,
  color = 'light',
  noOptionsMessage,
  disabled,
  placeholder,
  validation,
  error,
  defaultValue,
  ...rest
}: SelectStyledProps) => {
  const [hasFocus, setHasFocus] = useState(false);

  return (
    <div
      className={classNames(styles.root, {
        [styles.fullWidth]: fullWidth,
        [styles[`${color}Color`]]: color,
        [styles[`${size}Size`]]: size,
        [styles.hasFocus]: hasFocus,
        [styles.disabled]: disabled
      })}
    >
      <Controller
        rules={validation}
        defaultValue={defaultValue || null}
        name={name}
        control={control}
        render={({
          ref,
          value,
          onChange: onInnerChange,
          onBlur: onInnerBlur
        }) => (
          <Select
            {...{
              ref,
              value,
              name,
              label,
              fullWidth,
              isMulti,
              isClearable,
              options: loading ? [] : options || [],
              iconMultiValueRemove,
              iconMenuClose,
              noOptionsMessage,
              iconMenuOpen
            }}
            {...rest}
            placeholder={placeholder || ''}
            onChange={(newValue, actionMeta) => {
              onInnerChange(newValue, actionMeta);
              onChange?.(newValue, actionMeta);
            }}
            onBlur={(event) => {
              onInnerBlur();
              onBlur?.(event);
              setHasFocus(false);
            }}
            onFocus={() => setHasFocus(true)}
            isLoading={loading}
            isDisabled={disabled}
            aria-label={ariaLabel || label || placeholder}
            components={{
              Control,
              Group,
              GroupHeading,
              ClearIndicator,
              DropdownIndicator,
              Input,
              Option,
              IndicatorsContainer,
              MultiValue,
              MultiValueLabel,
              MultiValueRemove,
              LoadingIndicator,
              LoadingMessage,
              NoOptionsMessage,
              SingleValue
            }}
            className={className}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary25: 'transparent',
                primary50: 'transparent'
              }
            })}
          />
        )}
      />
      <Error error={error} />
    </div>
  );
};

export default SelectStyled;
