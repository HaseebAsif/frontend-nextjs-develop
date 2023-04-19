import { Subject } from 'types/graphql';
import { createURLTitle, subjectTranslations } from 'utils';

const getBookRoute = (
  route: string,
  id?: string,
  approved?: string,
  publisher?: string,
  page?: number
) => {
  if (id || approved || page || publisher) {
    const idParam = () => {
      if (id) {
        return `id=${id}`;
      }
      return '';
    };

    const approvedParam = () => {
      if (approved) {
        if (id) {
          return `&approved=${approved}`;
        }
        return `approved=${approved}`;
      }
      return '';
    };

    const publisherParam = () => {
      if (publisher) {
        if (id || approved) {
          return `&publisher=${publisher}`;
        }
        return `publisher=${publisher}`;
      }
      return '';
    };

    const pageParam = () => {
      if (page) {
        if (id || approved || publisher) {
          return `&page=${page}`;
        }
        return `page=${page}`;
      }
      return '';
    };

    return `/${route}?${idParam()}${approvedParam()}${publisherParam()}${pageParam()}`;
  }
  return `/${route}`;
};

const getSearchResultRoute = (
  route: string,
  searchTerm?: string,
  sorting?: string,
  page?: number,
  subject?: Subject
) => {
  if (searchTerm || sorting || page || subject) {
    const searchTermParam = () => {
      if (searchTerm) {
        return `searchTerm=${searchTerm}`;
      }
      return '';
    };

    const sortingParam = () => {
      if (sorting) {
        if (searchTerm) {
          return `&sorting=${sorting}`;
        }
        return `sorting=${sorting}`;
      }
      return '';
    };

    const pageParam = () => {
      if (page) {
        if (searchTerm || sorting) {
          return `&page=${page}`;
        }
        return `page=${page}`;
      }
      return '';
    };

    const subjectParam = () => {
      if (subject) {
        if (searchTerm || sorting || page) {
          return `&subject=${subject}`;
        }
        return `subject=${subject}`;
      }
      return '';
    };

    return `/${route}?${searchTermParam()}${sortingParam()}${pageParam()}${subjectParam()}`;
  }
  return `/${route}`;
};

const getSubjectsPageRoute = (
  route: string,
  subject: Subject,
  queryParams: Record<string, string | undefined>
) => {
  const subjectArray = Object.entries(Subject).find(
    ([, subjectEnum]) => subject === subjectEnum
  ) as [string, Subject];

  const translatedSubject = createURLTitle(
    (subjectTranslations as { [lorem: string]: any })[subjectArray[0]]
      .defaultMessage
  );

  const filteredQueryParams = Object.fromEntries(
    Object.entries(queryParams).filter(
      (param): param is [string, string] => param[1] !== undefined
    )
  );
  if (Object.keys(filteredQueryParams).length) {
    const params = new URLSearchParams(filteredQueryParams).toString();
    return `/${route}/${translatedSubject}?${params}`;
  }

  return `/${route}/${translatedSubject}`;
};

export { getBookRoute, getSearchResultRoute, getSubjectsPageRoute };
