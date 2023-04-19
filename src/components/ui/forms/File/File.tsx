import React, { ChangeEvent, useState, useCallback } from 'react';

import classNames from 'classnames';
import { RegisterOptions, UseFormMethods } from 'react-hook-form';

import { Error } from 'components/ui/forms';
import { Button, ButtonProps } from 'components/ui/general';

import styles from './File.module.scss';

export interface FileProps {
  name: string;
  accept?: string;
  capture?: 'user' | 'environment';
  multiple?: boolean;
  className?: string;
  label: string;
  ariaLabel?: string;
  disabled?: boolean;
  register: UseFormMethods['register'];
  validation?: RegisterOptions;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: UseFormMethods['errors'];
  loading?: boolean;
  button?: ButtonProps;
}

const File = ({
  name,
  accept,
  capture,
  multiple,
  className,
  ariaLabel,
  disabled,
  onChange,
  onBlur,
  label,
  register,
  validation,
  error,
  loading,
  button
}: FileProps) => {
  const [fileList, setFileList] = useState<string[]>([]);

  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const {
        target: { files }
      } = event;

      if (onChange) onChange(event);

      if (files) {
        setFileList(Array.from(files).map((file) => file.name));
      }
    },
    [onChange]
  );

  return (
    <>
      <label
        className={classNames(styles.root, className, {
          [styles.disabled]: disabled,
          [styles.fullWidth]: button?.fullWidth
        })}
      >
        <input
          type="file"
          accept={accept}
          capture={capture}
          multiple={multiple}
          disabled={disabled}
          name={name}
          onChange={handleOnChange}
          onBlur={onBlur}
          aria-label={ariaLabel || label}
          className={styles.input}
          ref={register(validation)}
        />
        <Button
          as="div"
          size="md"
          className={styles.button}
          loading={loading}
          {...button}
        >
          {label}
        </Button>
        {fileList.map((file, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={file + index}>{file}</div>
        ))}
      </label>
      <Error error={error} />
    </>
  );
};

export default File;
