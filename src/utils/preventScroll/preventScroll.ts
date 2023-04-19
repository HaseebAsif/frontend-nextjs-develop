import { ClassNames } from 'consts/preventScroll';
import { isSSR } from 'utils';

export const preventScroll = (shouldPrevent: boolean): void => {
  if (isSSR) return;

  const { classList } = document.body;
  if (shouldPrevent) {
    classList.add(ClassNames.PreventScroll);
  } else {
    classList.remove(ClassNames.PreventScroll);
  }
};
