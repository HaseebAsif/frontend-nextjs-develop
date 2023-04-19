import React, { FC, MutableRefObject, useCallback } from 'react';

import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { Text } from 'components/ui/forms';
import { IconProps } from 'components/ui/general';
import { Paths } from 'consts/router';

interface SearchResultsRouteProps {
  searchTerm?: string;
  sorting?: string;
  page?: number;
}

interface SearchFieldProps {
  defaultValue?: string;
  path?: ({ searchTerm, sorting, page }?: SearchResultsRouteProps) => string;
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  inputRef?: MutableRefObject<HTMLInputElement | null>;
  icon?: null | IconProps;
  color?: 'light' | 'transparent' | 'alpha93' | 'alpha88';
  rounded?: boolean;
  className?: string;
}

type SearchFormArgs = {
  search: string;
};

export const SearchBooksField: FC<SearchFieldProps> = ({
  defaultValue,
  path = Paths.SEARCH_RESULTS,
  placeholder,
  size = 'lg',
  inputRef,
  icon = { name: 'search' },
  color,
  rounded,
  className
}) => {
  const { register, handleSubmit, errors } = useForm();
  const router = useRouter();

  const onSubmit = useCallback(
    ({ search }: SearchFormArgs) => {
      if (search === '') {
        router.replace(path({ searchTerm: encodeURIComponent(search) }));
      }
      if (search) {
        router.replace(path({ searchTerm: encodeURIComponent(search) }));
      }
    },
    [router, path]
  );

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Text
            borderless
            size={size}
            name="search"
            register={register}
            placeholder={placeholder}
            fullWidth
            defaultValue={defaultValue}
            iconLeft={icon || undefined}
            error={errors.search}
            inputRef={inputRef}
            color={color || 'light'}
            rounded={rounded}
            className={className}
          />
        </div>
      </form>
    </>
  );
};
