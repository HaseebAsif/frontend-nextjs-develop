import React, { ChangeEvent, useCallback, useMemo } from 'react';

import classNames from 'classnames';
import { RegisterOptions, UseFormMethods } from 'react-hook-form';
import TextareaAutosize, {
  TextareaAutosizeProps
} from 'react-textarea-autosize';

import { Error } from 'components/ui/forms';
import { Icon, IconProps } from 'components/ui/general';
import { Fonts } from 'types/icon';

import styles from './Textarea.module.scss';

export interface TextareaProps extends TextareaAutosizeProps {
  name: string;
  placeholder?: string;
  ariaLabel?: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  color?: 'light'; // color names from $all-colors
  disabled?: boolean;
  register: UseFormMethods['register'];
  validation?: RegisterOptions;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  fullWidth?: boolean;
  error?: UseFormMethods['errors'];
  iconRight?: IconProps;
  iconLeft?: IconProps;
  rounded?: boolean;
  defaultValue?: string;
}

const Text = ({
  name,
  placeholder,
  ariaLabel,
  label,
  size = 'md',
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
  maxRows,
  minRows = 4,
  onHeightChange,
  cacheMeasurements,
  rounded,
  defaultValue
}: TextareaProps) => {
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
          [styles.rounded]: rounded
        })}
      >
        {!!label && <div className={styles.label}>{label}</div>}
        <div className={styles.textareaHolder}>
          <TextareaAutosize
            disabled={disabled}
            ref={register({ ...validation })}
            autoComplete="off"
            name={name}
            placeholder={placeholder}
            aria-label={ariaLabel || label || placeholder}
            className={styles.textarea}
            onChange={onChange}
            onBlur={onBlur}
            maxRows={maxRows}
            minRows={minRows}
            onHeightChange={onHeightChange}
            cacheMeasurements={cacheMeasurements}
            defaultValue={defaultValue}
          />
          {!!iconLeft && (
            <div className={styles.iconLeft}>
              <Icon
                name={iconLeft.name}
                font={getIconFont(iconLeft)}
                className={styles.icon}
              />
            </div>
          )}
          {!!iconRight && (
            <div className={styles.iconRight}>
              <Icon
                name={iconRight.name}
                font={getIconFont(iconRight)}
                className={styles.icon}
              />
            </div>
          )}
        </div>
      </Root>
      <Error error={error} />
    </>
  );
};

export default Text;
