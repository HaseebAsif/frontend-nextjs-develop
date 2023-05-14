/**
 * When creating a path with params you should use a function as below:
 *
 * EXAMPLE_PARAMS: (id?: number) => (id ? `/example/${id}` : `/example/:id`)
 * - Paths.EXAMPLE_PARAMS() --> '/example/:id'
 * - Paths.EXAMPLE_PARAMS(123) --> '/example/123'
 */

import { Subject } from 'types/graphql';

import {
  getBookRoute,
  getSearchResultRoute,
  getSubjectsPageRoute
} from './routeHelpers';

export enum Prefixes {
  BACKOFFICE = 'backoffice'
}

interface SearchResultsRouteProps {
  searchTerm?: string;
  sorting?: string;
  page?: number;
}

interface subjectsPageRouteProps extends SearchResultsRouteProps {
  subject?: Subject;
}

interface bookParamsProps {
  id?: string;
  approved?: string;
  publisher?: string;
  page?: number;
}

export const Paths = Object.freeze({
  HOME: '/',
  ONEPAGER: '/onepage',
  LOGIN: (redirect?: string) =>
    redirect ? `/logga-in?redirect=${redirect}` : '/logga-in',
  TERMS: '/terms',
  BOCKER: (redirect?: string) =>
    redirect ? `https://booksquare.se/bocker` : 'https://booksquare.se/bocker',
  REGISTER: (redirect?: string) =>
    redirect
      ? `https://booksquare.se/registrering`
      : 'https://booksquare.se/registrering',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: (email?: string, nonce?: string) =>
    email && nonce
      ? `/reset-password/${email}/${nonce}`
      : '/reset-password/:email/:nonce',
  SETTINGS: '/settings',
  CHOOSE_PLAN: (redirect?: string) =>
    redirect ? `/valj-plan?redirect=${redirect}` : '/valj-plan',
  PROCESSING: (redirect?: string) =>
    redirect ? `/success?redirect=${redirect}` : '/success',
  OUR_MISSION: '/vart-uppdrag',
  LEGAL: '/legal',
  COOKIES: '/cookies',
  REFERRAL: '/manad-gratis',
  CONTACT_US: '/kontakta-oss',
  FAQ: '/faq',
  SEARCH_RESULTS: ({
    searchTerm,
    sorting,
    page
  }: SearchResultsRouteProps = {}) => {
    return getSearchResultRoute('search', searchTerm, sorting, page);
  },
  SEARCH_FAVOURITES: ({
    searchTerm,
    sorting,
    page
  }: SearchResultsRouteProps = {}) => {
    return getSearchResultRoute('favoriter', searchTerm, sorting, page);
  },
  SEARCH_LAST_READ: ({
    searchTerm,
    sorting,
    page
  }: SearchResultsRouteProps = {}) => {
    return getSearchResultRoute('senast-lasta', searchTerm, sorting, page);
  },
  BOOK_INFO: (title?: string, isbn?: string, previous?: string) => {
    if (previous) return `/book/${title}/${isbn}?previous=${previous}`;
    if (title) return `/book/${title}/${isbn}`;
    return '/book/:title/:isbn';
  },
  UNSUBSCRIBE: '/unsubscribe/:email',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  BOOKS: ({
    searchTerm,
    sorting,
    page,
    subject
  }: subjectsPageRouteProps = {}) => {
    if (subject) {
      return getSubjectsPageRoute('bocker', subject, {
        searchTerm,
        sorting,
        page: page?.toString()
      });
    }
    return `/bocker/:subject?`;
  },
  CONFIRMATION: '/confirmation',

  READER: (id?: string) => {
    if (id) {
      return `/reader?id=${id}`;
    }
    return '/reader';
  },
  DELETED_ACCOUNT: (deleted?: string) =>
    deleted
      ? `/delete-confirmation?deleted=${deleted}`
      : '/delete-confirmation',
  REQUEST_BOOK: '/efterfraga-bok',
  AUTHORS: '/forfattare',
  PUBLISHERS: '/forlag'
});

export const BackofficePaths = Object.freeze({
  BACKOFFICE_LOGIN: `/${Prefixes.BACKOFFICE}/login`,
  BACKOFFICE_STATISTICS_BOOKS: `/${Prefixes.BACKOFFICE}/books-statistics`,
  BACKOFFICE_USERS: `/${Prefixes.BACKOFFICE}/users`,
  BACKOFFICE_BOOKS: ({
    id,
    approved,
    publisher,
    page
  }: bookParamsProps = {}) => {
    return getBookRoute(
      `${Prefixes.BACKOFFICE}/books`,
      id,
      approved,
      publisher,
      page
    );
  },
  BACKOFFICE_MISSED_SEARCHES: `/${Prefixes.BACKOFFICE}/searches`,
  BACKOFFICE_EDIT_USER: (id?: string) =>
    id
      ? `/${Prefixes.BACKOFFICE}/edit-user?id=${id}`
      : `/${Prefixes.BACKOFFICE}/edit-user`,
  BACKOFFICE_EDIT_BOOK: ({
    id,
    approved,
    publisher,
    page
  }: bookParamsProps = {}) => {
    return getBookRoute(
      `${Prefixes.BACKOFFICE}/edit-book`,
      id,
      approved,
      publisher,
      page
    );
  }
});
