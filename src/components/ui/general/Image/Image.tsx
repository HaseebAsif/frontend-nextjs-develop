import React, { useCallback, useState } from 'react';

import classNames from 'classnames';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

import styles from './Image.module.scss';

export interface ImageProps extends NextImageProps {
  fadeIn?: boolean;
  placeholder?: NextImageProps['placeholder'];
  backgroundColor?: 'dark' | 'light'; // color names from $base-colors and $common-colors
  className?: string;
  classNameImage?: string;
  cover?: boolean;
  backup?: string;
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
}

export const Image = ({
  fadeIn = true,
  backgroundColor,
  className,
  classNameImage,
  cover,
  fit,
  backup = '',
  ...props
}: ImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(props.src);
  const handleOnLoadingComplete = useCallback(
    (result: { naturalWidth: number; naturalHeight: number }) => {
      setLoaded(true);
      props.onLoadingComplete?.(result as HTMLImageElement);
    },
    [props]
  );

  const handleError = useCallback(() => {
    setImageSrc(backup);
  }, [backup]);

  return (
    <div
      className={classNames(styles.root, className, {
        [styles.fadeIn]: fadeIn,
        [styles.loaded]: loaded,
        [styles.cover]: cover,
        [styles[`fit-${fit}`]]: !!fit,
        [styles[`${props.layout}Layout`]]: props.layout,
        [styles[`${backgroundColor}BackgroundColor`]]: backgroundColor
      })}
    >
      <NextImage
        {...props}
        src={imageSrc}
        onLoadingComplete={handleOnLoadingComplete}
        className={classNames(styles.image, classNameImage)}
        onError={handleError}
      />
    </div>
  );
};
