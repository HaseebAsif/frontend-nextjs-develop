import React, {
  ChangeEvent,
  MutableRefObject,
  useCallback,
  useMemo
} from 'react';

import classNames from 'classnames';
import { RegisterOptions, UseFormMethods } from 'react-hook-form';

import { Error } from 'components/ui/forms';
import { Icon, IconProps, Information } from 'components/ui/general';
import { Fonts } from 'types/icon';

import styles from './Text.module.scss';

export interface TextProps {
  name: string;
  type?: string;
  placeholder?: string;
  ariaLabel?: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  color?: 'light' | 'transparent' | 'alpha93' | 'alpha88'; // color names from $all-colors
  disabled?: boolean;
  register: UseFormMethods['register'];
  validation?: RegisterOptions;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  fullWidth?: boolean;
  error?: UseFormMethods['errors'];
  iconRight?: IconProps;
  iconLeft?: IconProps;
  rounded?: boolean;
  defaultValue?: string;
  information?: string;
  success?: boolean;
  borderless?: boolean;
  inputRef?: MutableRefObject<HTMLInputElement | null>;
}

const Text = ({
  name,
  type = 'text',
  placeholder,
  ariaLabel,
  label,
  size = 'lg',
  color = 'light',
  className,
  disabled,
  register,
  validation = {},
  onChange,
  onBlur,
  fullWidth,
  error,
  iconRight,
  iconLeft,
  rounded,
  defaultValue,
  information,
  success,
  borderless,
  inputRef
}: TextProps) => {
  const Root = useMemo(() => (label ? 'label' : 'div'), [label]);

  const getIconFont = useCallback(({ font }: { font?: Fonts }) => {
    if (font) {
      return font;
    }
    return 'stockholm';
  }, []);

  return (
    <>
      <Root
        className={classNames(styles.root, className, {
          [styles.disabled]: disabled,
          [styles[`${color}Color`]]: color,
          [styles[`${size}Size`]]: size,
          [styles.fullWidth]: fullWidth,
          [styles.hasIconRight]: iconRight,
          [styles.hasIconLeft]: iconLeft,
          [styles.rounded]: rounded,
          [styles.error]: !!error,
          [styles.success]: success,
          [styles.borderless]: borderless
        })}
      >
        {!!label && <div className={styles.label}>{label}</div>}
        <div className={styles.inputHolder}>
          <input
            type={type}
            disabled={disabled}
            ref={(event) => {
              if (inputRef) {
                inputRef.current = event;
              }

              register(event, validation);
            }}
            autoComplete="off"
            name={name}
            placeholder={placeholder}
            aria-label={ariaLabel || label || placeholder}
            className={styles.input}
            onChange={onChange}
            onBlur={onBlur}
            defaultValue={defaultValue}
          />
          {!!iconLeft && (
            <div className={styles.iconLeft}>
              <Icon name={iconLeft.name} font={getIconFont(iconLeft)} />
            </div>
          )}
          {!!iconRight && (
            <div className={styles.iconRight}>
              <Icon name={iconRight.name} font={getIconFont(iconRight)} />
            </div>
          )}
        </div>
      </Root>
      {!!information && (
        <Information className={styles.informationText}>
          {information}
        </Information>
      )}
      <Error error={error} />
    </>
  );
};

export default Text;
