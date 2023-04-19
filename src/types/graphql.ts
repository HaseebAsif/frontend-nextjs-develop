import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;

      export type PossibleTypesResultData = {
  "possibleTypes": {}
};
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string | number;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Time: any;
  Uint32: any;
  Uint64: any;
  Upload: any;
};

export type AuthenticationResponse = {
  __typename?: 'AuthenticationResponse';
  jwt: Scalars['String'];
  message: Scalars['String'];
  newAccount: Scalars['Boolean'];
  refreshToken: Scalars['String'];
  success: Scalars['Boolean'];
  user?: Maybe<User>;
  userId: Scalars['String'];
};

export type Author = {
  __typename?: 'Author';
  createdAt: Scalars['Time'];
  id: Scalars['ID'];
  image?: Maybe<Image>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['Time']>;
};

export type AuthorCollection = {
  __typename?: 'AuthorCollection';
  edges: Array<Author>;
  meta: PageInfo;
};

export type AuthorFilter = {
  createdAt?: InputMaybe<TimeRangeFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  searchTerm?: InputMaybe<Scalars['String']>;
};

export type AuthorInput = {
  image?: InputMaybe<Scalars['Upload']>;
  name: Scalars['String'];
};

export type Book = {
  __typename?: 'Book';
  approved: Scalars['Boolean'];
  authors: Array<Author>;
  bookUrl?: Maybe<Scalars['String']>;
  categories: Array<Scalars['String']>;
  createdAt: Scalars['Time'];
  description: Scalars['String'];
  format: BookFormat;
  id: Scalars['ID'];
  image?: Maybe<Image>;
  isbn: Scalars['String'];
  language: BookLanguage;
  numberOfPages: Scalars['Int'];
  price: Scalars['Float'];
  publisher: Publisher;
  releaseYear: Scalars['Int'];
  subjects: Array<Subject>;
  title: Scalars['String'];
  tracking?: Maybe<Tracking>;
  updatedAt?: Maybe<Scalars['Time']>;
  version: Scalars['String'];
};

export type BookCollection = {
  __typename?: 'BookCollection';
  edges: Array<Book>;
  meta: PageInfo;
};

export type BookFilter = {
  approved?: InputMaybe<Scalars['Boolean']>;
  favourite?: InputMaybe<Scalars['Boolean']>;
  lastRead?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  publisherId?: InputMaybe<Scalars['ID']>;
  /** You can search on the fields: title, author and isbn */
  searchTerm?: InputMaybe<Scalars['String']>;
  subjects?: InputMaybe<Array<Subject>>;
};

export enum BookFormat {
  Epub = 'epub',
  Pdf = 'pdf'
}

export enum BookLanguage {
  English = 'english',
  Other = 'other',
  Swedish = 'swedish'
}

export type BookSubjects = {
  __typename?: 'BookSubjects';
  count: Scalars['Int'];
  subject: Subject;
};

export type Bookmark = {
  __typename?: 'Bookmark';
  bookId: Scalars['ID'];
  createdAt: Scalars['Time'];
  description?: Maybe<Scalars['String']>;
  epubPage?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  pdfPage?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt: Scalars['Time'];
  userId: Scalars['ID'];
};

export type BookmarkCollection = {
  __typename?: 'BookmarkCollection';
  edges: Array<Bookmark>;
  meta: PageInfo;
};

export type BookmarkFilter = {
  bookId?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  searchTerm?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export enum ContactFormCategory {
  Account = 'account',
  Books = 'books',
  Other = 'other',
  Subscription = 'subscription',
  Technical = 'technical'
}

export type ContactFormInput = {
  category: ContactFormCategory;
  email: Scalars['String'];
  message: Scalars['String'];
  name: Scalars['String'];
};

export type Coupon = {
  __typename?: 'Coupon';
  id: Scalars['ID'];
  promoCode: Scalars['String'];
  user: User;
};

export type CreateBookInput = {
  authors: Array<Scalars['ID']>;
  categories: Array<Scalars['String']>;
  description: Scalars['String'];
  format: BookFormat;
  image?: InputMaybe<Scalars['Upload']>;
  isbn: Scalars['String'];
  language: BookLanguage;
  numberOfPages: Scalars['Int'];
  publisherId: Scalars['ID'];
  releaseYear: Scalars['Int'];
  subjects: Array<Subject>;
  title: Scalars['String'];
  version: Scalars['String'];
};

export type CreateBookmarkInput = {
  bookId: Scalars['ID'];
  description?: InputMaybe<Scalars['String']>;
  epubPage?: InputMaybe<Scalars['String']>;
  pdfPage?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type CreateCheckoutPortalInput = {
  cancelUrl?: InputMaybe<Scalars['String']>;
  priceId: Scalars['String'];
  successUrl?: InputMaybe<Scalars['String']>;
};

export type CreateHighlightInput = {
  bookId: Scalars['ID'];
  epubPage?: InputMaybe<Scalars['String']>;
  highlight: Scalars['String'];
  pdfPage?: InputMaybe<Scalars['Int']>;
};

export type CreatePublisherInput = {
  address: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  email: Scalars['String'];
  image?: InputMaybe<Scalars['Upload']>;
  name: Scalars['String'];
  organisationNumber: Scalars['String'];
  phoneNumber: Scalars['String'];
  postalCode: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  image?: InputMaybe<Scalars['Upload']>;
  language?: InputMaybe<Language>;
  lastName: Scalars['String'];
  mobileNumber?: InputMaybe<Scalars['String']>;
  newsletter?: InputMaybe<Scalars['Boolean']>;
  password: Scalars['String'];
  role?: InputMaybe<UserRole>;
};

export type FloatRangeFilter = {
  from?: InputMaybe<Scalars['Float']>;
  to?: InputMaybe<Scalars['Float']>;
};

export type Highlight = {
  __typename?: 'Highlight';
  bookId: Scalars['ID'];
  createdAt: Scalars['Time'];
  epubPage?: Maybe<Scalars['String']>;
  highlight: Scalars['String'];
  id: Scalars['ID'];
  pdfPage?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['Time'];
  userId: Scalars['ID'];
};

export type HighlightCollection = {
  __typename?: 'HighlightCollection';
  edges: Array<Highlight>;
  meta: PageInfo;
};

export type HighlightFilter = {
  bookId?: InputMaybe<Scalars['ID']>;
  epubPage?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  pdfPage?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type Image = {
  __typename?: 'Image';
  contentType: Scalars['String'];
  createdAt: Scalars['Time'];
  filename: Scalars['String'];
  height: Scalars['Uint32'];
  id: Scalars['ID'];
  originalName: Scalars['String'];
  sizeInBytes: Scalars['Uint64'];
  uri: Scalars['String'];
  width: Scalars['Uint32'];
};

export type ImageCollection = {
  __typename?: 'ImageCollection';
  edges: Array<Image>;
  meta: PageInfo;
};

export type ImageFilter = {
  limit?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type ImageUpdate = {
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['Upload']>;
};

export type IntRangeFilter = {
  from?: InputMaybe<Scalars['Int']>;
  to?: InputMaybe<Scalars['Int']>;
};

export type JoinReason = {
  __typename?: 'JoinReason';
  id: Scalars['ID'];
  occupation: JoinReasonOccupation;
  school?: Maybe<School>;
  subject?: Maybe<Subject>;
};

export type JoinReasonInput = {
  occupation: JoinReasonOccupation;
  school?: InputMaybe<School>;
  subject?: InputMaybe<Subject>;
};

export enum JoinReasonOccupation {
  PersonalInterest = 'personal_interest',
  Studies = 'studies',
  Work = 'work'
}

export enum Language {
  English = 'english',
  Swedish = 'swedish'
}

export type MissedSearch = {
  __typename?: 'MissedSearch';
  rows: Scalars['Int'];
  searchTerm: Scalars['String'];
  user?: Maybe<User>;
};

export type MissedSearchCollection = {
  __typename?: 'MissedSearchCollection';
  edges: Array<MissedSearch>;
  meta: PageInfo;
};

export type MissedSearchFilter = {
  createdAt?: InputMaybe<TimeRangeFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  searchTerm?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** addSignupReason: adds signup reson to the current user */
  addSignupReason: User;
  /** createAuthor, creates author from input */
  createAuthor?: Maybe<Author>;
  /** createBook, create a new book */
  createBook?: Maybe<Book>;
  /** createBookmark, create a new bookmark */
  createBookmark?: Maybe<Bookmark>;
  /** createHighlight, create a new highlight */
  createHighlight?: Maybe<Highlight>;
  /** createPublisher, create a new publisher */
  createPublisher?: Maybe<Publisher>;
  /**
   * createStripeCustomerPortal, returns a session id for you to create a stripe checkout porta
   * if a user has a subscription an error will be returned, use createStripeCustomerPortal instead
   */
  createStripeCheckoutPortal?: Maybe<Scalars['String']>;
  /** createStripeCustomerPortal, returns a url to navigate to the stripe customer portal */
  createStripeCustomerPortal?: Maybe<Scalars['String']>;
  /** createUser, create a new user */
  createUser: AuthenticationResponse;
  /** deleteAuthor, deletes author by id */
  deleteAuthor: NoContent;
  /** deleteBook, removes an existing book */
  deleteBook: NoContent;
  /** deleteBookmark, removes an existing bookmark */
  deleteBookmark: NoContent;
  /** deleteHighlight, removes an existing highlight */
  deleteHighlight: NoContent;
  /** deletePublisher, removes an existing publisher */
  deletePublisher: NoContent;
  /** deleteUser, removes a user in the system */
  deleteUser: NoContent;
  /** exportBooksCSV, creates and saves csv file for download of all the books within the filter, returning the url for that file */
  exportBooksCSV?: Maybe<Scalars['String']>;
  /** exportCSV, creates and saves csv file for download, returning the url for that file */
  exportCSV?: Maybe<Scalars['String']>;
  /** exportPacktSalesCSV, creates a report from a date and to a date, marking it as fixed */
  exportPacktSalesCSV?: Maybe<Scalars['String']>;
  /** exportSearchesCSV, creates and saves csv file for download, returning the url for that file */
  exportSearchesCSV?: Maybe<Scalars['String']>;
  /** inactivateBook, sets a book as inactive */
  inactivateBook: NoContent;
  /**
   * loginApple, This endpoint is used by users which have loged in the apple and sent the apple token to backend for validation.
   * If the validation is successful the user have access to the website the jwt token
   * Apple only returns the name of the users in frontend and only in the first request
   */
  loginApple: AuthenticationResponse;
  /** loginEmail, This endpoint is used by users with a valid email and password. Get access to the website with the jwt token */
  loginEmail: AuthenticationResponse;
  /**
   * loginGoogle, This endpoint is used by users which have loged in the google and sent the google token to backend for validation.
   * If the validation is successful the user have access to the website the jwt token
   */
  loginGoogle: AuthenticationResponse;
  /** preSignup, registers email for email when service is launched, and/ or newsletter interest */
  preSignup: NoContent;
  /** reSendUserInvite, resend the activation email */
  reSendUserInvite: NoContent;
  /** refreshToken, called when jwt has expired. Param, the refresh token, returns new AuthenticationResponse */
  refreshToken: AuthenticationResponse;
  /** removePreSignup, removes signed up user */
  removePreSignup: NoContent;
  /** resendVerifyEmail, resends the users email */
  resendVerifyEmail?: Maybe<User>;
  /** resetPasswordFinalize, finilize the reset of password and returns a jwt token. */
  resetPasswordFinalize: AuthenticationResponse;
  /** resetPasswordInitiate, sends an email to the user for initiation of reset password. */
  resetPasswordInitiate: NoContent;
  /** sendContactForm, takes the arguments from contact form and emails to booksquare */
  sendContactForm: NoContent;
  /** approveBook set a  book as approved, making it searchable */
  setApproveBook?: Maybe<Book>;
  /** setFavourite, takes book id as parameter and adds as favourite in tracking */
  setFavourite: Tracking;
  /** track, adds tracking session if tracking has not been created it will create, otherwise updates last opened at, taking the book id as identifier */
  track?: Maybe<Tracking>;
  /** unregisterNewsletter, removes the user from newsletter signup */
  unregisterNewsletter: NoContent;
  /** updateAuthor, updates the author specified by id */
  updateAuthor?: Maybe<Author>;
  /** updateBook, update an existing book */
  updateBook?: Maybe<Book>;
  /** updateBookmark, update an existing bookmark */
  updateBookmark?: Maybe<Bookmark>;
  /** updateHighlight, update an existing highlight */
  updateHighlight?: Maybe<Highlight>;
  /** updatePlacement, updates tracking session page placement, taking the book id as identifier */
  updatePlacement?: Maybe<Tracking>;
  /** updatePublisher, update an existing publisher */
  updatePublisher?: Maybe<Publisher>;
  /** updateUser, update a user in the system */
  updateUser?: Maybe<User>;
  /** userChangePassword, change the password of the user */
  userChangePassword: NoContent;
  /** verifyEmail, sets user  email to verified, consuming nonce */
  verifyEmail?: Maybe<User>;
};


export type MutationAddSignupReasonArgs = {
  input: JoinReasonInput;
};


export type MutationCreateAuthorArgs = {
  input: AuthorInput;
};


export type MutationCreateBookArgs = {
  input: CreateBookInput;
};


export type MutationCreateBookmarkArgs = {
  input: CreateBookmarkInput;
};


export type MutationCreateHighlightArgs = {
  input: CreateHighlightInput;
};


export type MutationCreatePublisherArgs = {
  input: CreatePublisherInput;
};


export type MutationCreateStripeCheckoutPortalArgs = {
  input: CreateCheckoutPortalInput;
};


export type MutationCreateStripeCustomerPortalArgs = {
  returnUrl?: InputMaybe<Scalars['String']>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};


export type MutationDeleteAuthorArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBookArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBookmarkArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteHighlightArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePublisherArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationExportBooksCsvArgs = {
  filter?: InputMaybe<BookFilter>;
};


export type MutationExportCsvArgs = {
  filter: StatisticsFilter;
  sorting?: InputMaybe<SortOrdering>;
};


export type MutationExportPacktSalesCsvArgs = {
  from: Scalars['Time'];
  to: Scalars['Time'];
};


export type MutationExportSearchesCsvArgs = {
  filter: MissedSearchFilter;
  sorting?: InputMaybe<SortOrdering>;
};


export type MutationInactivateBookArgs = {
  id: Scalars['ID'];
};


export type MutationLoginAppleArgs = {
  appleToken: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
};


export type MutationLoginEmailArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationLoginGoogleArgs = {
  googleToken: Scalars['String'];
};


export type MutationPreSignupArgs = {
  input: PreSignupInput;
};


export type MutationReSendUserInviteArgs = {
  id: Scalars['ID'];
};


export type MutationRefreshTokenArgs = {
  token: Scalars['String'];
};


export type MutationRemovePreSignupArgs = {
  email: Scalars['String'];
};


export type MutationResendVerifyEmailArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordFinalizeArgs = {
  input: ResetPasswordFinalizeInput;
};


export type MutationResetPasswordInitiateArgs = {
  email: Scalars['String'];
};


export type MutationSendContactFormArgs = {
  input: ContactFormInput;
};


export type MutationSetApproveBookArgs = {
  approved: Scalars['Boolean'];
  id: Scalars['ID'];
};


export type MutationSetFavouriteArgs = {
  favourite: Scalars['Boolean'];
  id: Scalars['ID'];
};


export type MutationTrackArgs = {
  id: Scalars['ID'];
  startSession: Scalars['Boolean'];
};


export type MutationUnregisterNewsletterArgs = {
  email: Scalars['String'];
};


export type MutationUpdateAuthorArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<AuthorInput>;
};


export type MutationUpdateBookArgs = {
  id: Scalars['ID'];
  input: UpdateBookInput;
};


export type MutationUpdateBookmarkArgs = {
  id: Scalars['ID'];
  input: UpdateBookmarkInput;
};


export type MutationUpdateHighlightArgs = {
  id: Scalars['ID'];
  input: UpdateHighlightInput;
};


export type MutationUpdatePlacementArgs = {
  currentPlacementEpub?: InputMaybe<Scalars['String']>;
  currentPlacementPdf?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
};


export type MutationUpdatePublisherArgs = {
  id: Scalars['ID'];
  input: UpdatePublisherInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<UpdateUserInput>;
};


export type MutationUserChangePasswordArgs = {
  input: UserChangePasswordInput;
};


export type MutationVerifyEmailArgs = {
  email: Scalars['String'];
  nonce: Scalars['String'];
};

export type NoContent = {
  __typename?: 'NoContent';
  success: Scalars['Boolean'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  total: Scalars['Int'];
};

export type PreSignup = {
  __typename?: 'PreSignup';
  createdAt: Scalars['Time'];
  email: Scalars['String'];
  newsletter: Scalars['Boolean'];
};

export type PreSignupCollection = {
  __typename?: 'PreSignupCollection';
  edges: Array<PreSignup>;
  meta: PageInfo;
};

export type PreSignupFilter = {
  createdAt?: InputMaybe<TimeRangeFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  newsletter?: InputMaybe<Scalars['Boolean']>;
  offset?: InputMaybe<Scalars['Int']>;
  searchTerm?: InputMaybe<Scalars['String']>;
};

export type PreSignupInput = {
  email: Scalars['String'];
  newsletter: Scalars['Boolean'];
};

export type Price = {
  __typename?: 'Price';
  active: Scalars['Boolean'];
  billingScheme: Scalars['String'];
  currency: Scalars['String'];
  id: Scalars['String'];
  interval: Scalars['String'];
  intervalCount: Scalars['Int'];
  unitAmountDecimal?: Maybe<Scalars['Float']>;
};

export type Product = {
  __typename?: 'Product';
  active: Scalars['Boolean'];
  description: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  prices: Array<Price>;
  url?: Maybe<Scalars['String']>;
};

export type Publisher = {
  __typename?: 'Publisher';
  address: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  createdAt: Scalars['Time'];
  deletedAt?: Maybe<Scalars['Time']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<Image>;
  name: Scalars['String'];
  organisationNumber: Scalars['String'];
  phoneNumber: Scalars['String'];
  postalCode: Scalars['String'];
  updatedAt: Scalars['Time'];
};

export type PublisherCollection = {
  __typename?: 'PublisherCollection';
  edges: Array<Publisher>;
  meta: PageInfo;
};

export type PublisherFilter = {
  approved?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  searchTerm?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** author returns the author by its id */
  author?: Maybe<Author>;
  /** author returns the authors adjusted from filter */
  authors: AuthorCollection;
  book?: Maybe<Book>;
  bookIsbn?: Maybe<Book>;
  bookRecommendations: BookCollection;
  bookUrl?: Maybe<Book>;
  /** bookmark returns a specific bookmarks */
  bookmark?: Maybe<Bookmark>;
  /**
   * bookmarks returns a list of bookmarks, if the user isn't an admin
   * the returned bookmarks will be filtered on the current user
   */
  bookmarks: BookmarkCollection;
  books: BookCollection;
  /** highlight returns a specific highlight */
  highlight?: Maybe<Highlight>;
  /**
   * highlights returns a list of highlights, if the user isn't an admin
   * the returned highlights will be filtered on the current user
   */
  highlights: HighlightCollection;
  me?: Maybe<User>;
  /** missedSearches, returns a list of searches that got no hits */
  missedSearches: MissedSearchCollection;
  /** preSignups, returns a list of users that has signed up for email before release */
  preSignups: PreSignupCollection;
  products: Array<Product>;
  publisher?: Maybe<Publisher>;
  publishers: PublisherCollection;
  referral?: Maybe<Referral>;
  referrals: ReferralCollection;
  /**
   * statistics, returns books and number of times read, and the sum earnings per book.
   * For sorting on mediatedIncome, use field share_points, and for total use period_points
   */
  statistics: StatisticsCollection;
  subjects: Array<BookSubjects>;
  /** tracking, returns a tracking by it's id */
  tracking?: Maybe<Tracking>;
  /** trackings, returns a list of tracking */
  trackings: TrackingCollection;
  user?: Maybe<User>;
  /** userCoupon return the current users coupon for sharing */
  userCoupon?: Maybe<Coupon>;
  users: UserCollection;
};


export type QueryAuthorArgs = {
  id: Scalars['ID'];
};


export type QueryAuthorsArgs = {
  filter?: InputMaybe<AuthorFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type QueryBookArgs = {
  id: Scalars['ID'];
};


export type QueryBookIsbnArgs = {
  isbn: Scalars['String'];
};


export type QueryBookRecommendationsArgs = {
  id: Scalars['ID'];
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryBookUrlArgs = {
  checksum: Scalars['String'];
  id: Scalars['ID'];
};


export type QueryBookmarkArgs = {
  id: Scalars['ID'];
};


export type QueryBookmarksArgs = {
  filter?: InputMaybe<BookmarkFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type QueryBooksArgs = {
  filter?: InputMaybe<BookFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type QueryHighlightArgs = {
  id: Scalars['ID'];
};


export type QueryHighlightsArgs = {
  filter?: InputMaybe<HighlightFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type QueryMissedSearchesArgs = {
  filter: MissedSearchFilter;
  sorting?: InputMaybe<SortOrdering>;
};


export type QueryPreSignupsArgs = {
  filter?: InputMaybe<PreSignupFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type QueryPublisherArgs = {
  id: Scalars['ID'];
};


export type QueryPublishersArgs = {
  filter?: InputMaybe<PublisherFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type QueryReferralArgs = {
  id: Scalars['ID'];
};


export type QueryReferralsArgs = {
  filter?: InputMaybe<ReferralFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type QueryStatisticsArgs = {
  filter: StatisticsFilter;
  sorting?: InputMaybe<SortOrdering>;
};


export type QueryTrackingArgs = {
  bookId: Scalars['ID'];
  userId: Scalars['ID'];
};


export type QueryTrackingsArgs = {
  filter?: InputMaybe<TrackingFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  filter?: InputMaybe<UserFilter>;
  sorting?: InputMaybe<SortOrdering>;
};

export type Referral = {
  __typename?: 'Referral';
  coupon: Coupon;
  createdAt: Scalars['Time'];
  id: Scalars['ID'];
  receiver: User;
  rewarded: Scalars['Boolean'];
  updatedAt: Scalars['Time'];
};

export type ReferralCollection = {
  __typename?: 'ReferralCollection';
  edges: Array<Referral>;
  meta: PageInfo;
};

export type ReferralFilter = {
  CreatedAt?: InputMaybe<TimeRangeFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  receiver?: InputMaybe<Scalars['ID']>;
  sender?: InputMaybe<Scalars['ID']>;
  used?: InputMaybe<Scalars['Boolean']>;
};

export type ResetPasswordFinalizeInput = {
  email: Scalars['String'];
  nonce: Scalars['String'];
  password: Scalars['String'];
};

export enum School {
  BeckmansDesignhogskola = 'beckmans_designhogskola',
  BlekingeTekniskaHogskola = 'blekinge_tekniska_hogskola',
  BrunnsviksFolkhogskola = 'brunnsviks_folkhogskola',
  ChalmersTekniskaHogskola = 'chalmers_tekniska_hogskola',
  EnskildaHogskolanStockholm = 'enskilda_hogskolan_stockholm',
  Ericastiftelsen = 'ericastiftelsen',
  ErstaSkondalBrackeHogskola = 'ersta_skondal_bracke_hogskola',
  Forsvarshogskolan = 'forsvarshogskolan',
  GammelkroppaSkogsskola = 'gammelkroppa_skogsskola',
  GoteborgsUniversitet = 'goteborgs_universitet',
  GymnastikOchIdrottshogskolan = 'gymnastik_och_idrottshogskolan',
  HandelshogskolanIStockholm = 'handelshogskolan_i_stockholm',
  HogskolanDalarna = 'hogskolan_dalarna',
  HogskolanEvidens = 'hogskolan_evidens',
  HogskolanIBoras = 'hogskolan_i_boras',
  HogskolanIGavle = 'hogskolan_i_gavle',
  HogskolanIHalmstad = 'hogskolan_i_halmstad',
  HogskolanISkovde = 'hogskolan_i_skovde',
  HogskolanKristianstad = 'hogskolan_kristianstad',
  HogskolanVast = 'hogskolan_vast',
  JohannelundsTeologiskaHogskola = 'johannelunds_teologiska_hogskola',
  KarlstadsUniversitet = 'karlstads_universitet',
  KarolinskaInstitutet = 'karolinska_institutet',
  Konstfack = 'konstfack',
  KunglKonsthogskolan = 'kungl_konsthogskolan',
  KunglMusikhogskolanIStockholm = 'kungl_musikhogskolan_i_stockholm',
  KunglTekniskaHogskolan = 'kungl_tekniska_hogskolan',
  LinkopingsUniversitet = 'linkopings_universitet',
  Linneuniversitetet = 'linneuniversitetet',
  LuleaTekniskaUniversitet = 'lulea_tekniska_universitet',
  LundsUniversitet = 'lunds_universitet',
  MalardalensHogskola = 'malardalens_hogskola',
  MalmoUniversitet = 'malmo_universitet',
  Mittuniversitetet = 'mittuniversitetet',
  Newmaninstitutet = 'newmaninstitutet',
  OrebroTeologiskaHogskola = 'orebro_teologiska_hogskola',
  OrebroUniversitet = 'orebro_universitet',
  Other = 'other',
  RodaKorsetsHogskola = 'roda_korsets_hogskola',
  SkandinaviensAkademiForPsykoterapiutveckling = 'skandinaviens_akademi_for_psykoterapiutveckling',
  SodertornsHogskola = 'sodertorns_hogskola',
  SophiahemmetHogskola = 'sophiahemmet_hogskola',
  StiftelsenHogskolanIJonkoping = 'stiftelsen_hogskolan_i_jonkoping',
  StockholmsKonstnarligaHogskola = 'stockholms_konstnarliga_hogskola',
  StockholmsMusikpedagogiskaInstitut = 'stockholms_musikpedagogiska_institut',
  StockholmsUniversitet = 'stockholms_universitet',
  SvenskaInstitutetForKognitivPsykoterapi = 'svenska_institutet_for_kognitiv_psykoterapi',
  SverigesLantbruksuniversitet = 'sveriges_lantbruksuniversitet',
  UmeaUniversitet = 'umea_universitet',
  UppsalaUniversitet = 'uppsala_universitet'
}

export type SortOrdering = {
  sorting?: InputMaybe<Array<SortOrderingInput>>;
};

export type SortOrderingInput = {
  direction: Scalars['String'];
  field: Scalars['String'];
};

export type Statistics = {
  __typename?: 'Statistics';
  book: Book;
  mediatedIncome: Scalars['Float'];
  rows: Scalars['Int'];
  totalIncome: Scalars['Float'];
};

export type StatisticsCollection = {
  __typename?: 'StatisticsCollection';
  edges: Array<Statistics>;
  meta: PageInfo;
  mrr: Scalars['Float'];
};

export type StatisticsFilter = {
  bookId?: InputMaybe<Scalars['ID']>;
  interval?: InputMaybe<TimeRangeFilter>;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  publisherIds?: InputMaybe<Array<Scalars['ID']>>;
  searchTerm?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type StripeSubscription = {
  __typename?: 'StripeSubscription';
  PaidAt?: Maybe<Scalars['Time']>;
  amount?: Maybe<Scalars['Int']>;
  cancelAtPeriodEnd: Scalars['Boolean'];
  createdAt: Scalars['Time'];
  currency?: Maybe<Scalars['String']>;
  currentPeriodEnd?: Maybe<Scalars['Time']>;
  customerId: Scalars['String'];
  id: Scalars['ID'];
  interval?: Maybe<Scalars['Int']>;
  plan?: Maybe<Scalars['String']>;
  planBillingInterval: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  trialUntil?: Maybe<Scalars['Time']>;
  updatedAt?: Maybe<Scalars['Time']>;
};

export enum Subject {
  AgricultureHorticultureForestryAndFishery = 'agriculture_horticulture_forestry_and_fishery',
  ArtsDesignAndMedia = 'arts_design_and_media',
  BusinessAdministrationAndEconomics = 'business_administration_and_economics',
  ComputerScienceAndEngineering = 'computer_science_and_engineering',
  EducationEducationalSciencesDidactics = 'education_educational_sciences_didactics',
  HealthAndMedicalCare = 'health_and_medical_care',
  Humanities = 'humanities',
  JournalismCommunicationAndInformation = 'journalism_communication_and_information',
  Languages = 'languages',
  LawAndLegalStudies = 'law_and_legal_studies',
  MaterialsConstructionAndManufactoring = 'materials_construction_and_manufactoring',
  Mathematics = 'mathematics',
  NaturalScience = 'natural_science',
  Other = 'other',
  ReligiousStudies = 'religious_studies',
  SocialScienceAndBehaviouralScience = 'social_science_and_behavioural_science',
  SocialWorkAndWelfare = 'social_work_and_welfare',
  Technology = 'technology',
  VeterinaryMedicineAndNursing = 'veterinary_medicine_and_nursing'
}

export type TimeRangeFilter = {
  from: Scalars['Time'];
  to: Scalars['Time'];
};

export type Tracking = {
  __typename?: 'Tracking';
  bookmarkedAt?: Maybe<Scalars['Time']>;
  createdAt: Scalars['Time'];
  currentPlacementEpub?: Maybe<Scalars['String']>;
  currentPlacementPdf?: Maybe<Scalars['Int']>;
  favourite: Scalars['Boolean'];
  finishedAt?: Maybe<Scalars['Time']>;
  id: Scalars['String'];
  readAtLeastOneMin: Scalars['Boolean'];
  totalDuration: Scalars['Float'];
  updatedAt?: Maybe<Scalars['Time']>;
};

export type TrackingCollection = {
  __typename?: 'TrackingCollection';
  edges: Array<Tracking>;
  meta: PageInfo;
};

export type TrackingFilter = {
  bookId?: InputMaybe<Scalars['ID']>;
  bookTitle?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<TimeRangeFilter>;
  favourite?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  publisherId?: InputMaybe<Scalars['ID']>;
  updatedAt?: InputMaybe<TimeRangeFilter>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type UpdateBookInput = {
  authors: Array<Scalars['ID']>;
  categories: Array<Scalars['String']>;
  description: Scalars['String'];
  format: BookFormat;
  image?: InputMaybe<Scalars['Upload']>;
  isbn: Scalars['String'];
  language: BookLanguage;
  numberOfPages: Scalars['Int'];
  publisherId: Scalars['ID'];
  releaseYear: Scalars['Int'];
  subjects: Array<Subject>;
  title: Scalars['String'];
  version: Scalars['String'];
};

export type UpdateBookmarkInput = {
  bookId: Scalars['ID'];
  description?: InputMaybe<Scalars['String']>;
  epubPage?: InputMaybe<Scalars['String']>;
  pdfPage?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type UpdateHighlightInput = {
  bookId: Scalars['ID'];
  epubPage?: InputMaybe<Scalars['String']>;
  highlight: Scalars['String'];
  pdfPage?: InputMaybe<Scalars['Int']>;
};

export type UpdatePublisherInput = {
  address: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  email: Scalars['String'];
  image?: InputMaybe<Scalars['Upload']>;
  name: Scalars['String'];
  organisationNumber: Scalars['String'];
  phoneNumber: Scalars['String'];
  postalCode: Scalars['String'];
};

export type UpdateUserInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  image?: InputMaybe<Scalars['Upload']>;
  language?: InputMaybe<Language>;
  lastName: Scalars['String'];
  mobileNumber?: InputMaybe<Scalars['String']>;
  newsletter?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<UserRole>;
};

export type User = {
  __typename?: 'User';
  blocked: Scalars['Boolean'];
  createdAt: Scalars['Time'];
  deletedAt?: Maybe<Scalars['Time']>;
  email: Scalars['String'];
  emailVerified: Scalars['Boolean'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<Image>;
  joinReason?: Maybe<JoinReason>;
  language?: Maybe<Language>;
  lastName: Scalars['String'];
  mobileNumber?: Maybe<Scalars['String']>;
  newsletter?: Maybe<Scalars['Boolean']>;
  role: UserRole;
  signupReason: Scalars['Boolean'];
  subscription?: Maybe<StripeSubscription>;
  updatedAt: Scalars['Time'];
};

export type UserChangePasswordInput = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type UserCollection = {
  __typename?: 'UserCollection';
  edges: Array<User>;
  meta: PageInfo;
};

export type UserFilter = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<TimeRangeFilter>;
  deleted?: InputMaybe<Scalars['Boolean']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  roles?: InputMaybe<Array<UserRole>>;
  searchTerm?: InputMaybe<Scalars['String']>;
};

export enum UserRole {
  Admin = 'admin',
  User = 'user'
}

export type CustomBooksQueryVariables = Exact<{
  filter?: InputMaybe<BookFilter>;
  sorting?: InputMaybe<SortOrdering>;
}>;


export type CustomBooksQuery = (
  { __typename?: 'Query' }
  & { books: (
    { __typename?: 'BookCollection' }
    & { edges: Array<(
      { __typename?: 'Book' }
      & Pick<Book, 'id' | 'title'>
    )>, meta: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'limit' | 'offset' | 'total'>
    ) }
  ) }
);

export type AuthorQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type AuthorQuery = (
  { __typename?: 'Query' }
  & { author?: Maybe<(
    { __typename?: 'Author' }
    & Pick<Author, 'createdAt' | 'id' | 'name' | 'updatedAt'>
    & { image?: Maybe<(
      { __typename?: 'Image' }
      & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
    )> }
  )> }
);

export type AuthorsQueryVariables = Exact<{
  filter?: InputMaybe<AuthorFilter>;
  sorting?: InputMaybe<SortOrdering>;
}>;


export type AuthorsQuery = (
  { __typename?: 'Query' }
  & { authors: (
    { __typename?: 'AuthorCollection' }
    & { edges: Array<(
      { __typename?: 'Author' }
      & Pick<Author, 'createdAt' | 'id' | 'name' | 'updatedAt'>
      & { image?: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
      )> }
    )>, meta: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'limit' | 'offset' | 'total'>
    ) }
  ) }
);

export type BookQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BookQuery = (
  { __typename?: 'Query' }
  & { book?: Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'approved' | 'bookUrl' | 'categories' | 'createdAt' | 'description' | 'format' | 'id' | 'isbn' | 'language' | 'numberOfPages' | 'price' | 'releaseYear' | 'subjects' | 'title' | 'updatedAt' | 'version'>
    & { authors: Array<(
      { __typename?: 'Author' }
      & Pick<Author, 'createdAt' | 'id' | 'name' | 'updatedAt'>
      & { image?: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
      )> }
    )>, image?: Maybe<(
      { __typename?: 'Image' }
      & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
    )>, publisher: (
      { __typename?: 'Publisher' }
      & Pick<Publisher, 'address' | 'city' | 'country' | 'createdAt' | 'deletedAt' | 'email' | 'id' | 'name' | 'organisationNumber' | 'phoneNumber' | 'postalCode' | 'updatedAt'>
      & { image?: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
      )> }
    ), tracking?: Maybe<(
      { __typename?: 'Tracking' }
      & Pick<Tracking, 'bookmarkedAt' | 'createdAt' | 'currentPlacementEpub' | 'currentPlacementPdf' | 'favourite' | 'finishedAt' | 'id' | 'readAtLeastOneMin' | 'totalDuration' | 'updatedAt'>
    )> }
  )> }
);

export type BookIsbnQueryVariables = Exact<{
  isbn: Scalars['String'];
}>;


export type BookIsbnQuery = (
  { __typename?: 'Query' }
  & { bookIsbn?: Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'approved' | 'bookUrl' | 'categories' | 'createdAt' | 'description' | 'format' | 'id' | 'isbn' | 'language' | 'numberOfPages' | 'price' | 'releaseYear' | 'subjects' | 'title' | 'updatedAt' | 'version'>
    & { authors: Array<(
      { __typename?: 'Author' }
      & Pick<Author, 'createdAt' | 'id' | 'name' | 'updatedAt'>
      & { image?: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
      )> }
    )>, image?: Maybe<(
      { __typename?: 'Image' }
      & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
    )>, publisher: (
      { __typename?: 'Publisher' }
      & Pick<Publisher, 'address' | 'city' | 'country' | 'createdAt' | 'deletedAt' | 'email' | 'id' | 'name' | 'organisationNumber' | 'phoneNumber' | 'postalCode' | 'updatedAt'>
      & { image?: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
      )> }
    ), tracking?: Maybe<(
      { __typename?: 'Tracking' }
      & Pick<Tracking, 'bookmarkedAt' | 'createdAt' | 'currentPlacementEpub' | 'currentPlacementPdf' | 'favourite' | 'finishedAt' | 'id' | 'readAtLeastOneMin' | 'totalDuration' | 'updatedAt'>
    )> }
  )> }
);

export type BookRecommendationsQueryVariables = Exact<{
  id: Scalars['ID'];
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type BookRecommendationsQuery = (
  { __typename?: 'Query' }
  & { bookRecommendations: (
    { __typename?: 'BookCollection' }
    & { edges: Array<(
      { __typename?: 'Book' }
      & Pick<Book, 'approved' | 'bookUrl' | 'categories' | 'createdAt' | 'description' | 'format' | 'id' | 'isbn' | 'language' | 'numberOfPages' | 'price' | 'releaseYear' | 'subjects' | 'title' | 'updatedAt' | 'version'>
      & { authors: Array<(
        { __typename?: 'Author' }
        & Pick<Author, 'createdAt' | 'id' | 'name' | 'updatedAt'>
        & { image?: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
        )> }
      )>, image?: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
      )>, publisher: (
        { __typename?: 'Publisher' }
        & Pick<Publisher, 'address' | 'city' | 'country' | 'createdAt' | 'deletedAt' | 'email' | 'id' | 'name' | 'organisationNumber' | 'phoneNumber' | 'postalCode' | 'updatedAt'>
        & { image?: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
        )> }
      ), tracking?: Maybe<(
        { __typename?: 'Tracking' }
        & Pick<Tracking, 'bookmarkedAt' | 'createdAt' | 'currentPlacementEpub' | 'currentPlacementPdf' | 'favourite' | 'finishedAt' | 'id' | 'readAtLeastOneMin' | 'totalDuration' | 'updatedAt'>
      )> }
    )>, meta: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'limit' | 'offset' | 'total'>
    ) }
  ) }
);

export type BookUrlQueryVariables = Exact<{
  checksum: Scalars['String'];
  id: Scalars['ID'];
}>;


export type BookUrlQuery = (
  { __typename?: 'Query' }
  & { bookUrl?: Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'approved' | 'bookUrl' | 'categories' | 'createdAt' | 'description' | 'format' | 'id' | 'isbn' | 'language' | 'numberOfPages' | 'price' | 'releaseYear' | 'subjects' | 'title' | 'updatedAt' | 'version'>
    & { authors: Array<(
      { __typename?: 'Author' }
      & Pick<Author, 'createdAt' | 'id' | 'name' | 'updatedAt'>
      & { image?: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
      )> }
    )>, image?: Maybe<(
      { __typename?: 'Image' }
      & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
    )>, publisher: (
      { __typename?: 'Publisher' }
      & Pick<Publisher, 'address' | 'city' | 'country' | 'createdAt' | 'deletedAt' | 'email' | 'id' | 'name' | 'organisationNumber' | 'phoneNumber' | 'postalCode' | 'updatedAt'>
      & { image?: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
      )> }
    ), tracking?: Maybe<(
      { __typename?: 'Tracking' }
      & Pick<Tracking, 'bookmarkedAt' | 'createdAt' | 'currentPlacementEpub' | 'currentPlacementPdf' | 'favourite' | 'finishedAt' | 'id' | 'readAtLeastOneMin' | 'totalDuration' | 'updatedAt'>
    )> }
  )> }
);

export type BookmarkQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BookmarkQuery = (
  { __typename?: 'Query' }
  & { bookmark?: Maybe<(
    { __typename?: 'Bookmark' }
    & Pick<Bookmark, 'bookId' | 'createdAt' | 'description' | 'epubPage' | 'id' | 'pdfPage' | 'title' | 'updatedAt' | 'userId'>
  )> }
);

export type BookmarksQueryVariables = Exact<{
  filter?: InputMaybe<BookmarkFilter>;
  sorting?: InputMaybe<SortOrdering>;
}>;


export type BookmarksQuery = (
  { __typename?: 'Query' }
  & { bookmarks: (
    { __typename?: 'BookmarkCollection' }
    & { edges: Array<(
      { __typename?: 'Bookmark' }
      & Pick<Bookmark, 'bookId' | 'createdAt' | 'description' | 'epubPage' | 'id' | 'pdfPage' | 'title' | 'updatedAt' | 'userId'>
    )>, meta: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'limit' | 'offset' | 'total'>
    ) }
  ) }
);

export type BooksQueryVariables = Exact<{
  filter?: InputMaybe<BookFilter>;
  sorting?: InputMaybe<SortOrdering>;
}>;


export type BooksQuery = (
  { __typename?: 'Query' }
  & { books: (
    { __typename?: 'BookCollection' }
    & { edges: Array<(
      { __typename?: 'Book' }
      & Pick<Book, 'approved' | 'bookUrl' | 'categories' | 'createdAt' | 'description' | 'format' | 'id' | 'isbn' | 'language' | 'numberOfPages' | 'price' | 'releaseYear' | 'subjects' | 'title' | 'updatedAt' | 'version'>
      & { authors: Array<(
        { __typename?: 'Author' }
        & Pick<Author, 'createdAt' | 'id' | 'name' | 'updatedAt'>
        & { image?: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
        )> }
      )>, image?: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
      )>, publisher: (
        { __typename?: 'Publisher' }
        & Pick<Publisher, 'address' | 'city' | 'country' | 'createdAt' | 'deletedAt' | 'email' | 'id' | 'name' | 'organisationNumber' | 'phoneNumber' | 'postalCode' | 'updatedAt'>
        & { image?: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
        )> }
      ), tracking?: Maybe<(
        { __typename?: 'Tracking' }
        & Pick<Tracking, 'bookmarkedAt' | 'createdAt' | 'currentPlacementEpub' | 'currentPlacementPdf' | 'favourite' | 'finishedAt' | 'id' | 'readAtLeastOneMin' | 'totalDuration' | 'updatedAt'>
      )> }
    )>, meta: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'limit' | 'offset' | 'total'>
    ) }
  ) }
);

export type HighlightQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type HighlightQuery = (
  { __typename?: 'Query' }
  & { highlight?: Maybe<(
    { __typename?: 'Highlight' }
    & Pick<Highlight, 'bookId' | 'createdAt' | 'epubPage' | 'highlight' | 'id' | 'pdfPage' | 'updatedAt' | 'userId'>
  )> }
);

export type HighlightsQueryVariables = Exact<{
  filter?: InputMaybe<HighlightFilter>;
  sorting?: InputMaybe<SortOrdering>;
}>;


export type HighlightsQuery = (
  { __typename?: 'Query' }
  & { highlights: (
    { __typename?: 'HighlightCollection' }
    & { edges: Array<(
      { __typename?: 'Highlight' }
      & Pick<Highlight, 'bookId' | 'createdAt' | 'epubPage' | 'highlight' | 'id' | 'pdfPage' | 'updatedAt' | 'userId'>
    )>, meta: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'limit' | 'offset' | 'total'>
    ) }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'blocked' | 'createdAt' | 'deletedAt' | 'email' | 'emailVerified' | 'firstName' | 'id' | 'language' | 'lastName' | 'mobileNumber' | 'newsletter' | 'role' | 'signupReason' | 'updatedAt'>
    & { image?: Maybe<(
      { __typename?: 'Image' }
      & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
    )>, joinReason?: Maybe<(
      { __typename?: 'JoinReason' }
      & Pick<JoinReason, 'id' | 'occupation' | 'school' | 'subject'>
    )>, subscription?: Maybe<(
      { __typename?: 'StripeSubscription' }
      & Pick<StripeSubscription, 'PaidAt' | 'amount' | 'cancelAtPeriodEnd' | 'createdAt' | 'currency' | 'currentPeriodEnd' | 'customerId' | 'id' | 'interval' | 'plan' | 'planBillingInterval' | 'status' | 'trialUntil' | 'updatedAt'>
    )> }
  )> }
);

export type MissedSearchesQueryVariables = Exact<{
  filter: MissedSearchFilter;
  sorting?: InputMaybe<SortOrdering>;
}>;


export type MissedSearchesQuery = (
  { __typename?: 'Query' }
  & { missedSearches: (
    { __typename?: 'MissedSearchCollection' }
    & { edges: Array<(
      { __typename?: 'MissedSearch' }
      & Pick<MissedSearch, 'rows' | 'searchTerm'>
      & { user?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'blocked' | 'createdAt' | 'deletedAt' | 'email' | 'emailVerified' | 'firstName' | 'id' | 'language' | 'lastName' | 'mobileNumber' | 'newsletter' | 'role' | 'signupReason' | 'updatedAt'>
        & { image?: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
        )>, joinReason?: Maybe<(
          { __typename?: 'JoinReason' }
          & Pick<JoinReason, 'id' | 'occupation' | 'school' | 'subject'>
        )>, subscription?: Maybe<(
          { __typename?: 'StripeSubscription' }
          & Pick<StripeSubscription, 'PaidAt' | 'amount' | 'cancelAtPeriodEnd' | 'createdAt' | 'currency' | 'currentPeriodEnd' | 'customerId' | 'id' | 'interval' | 'plan' | 'planBillingInterval' | 'status' | 'trialUntil' | 'updatedAt'>
        )> }
      )> }
    )>, meta: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'limit' | 'offset' | 'total'>
    ) }
  ) }
);

export type PreSignupsQueryVariables = Exact<{
  filter?: InputMaybe<PreSignupFilter>;
  sorting?: InputMaybe<SortOrdering>;
}>;


export type PreSignupsQuery = (
  { __typename?: 'Query' }
  & { preSignups: (
    { __typename?: 'PreSignupCollection' }
    & { edges: Array<(
      { __typename?: 'PreSignup' }
      & Pick<PreSignup, 'createdAt' | 'email' | 'newsletter'>
    )>, meta: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'limit' | 'offset' | 'total'>
    ) }
  ) }
);

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'active' | 'description' | 'id' | 'name' | 'url'>
    & { prices: Array<(
      { __typename?: 'Price' }
      & Pick<Price, 'active' | 'billingScheme' | 'currency' | 'id' | 'interval' | 'intervalCount' | 'unitAmountDecimal'>
    )> }
  )> }
);

export type PublisherQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PublisherQuery = (
  { __typename?: 'Query' }
  & { publisher?: Maybe<(
    { __typename?: 'Publisher' }
    & Pick<Publisher, 'address' | 'city' | 'country' | 'createdAt' | 'deletedAt' | 'email' | 'id' | 'name' | 'organisationNumber' | 'phoneNumber' | 'postalCode' | 'updatedAt'>
    & { image?: Maybe<(
      { __typename?: 'Image' }
      & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
    )> }
  )> }
);

export type PublishersQueryVariables = Exact<{
  filter?: InputMaybe<PublisherFilter>;
  sorting?: InputMaybe<SortOrdering>;
}>;


export type PublishersQuery = (
  { __typename?: 'Query' }
  & { publishers: (
    { __typename?: 'PublisherCollection' }
    & { edges: Array<(
      { __typename?: 'Publisher' }
      & Pick<Publisher, 'address' | 'city' | 'country' | 'createdAt' | 'deletedAt' | 'email' | 'id' | 'name' | 'organisationNumber' | 'phoneNumber' | 'postalCode' | 'updatedAt'>
      & { image?: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
      )> }
    )>, meta: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'limit' | 'offset' | 'total'>
    ) }
  ) }
);

export type ReferralQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ReferralQuery = (
  { __typename?: 'Query' }
  & { referral?: Maybe<(
    { __typename?: 'Referral' }
    & Pick<Referral, 'createdAt' | 'id' | 'rewarded' | 'updatedAt'>
    & { coupon: (
      { __typename?: 'Coupon' }
      & Pick<Coupon, 'id' | 'promoCode'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'blocked' | 'createdAt' | 'deletedAt' | 'email' | 'emailVerified' | 'firstName' | 'id' | 'language' | 'lastName' | 'mobileNumber' | 'newsletter' | 'role' | 'signupReason' | 'updatedAt'>
        & { image?: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
        )>, joinReason?: Maybe<(
          { __typename?: 'JoinReason' }
          & Pick<JoinReason, 'id' | 'occupation' | 'school' | 'subject'>
        )>, subscription?: Maybe<(
          { __typename?: 'StripeSubscription' }
          & Pick<StripeSubscription, 'PaidAt' | 'amount' | 'cancelAtPeriodEnd' | 'createdAt' | 'currency' | 'currentPeriodEnd' | 'customerId' | 'id' | 'interval' | 'plan' | 'planBillingInterval' | 'status' | 'trialUntil' | 'updatedAt'>
        )> }
      ) }
    ), receiver: (
      { __typename?: 'User' }
      & Pick<User, 'blocked' | 'createdAt' | 'deletedAt' | 'email' | 'emailVerified' | 'firstName' | 'id' | 'language' | 'lastName' | 'mobileNumber' | 'newsletter' | 'role' | 'signupReason' | 'updatedAt'>
      & { image?: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
      )>, joinReason?: Maybe<(
        { __typename?: 'JoinReason' }
        & Pick<JoinReason, 'id' | 'occupation' | 'school' | 'subject'>
      )>, subscription?: Maybe<(
        { __typename?: 'StripeSubscription' }
        & Pick<StripeSubscription, 'PaidAt' | 'amount' | 'cancelAtPeriodEnd' | 'createdAt' | 'currency' | 'currentPeriodEnd' | 'customerId' | 'id' | 'interval' | 'plan' | 'planBillingInterval' | 'status' | 'trialUntil' | 'updatedAt'>
      )> }
    ) }
  )> }
);

export type ReferralsQueryVariables = Exact<{
  filter?: InputMaybe<ReferralFilter>;
  sorting?: InputMaybe<SortOrdering>;
}>;


export type ReferralsQuery = (
  { __typename?: 'Query' }
  & { referrals: (
    { __typename?: 'ReferralCollection' }
    & { edges: Array<(
      { __typename?: 'Referral' }
      & Pick<Referral, 'createdAt' | 'id' | 'rewarded' | 'updatedAt'>
      & { coupon: (
        { __typename?: 'Coupon' }
        & Pick<Coupon, 'id' | 'promoCode'>
        & { user: (
          { __typename?: 'User' }
          & Pick<User, 'blocked' | 'createdAt' | 'deletedAt' | 'email' | 'emailVerified' | 'firstName' | 'id' | 'language' | 'lastName' | 'mobileNumber' | 'newsletter' | 'role' | 'signupReason' | 'updatedAt'>
        ) }
      ), receiver: (
        { __typename?: 'User' }
        & Pick<User, 'blocked' | 'createdAt' | 'deletedAt' | 'email' | 'emailVerified' | 'firstName' | 'id' | 'language' | 'lastName' | 'mobileNumber' | 'newsletter' | 'role' | 'signupReason' | 'updatedAt'>
        & { image?: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
        )>, joinReason?: Maybe<(
          { __typename?: 'JoinReason' }
          & Pick<JoinReason, 'id' | 'occupation' | 'school' | 'subject'>
        )>, subscription?: Maybe<(
          { __typename?: 'StripeSubscription' }
          & Pick<StripeSubscription, 'PaidAt' | 'amount' | 'cancelAtPeriodEnd' | 'createdAt' | 'currency' | 'currentPeriodEnd' | 'customerId' | 'id' | 'interval' | 'plan' | 'planBillingInterval' | 'status' | 'trialUntil' | 'updatedAt'>
        )> }
      ) }
    )>, meta: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'limit' | 'offset' | 'total'>
    ) }
  ) }
);

export type StatisticsQueryVariables = Exact<{
  filter: StatisticsFilter;
  sorting?: InputMaybe<SortOrdering>;
}>;


export type StatisticsQuery = (
  { __typename?: 'Query' }
  & { statistics: (
    { __typename?: 'StatisticsCollection' }
    & Pick<StatisticsCollection, 'mrr'>
    & { edges: Array<(
      { __typename?: 'Statistics' }
      & Pick<Statistics, 'mediatedIncome' | 'rows' | 'totalIncome'>
      & { book: (
        { __typename?: 'Book' }
        & Pick<Book, 'approved' | 'bookUrl' | 'categories' | 'createdAt' | 'description' | 'format' | 'id' | 'isbn' | 'language' | 'numberOfPages' | 'price' | 'releaseYear' | 'subjects' | 'title' | 'updatedAt' | 'version'>
        & { authors: Array<(
          { __typename?: 'Author' }
          & Pick<Author, 'createdAt' | 'id' | 'name' | 'updatedAt'>
        )>, image?: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
        )>, publisher: (
          { __typename?: 'Publisher' }
          & Pick<Publisher, 'address' | 'city' | 'country' | 'createdAt' | 'deletedAt' | 'email' | 'id' | 'name' | 'organisationNumber' | 'phoneNumber' | 'postalCode' | 'updatedAt'>
        ), tracking?: Maybe<(
          { __typename?: 'Tracking' }
          & Pick<Tracking, 'bookmarkedAt' | 'createdAt' | 'currentPlacementEpub' | 'currentPlacementPdf' | 'favourite' | 'finishedAt' | 'id' | 'readAtLeastOneMin' | 'totalDuration' | 'updatedAt'>
        )> }
      ) }
    )>, meta: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'limit' | 'offset' | 'total'>
    ) }
  ) }
);

export type SubjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type SubjectsQuery = (
  { __typename?: 'Query' }
  & { subjects: Array<(
    { __typename?: 'BookSubjects' }
    & Pick<BookSubjects, 'count' | 'subject'>
  )> }
);

export type TrackingQueryVariables = Exact<{
  bookId: Scalars['ID'];
  userId: Scalars['ID'];
}>;


export type TrackingQuery = (
  { __typename?: 'Query' }
  & { tracking?: Maybe<(
    { __typename?: 'Tracking' }
    & Pick<Tracking, 'bookmarkedAt' | 'createdAt' | 'currentPlacementEpub' | 'currentPlacementPdf' | 'favourite' | 'finishedAt' | 'id' | 'readAtLeastOneMin' | 'totalDuration' | 'updatedAt'>
  )> }
);

export type TrackingsQueryVariables = Exact<{
  filter?: InputMaybe<TrackingFilter>;
  sorting?: InputMaybe<SortOrdering>;
}>;


export type TrackingsQuery = (
  { __typename?: 'Query' }
  & { trackings: (
    { __typename?: 'TrackingCollection' }
    & { edges: Array<(
      { __typename?: 'Tracking' }
      & Pick<Tracking, 'bookmarkedAt' | 'createdAt' | 'currentPlacementEpub' | 'currentPlacementPdf' | 'favourite' | 'finishedAt' | 'id' | 'readAtLeastOneMin' | 'totalDuration' | 'updatedAt'>
    )>, meta: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'limit' | 'offset' | 'total'>
    ) }
  ) }
);

export type UserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'blocked' | 'createdAt' | 'deletedAt' | 'email' | 'emailVerified' | 'firstName' | 'id' | 'language' | 'lastName' | 'mobileNumber' | 'newsletter' | 'role' | 'signupReason' | 'updatedAt'>
    & { image?: Maybe<(
      { __typename?: 'Image' }
      & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
    )>, joinReason?: Maybe<(
      { __typename?: 'JoinReason' }
      & Pick<JoinReason, 'id' | 'occupation' | 'school' | 'subject'>
    )>, subscription?: Maybe<(
      { __typename?: 'StripeSubscription' }
      & Pick<StripeSubscription, 'PaidAt' | 'amount' | 'cancelAtPeriodEnd' | 'createdAt' | 'currency' | 'currentPeriodEnd' | 'customerId' | 'id' | 'interval' | 'plan' | 'planBillingInterval' | 'status' | 'trialUntil' | 'updatedAt'>
    )> }
  )> }
);

export type UserCouponQueryVariables = Exact<{ [key: string]: never; }>;


export type UserCouponQuery = (
  { __typename?: 'Query' }
  & { userCoupon?: Maybe<(
    { __typename?: 'Coupon' }
    & Pick<Coupon, 'id' | 'promoCode'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'blocked' | 'createdAt' | 'deletedAt' | 'email' | 'emailVerified' | 'firstName' | 'id' | 'language' | 'lastName' | 'mobileNumber' | 'newsletter' | 'role' | 'signupReason' | 'updatedAt'>
      & { image?: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
      )>, joinReason?: Maybe<(
        { __typename?: 'JoinReason' }
        & Pick<JoinReason, 'id' | 'occupation' | 'school' | 'subject'>
      )>, subscription?: Maybe<(
        { __typename?: 'StripeSubscription' }
        & Pick<StripeSubscription, 'PaidAt' | 'amount' | 'cancelAtPeriodEnd' | 'createdAt' | 'currency' | 'currentPeriodEnd' | 'customerId' | 'id' | 'interval' | 'plan' | 'planBillingInterval' | 'status' | 'trialUntil' | 'updatedAt'>
      )> }
    ) }
  )> }
);

export type UsersQueryVariables = Exact<{
  filter?: InputMaybe<UserFilter>;
  sorting?: InputMaybe<SortOrdering>;
}>;


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users: (
    { __typename?: 'UserCollection' }
    & { edges: Array<(
      { __typename?: 'User' }
      & Pick<User, 'blocked' | 'createdAt' | 'deletedAt' | 'email' | 'emailVerified' | 'firstName' | 'id' | 'language' | 'lastName' | 'mobileNumber' | 'newsletter' | 'role' | 'signupReason' | 'updatedAt'>
      & { image?: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
      )>, joinReason?: Maybe<(
        { __typename?: 'JoinReason' }
        & Pick<JoinReason, 'id' | 'occupation' | 'school' | 'subject'>
      )>, subscription?: Maybe<(
        { __typename?: 'StripeSubscription' }
        & Pick<StripeSubscription, 'PaidAt' | 'amount' | 'cancelAtPeriodEnd' | 'createdAt' | 'currency' | 'currentPeriodEnd' | 'customerId' | 'id' | 'interval' | 'plan' | 'planBillingInterval' | 'status' | 'trialUntil' | 'updatedAt'>
      )> }
    )>, meta: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'limit' | 'offset' | 'total'>
    ) }
  ) }
);

export type AddSignupReasonMutationVariables = Exact<{
  input: JoinReasonInput;
}>;


export type AddSignupReasonMutation = (
  { __typename?: 'Mutation' }
  & { addSignupReason: (
    { __typename?: 'User' }
    & Pick<User, 'blocked' | 'createdAt' | 'deletedAt' | 'email' | 'emailVerified' | 'firstName' | 'id' | 'language' | 'lastName' | 'mobileNumber' | 'newsletter' | 'role' | 'signupReason' | 'updatedAt'>
    & { image?: Maybe<(
      { __typename?: 'Image' }
      & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
    )>, joinReason?: Maybe<(
      { __typename?: 'JoinReason' }
      & Pick<JoinReason, 'id' | 'occupation' | 'school' | 'subject'>
    )>, subscription?: Maybe<(
      { __typename?: 'StripeSubscription' }
      & Pick<StripeSubscription, 'PaidAt' | 'amount' | 'cancelAtPeriodEnd' | 'createdAt' | 'currency' | 'currentPeriodEnd' | 'customerId' | 'id' | 'interval' | 'plan' | 'planBillingInterval' | 'status' | 'trialUntil' | 'updatedAt'>
    )> }
  ) }
);

export type CreateAuthorMutationVariables = Exact<{
  input: AuthorInput;
}>;


export type CreateAuthorMutation = (
  { __typename?: 'Mutation' }
  & { createAuthor?: Maybe<(
    { __typename?: 'Author' }
    & Pick<Author, 'createdAt' | 'id' | 'name' | 'updatedAt'>
    & { image?: Maybe<(
      { __typename?: 'Image' }
      & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
    )> }
  )> }
);

export type CreateBookMutationVariables = Exact<{
  input: CreateBookInput;
}>;


export type CreateBookMutation = (
  { __typename?: 'Mutation' }
  & { createBook?: Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'approved' | 'bookUrl' | 'categories' | 'createdAt' | 'description' | 'format' | 'id' | 'isbn' | 'language' | 'numberOfPages' | 'price' | 'releaseYear' | 'subjects' | 'title' | 'updatedAt' | 'version'>
    & { authors: Array<(
      { __typename?: 'Author' }
      & Pick<Author, 'createdAt' | 'id' | 'name' | 'updatedAt'>
      & { image?: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
      )> }
    )>, image?: Maybe<(
      { __typename?: 'Image' }
      & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
    )>, publisher: (
      { __typename?: 'Publisher' }
      & Pick<Publisher, 'address' | 'city' | 'country' | 'createdAt' | 'deletedAt' | 'email' | 'id' | 'name' | 'organisationNumber' | 'phoneNumber' | 'postalCode' | 'updatedAt'>
      & { image?: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
      )> }
    ), tracking?: Maybe<(
      { __typename?: 'Tracking' }
      & Pick<Tracking, 'bookmarkedAt' | 'createdAt' | 'currentPlacementEpub' | 'currentPlacementPdf' | 'favourite' | 'finishedAt' | 'id' | 'readAtLeastOneMin' | 'totalDuration' | 'updatedAt'>
    )> }
  )> }
);

export type CreateBookmarkMutationVariables = Exact<{
  input: CreateBookmarkInput;
}>;


export type CreateBookmarkMutation = (
  { __typename?: 'Mutation' }
  & { createBookmark?: Maybe<(
    { __typename?: 'Bookmark' }
    & Pick<Bookmark, 'bookId' | 'createdAt' | 'description' | 'epubPage' | 'id' | 'pdfPage' | 'title' | 'updatedAt' | 'userId'>
  )> }
);

export type CreateHighlightMutationVariables = Exact<{
  input: CreateHighlightInput;
}>;


export type CreateHighlightMutation = (
  { __typename?: 'Mutation' }
  & { createHighlight?: Maybe<(
    { __typename?: 'Highlight' }
    & Pick<Highlight, 'bookId' | 'createdAt' | 'epubPage' | 'highlight' | 'id' | 'pdfPage' | 'updatedAt' | 'userId'>
  )> }
);

export type CreatePublisherMutationVariables = Exact<{
  input: CreatePublisherInput;
}>;


export type CreatePublisherMutation = (
  { __typename?: 'Mutation' }
  & { createPublisher?: Maybe<(
    { __typename?: 'Publisher' }
    & Pick<Publisher, 'address' | 'city' | 'country' | 'createdAt' | 'deletedAt' | 'email' | 'id' | 'name' | 'organisationNumber' | 'phoneNumber' | 'postalCode' | 'updatedAt'>
    & { image?: Maybe<(
      { __typename?: 'Image' }
      & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
    )> }
  )> }
);

export type CreateStripeCheckoutPortalMutationVariables = Exact<{
  input: CreateCheckoutPortalInput;
}>;


export type CreateStripeCheckoutPortalMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createStripeCheckoutPortal'>
);

export type CreateStripeCustomerPortalMutationVariables = Exact<{
  returnUrl?: InputMaybe<Scalars['String']>;
}>;


export type CreateStripeCustomerPortalMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createStripeCustomerPortal'>
);

export type CreateUserMutationVariables = Exact<{
  input?: InputMaybe<CreateUserInput>;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'AuthenticationResponse' }
    & Pick<AuthenticationResponse, 'jwt' | 'message' | 'newAccount' | 'refreshToken' | 'success' | 'userId'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'blocked' | 'createdAt' | 'deletedAt' | 'email' | 'emailVerified' | 'firstName' | 'id' | 'language' | 'lastName' | 'mobileNumber' | 'newsletter' | 'role' | 'signupReason' | 'updatedAt'>
      & { image?: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
      )>, joinReason?: Maybe<(
        { __typename?: 'JoinReason' }
        & Pick<JoinReason, 'id' | 'occupation' | 'school' | 'subject'>
      )>, subscription?: Maybe<(
        { __typename?: 'StripeSubscription' }
        & Pick<StripeSubscription, 'PaidAt' | 'amount' | 'cancelAtPeriodEnd' | 'createdAt' | 'currency' | 'currentPeriodEnd' | 'customerId' | 'id' | 'interval' | 'plan' | 'planBillingInterval' | 'status' | 'trialUntil' | 'updatedAt'>
      )> }
    )> }
  ) }
);

export type DeleteAuthorMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteAuthorMutation = (
  { __typename?: 'Mutation' }
  & { deleteAuthor: (
    { __typename?: 'NoContent' }
    & Pick<NoContent, 'success'>
  ) }
);

export type DeleteBookMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteBookMutation = (
  { __typename?: 'Mutation' }
  & { deleteBook: (
    { __typename?: 'NoContent' }
    & Pick<NoContent, 'success'>
  ) }
);

export type DeleteBookmarkMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteBookmarkMutation = (
  { __typename?: 'Mutation' }
  & { deleteBookmark: (
    { __typename?: 'NoContent' }
    & Pick<NoContent, 'success'>
  ) }
);

export type DeleteHighlightMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteHighlightMutation = (
  { __typename?: 'Mutation' }
  & { deleteHighlight: (
    { __typename?: 'NoContent' }
    & Pick<NoContent, 'success'>
  ) }
);

export type DeletePublisherMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeletePublisherMutation = (
  { __typename?: 'Mutation' }
  & { deletePublisher: (
    { __typename?: 'NoContent' }
    & Pick<NoContent, 'success'>
  ) }
);

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteUserMutation = (
  { __typename?: 'Mutation' }
  & { deleteUser: (
    { __typename?: 'NoContent' }
    & Pick<NoContent, 'success'>
  ) }
);

export type ExportBooksCsvMutationVariables = Exact<{
  filter?: InputMaybe<BookFilter>;
}>;


export type ExportBooksCsvMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'exportBooksCSV'>
);

export type ExportCsvMutationVariables = Exact<{
  filter: StatisticsFilter;
  sorting?: InputMaybe<SortOrdering>;
}>;


export type ExportCsvMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'exportCSV'>
);

export type ExportPacktSalesCsvMutationVariables = Exact<{
  from: Scalars['Time'];
  to: Scalars['Time'];
}>;


export type ExportPacktSalesCsvMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'exportPacktSalesCSV'>
);

export type ExportSearchesCsvMutationVariables = Exact<{
  filter: MissedSearchFilter;
  sorting?: InputMaybe<SortOrdering>;
}>;


export type ExportSearchesCsvMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'exportSearchesCSV'>
);

export type InactivateBookMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type InactivateBookMutation = (
  { __typename?: 'Mutation' }
  & { inactivateBook: (
    { __typename?: 'NoContent' }
    & Pick<NoContent, 'success'>
  ) }
);

export type LoginAppleMutationVariables = Exact<{
  appleToken: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
}>;


export type LoginAppleMutation = (
  { __typename?: 'Mutation' }
  & { loginApple: (
    { __typename?: 'AuthenticationResponse' }
    & Pick<AuthenticationResponse, 'jwt' | 'message' | 'newAccount' | 'refreshToken' | 'success' | 'userId'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'blocked' | 'createdAt' | 'deletedAt' | 'email' | 'emailVerified' | 'firstName' | 'id' | 'language' | 'lastName' | 'mobileNumber' | 'newsletter' | 'role' | 'signupReason' | 'updatedAt'>
      & { image?: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
      )>, joinReason?: Maybe<(
        { __typename?: 'JoinReason' }
        & Pick<JoinReason, 'id' | 'occupation' | 'school' | 'subject'>
      )>, subscription?: Maybe<(
        { __typename?: 'StripeSubscription' }
        & Pick<StripeSubscription, 'PaidAt' | 'amount' | 'cancelAtPeriodEnd' | 'createdAt' | 'currency' | 'currentPeriodEnd' | 'customerId' | 'id' | 'interval' | 'plan' | 'planBillingInterval' | 'status' | 'trialUntil' | 'updatedAt'>
      )> }
    )> }
  ) }
);

export type LoginEmailMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginEmailMutation = (
  { __typename?: 'Mutation' }
  & { loginEmail: (
    { __typename?: 'AuthenticationResponse' }
    & Pick<AuthenticationResponse, 'jwt' | 'message' | 'newAccount' | 'refreshToken' | 'success' | 'userId'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'blocked' | 'createdAt' | 'deletedAt' | 'email' | 'emailVerified' | 'firstName' | 'id' | 'language' | 'lastName' | 'mobileNumber' | 'newsletter' | 'role' | 'signupReason' | 'updatedAt'>
      & { image?: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
      )>, joinReason?: Maybe<(
        { __typename?: 'JoinReason' }
        & Pick<JoinReason, 'id' | 'occupation' | 'school' | 'subject'>
      )>, subscription?: Maybe<(
        { __typename?: 'StripeSubscription' }
        & Pick<StripeSubscription, 'PaidAt' | 'amount' | 'cancelAtPeriodEnd' | 'createdAt' | 'currency' | 'currentPeriodEnd' | 'customerId' | 'id' | 'interval' | 'plan' | 'planBillingInterval' | 'status' | 'trialUntil' | 'updatedAt'>
      )> }
    )> }
  ) }
);

export type LoginGoogleMutationVariables = Exact<{
  googleToken: Scalars['String'];
}>;


export type LoginGoogleMutation = (
  { __typename?: 'Mutation' }
  & { loginGoogle: (
    { __typename?: 'AuthenticationResponse' }
    & Pick<AuthenticationResponse, 'jwt' | 'message' | 'newAccount' | 'refreshToken' | 'success' | 'userId'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'blocked' | 'createdAt' | 'deletedAt' | 'email' | 'emailVerified' | 'firstName' | 'id' | 'language' | 'lastName' | 'mobileNumber' | 'newsletter' | 'role' | 'signupReason' | 'updatedAt'>
      & { image?: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
      )>, joinReason?: Maybe<(
        { __typename?: 'JoinReason' }
        & Pick<JoinReason, 'id' | 'occupation' | 'school' | 'subject'>
      )>, subscription?: Maybe<(
        { __typename?: 'StripeSubscription' }
        & Pick<StripeSubscription, 'PaidAt' | 'amount' | 'cancelAtPeriodEnd' | 'createdAt' | 'currency' | 'currentPeriodEnd' | 'customerId' | 'id' | 'interval' | 'plan' | 'planBillingInterval' | 'status' | 'trialUntil' | 'updatedAt'>
      )> }
    )> }
  ) }
);

export type PreSignupMutationVariables = Exact<{
  input: PreSignupInput;
}>;


export type PreSignupMutation = (
  { __typename?: 'Mutation' }
  & { preSignup: (
    { __typename?: 'NoContent' }
    & Pick<NoContent, 'success'>
  ) }
);

export type ReSendUserInviteMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ReSendUserInviteMutation = (
  { __typename?: 'Mutation' }
  & { reSendUserInvite: (
    { __typename?: 'NoContent' }
    & Pick<NoContent, 'success'>
  ) }
);

export type RefreshTokenMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type RefreshTokenMutation = (
  { __typename?: 'Mutation' }
  & { refreshToken: (
    { __typename?: 'AuthenticationResponse' }
    & Pick<AuthenticationResponse, 'jwt' | 'message' | 'newAccount' | 'refreshToken' | 'success' | 'userId'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'blocked' | 'createdAt' | 'deletedAt' | 'email' | 'emailVerified' | 'firstName' | 'id' | 'language' | 'lastName' | 'mobileNumber' | 'newsletter' | 'role' | 'signupReason' | 'updatedAt'>
      & { image?: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
      )>, joinReason?: Maybe<(
        { __typename?: 'JoinReason' }
        & Pick<JoinReason, 'id' | 'occupation' | 'school' | 'subject'>
      )>, subscription?: Maybe<(
        { __typename?: 'StripeSubscription' }
        & Pick<StripeSubscription, 'PaidAt' | 'amount' | 'cancelAtPeriodEnd' | 'createdAt' | 'currency' | 'currentPeriodEnd' | 'customerId' | 'id' | 'interval' | 'plan' | 'planBillingInterval' | 'status' | 'trialUntil' | 'updatedAt'>
      )> }
    )> }
  ) }
);

export type RemovePreSignupMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type RemovePreSignupMutation = (
  { __typename?: 'Mutation' }
  & { removePreSignup: (
    { __typename?: 'NoContent' }
    & Pick<NoContent, 'success'>
  ) }
);

export type ResendVerifyEmailMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ResendVerifyEmailMutation = (
  { __typename?: 'Mutation' }
  & { resendVerifyEmail?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'blocked' | 'createdAt' | 'deletedAt' | 'email' | 'emailVerified' | 'firstName' | 'id' | 'language' | 'lastName' | 'mobileNumber' | 'newsletter' | 'role' | 'signupReason' | 'updatedAt'>
    & { image?: Maybe<(
      { __typename?: 'Image' }
      & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
    )>, joinReason?: Maybe<(
      { __typename?: 'JoinReason' }
      & Pick<JoinReason, 'id' | 'occupation' | 'school' | 'subject'>
    )>, subscription?: Maybe<(
      { __typename?: 'StripeSubscription' }
      & Pick<StripeSubscription, 'PaidAt' | 'amount' | 'cancelAtPeriodEnd' | 'createdAt' | 'currency' | 'currentPeriodEnd' | 'customerId' | 'id' | 'interval' | 'plan' | 'planBillingInterval' | 'status' | 'trialUntil' | 'updatedAt'>
    )> }
  )> }
);

export type ResetPasswordFinalizeMutationVariables = Exact<{
  input: ResetPasswordFinalizeInput;
}>;


export type ResetPasswordFinalizeMutation = (
  { __typename?: 'Mutation' }
  & { resetPasswordFinalize: (
    { __typename?: 'AuthenticationResponse' }
    & Pick<AuthenticationResponse, 'jwt' | 'message' | 'newAccount' | 'refreshToken' | 'success' | 'userId'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'blocked' | 'createdAt' | 'deletedAt' | 'email' | 'emailVerified' | 'firstName' | 'id' | 'language' | 'lastName' | 'mobileNumber' | 'newsletter' | 'role' | 'signupReason' | 'updatedAt'>
      & { image?: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
      )>, joinReason?: Maybe<(
        { __typename?: 'JoinReason' }
        & Pick<JoinReason, 'id' | 'occupation' | 'school' | 'subject'>
      )>, subscription?: Maybe<(
        { __typename?: 'StripeSubscription' }
        & Pick<StripeSubscription, 'PaidAt' | 'amount' | 'cancelAtPeriodEnd' | 'createdAt' | 'currency' | 'currentPeriodEnd' | 'customerId' | 'id' | 'interval' | 'plan' | 'planBillingInterval' | 'status' | 'trialUntil' | 'updatedAt'>
      )> }
    )> }
  ) }
);

export type ResetPasswordInitiateMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ResetPasswordInitiateMutation = (
  { __typename?: 'Mutation' }
  & { resetPasswordInitiate: (
    { __typename?: 'NoContent' }
    & Pick<NoContent, 'success'>
  ) }
);

export type SendContactFormMutationVariables = Exact<{
  input: ContactFormInput;
}>;


export type SendContactFormMutation = (
  { __typename?: 'Mutation' }
  & { sendContactForm: (
    { __typename?: 'NoContent' }
    & Pick<NoContent, 'success'>
  ) }
);

export type SetApproveBookMutationVariables = Exact<{
  approved: Scalars['Boolean'];
  id: Scalars['ID'];
}>;


export type SetApproveBookMutation = (
  { __typename?: 'Mutation' }
  & { setApproveBook?: Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'approved' | 'bookUrl' | 'categories' | 'createdAt' | 'description' | 'format' | 'id' | 'isbn' | 'language' | 'numberOfPages' | 'price' | 'releaseYear' | 'subjects' | 'title' | 'updatedAt' | 'version'>
    & { authors: Array<(
      { __typename?: 'Author' }
      & Pick<Author, 'createdAt' | 'id' | 'name' | 'updatedAt'>
      & { image?: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
      )> }
    )>, image?: Maybe<(
      { __typename?: 'Image' }
      & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
    )>, publisher: (
      { __typename?: 'Publisher' }
      & Pick<Publisher, 'address' | 'city' | 'country' | 'createdAt' | 'deletedAt' | 'email' | 'id' | 'name' | 'organisationNumber' | 'phoneNumber' | 'postalCode' | 'updatedAt'>
      & { image?: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
      )> }
    ), tracking?: Maybe<(
      { __typename?: 'Tracking' }
      & Pick<Tracking, 'bookmarkedAt' | 'createdAt' | 'currentPlacementEpub' | 'currentPlacementPdf' | 'favourite' | 'finishedAt' | 'id' | 'readAtLeastOneMin' | 'totalDuration' | 'updatedAt'>
    )> }
  )> }
);

export type SetFavouriteMutationVariables = Exact<{
  favourite: Scalars['Boolean'];
  id: Scalars['ID'];
}>;


export type SetFavouriteMutation = (
  { __typename?: 'Mutation' }
  & { setFavourite: (
    { __typename?: 'Tracking' }
    & Pick<Tracking, 'bookmarkedAt' | 'createdAt' | 'currentPlacementEpub' | 'currentPlacementPdf' | 'favourite' | 'finishedAt' | 'id' | 'readAtLeastOneMin' | 'totalDuration' | 'updatedAt'>
  ) }
);

export type TrackMutationVariables = Exact<{
  id: Scalars['ID'];
  startSession: Scalars['Boolean'];
}>;


export type TrackMutation = (
  { __typename?: 'Mutation' }
  & { track?: Maybe<(
    { __typename?: 'Tracking' }
    & Pick<Tracking, 'bookmarkedAt' | 'createdAt' | 'currentPlacementEpub' | 'currentPlacementPdf' | 'favourite' | 'finishedAt' | 'id' | 'readAtLeastOneMin' | 'totalDuration' | 'updatedAt'>
  )> }
);

export type UnregisterNewsletterMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type UnregisterNewsletterMutation = (
  { __typename?: 'Mutation' }
  & { unregisterNewsletter: (
    { __typename?: 'NoContent' }
    & Pick<NoContent, 'success'>
  ) }
);

export type UpdateAuthorMutationVariables = Exact<{
  id: Scalars['ID'];
  input?: InputMaybe<AuthorInput>;
}>;


export type UpdateAuthorMutation = (
  { __typename?: 'Mutation' }
  & { updateAuthor?: Maybe<(
    { __typename?: 'Author' }
    & Pick<Author, 'createdAt' | 'id' | 'name' | 'updatedAt'>
    & { image?: Maybe<(
      { __typename?: 'Image' }
      & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
    )> }
  )> }
);

export type UpdateBookMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateBookInput;
}>;


export type UpdateBookMutation = (
  { __typename?: 'Mutation' }
  & { updateBook?: Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'approved' | 'bookUrl' | 'categories' | 'createdAt' | 'description' | 'format' | 'id' | 'isbn' | 'language' | 'numberOfPages' | 'price' | 'releaseYear' | 'subjects' | 'title' | 'updatedAt' | 'version'>
    & { authors: Array<(
      { __typename?: 'Author' }
      & Pick<Author, 'createdAt' | 'id' | 'name' | 'updatedAt'>
      & { image?: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
      )> }
    )>, image?: Maybe<(
      { __typename?: 'Image' }
      & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
    )>, publisher: (
      { __typename?: 'Publisher' }
      & Pick<Publisher, 'address' | 'city' | 'country' | 'createdAt' | 'deletedAt' | 'email' | 'id' | 'name' | 'organisationNumber' | 'phoneNumber' | 'postalCode' | 'updatedAt'>
      & { image?: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
      )> }
    ), tracking?: Maybe<(
      { __typename?: 'Tracking' }
      & Pick<Tracking, 'bookmarkedAt' | 'createdAt' | 'currentPlacementEpub' | 'currentPlacementPdf' | 'favourite' | 'finishedAt' | 'id' | 'readAtLeastOneMin' | 'totalDuration' | 'updatedAt'>
    )> }
  )> }
);

export type UpdateBookmarkMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateBookmarkInput;
}>;


export type UpdateBookmarkMutation = (
  { __typename?: 'Mutation' }
  & { updateBookmark?: Maybe<(
    { __typename?: 'Bookmark' }
    & Pick<Bookmark, 'bookId' | 'createdAt' | 'description' | 'epubPage' | 'id' | 'pdfPage' | 'title' | 'updatedAt' | 'userId'>
  )> }
);

export type UpdateHighlightMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateHighlightInput;
}>;


export type UpdateHighlightMutation = (
  { __typename?: 'Mutation' }
  & { updateHighlight?: Maybe<(
    { __typename?: 'Highlight' }
    & Pick<Highlight, 'bookId' | 'createdAt' | 'epubPage' | 'highlight' | 'id' | 'pdfPage' | 'updatedAt' | 'userId'>
  )> }
);

export type UpdatePlacementMutationVariables = Exact<{
  currentPlacementEpub?: InputMaybe<Scalars['String']>;
  currentPlacementPdf?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
}>;


export type UpdatePlacementMutation = (
  { __typename?: 'Mutation' }
  & { updatePlacement?: Maybe<(
    { __typename?: 'Tracking' }
    & Pick<Tracking, 'bookmarkedAt' | 'createdAt' | 'currentPlacementEpub' | 'currentPlacementPdf' | 'favourite' | 'finishedAt' | 'id' | 'readAtLeastOneMin' | 'totalDuration' | 'updatedAt'>
  )> }
);

export type UpdatePublisherMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdatePublisherInput;
}>;


export type UpdatePublisherMutation = (
  { __typename?: 'Mutation' }
  & { updatePublisher?: Maybe<(
    { __typename?: 'Publisher' }
    & Pick<Publisher, 'address' | 'city' | 'country' | 'createdAt' | 'deletedAt' | 'email' | 'id' | 'name' | 'organisationNumber' | 'phoneNumber' | 'postalCode' | 'updatedAt'>
    & { image?: Maybe<(
      { __typename?: 'Image' }
      & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
    )> }
  )> }
);

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['ID'];
  input?: InputMaybe<UpdateUserInput>;
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'blocked' | 'createdAt' | 'deletedAt' | 'email' | 'emailVerified' | 'firstName' | 'id' | 'language' | 'lastName' | 'mobileNumber' | 'newsletter' | 'role' | 'signupReason' | 'updatedAt'>
    & { image?: Maybe<(
      { __typename?: 'Image' }
      & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
    )>, joinReason?: Maybe<(
      { __typename?: 'JoinReason' }
      & Pick<JoinReason, 'id' | 'occupation' | 'school' | 'subject'>
    )>, subscription?: Maybe<(
      { __typename?: 'StripeSubscription' }
      & Pick<StripeSubscription, 'PaidAt' | 'amount' | 'cancelAtPeriodEnd' | 'createdAt' | 'currency' | 'currentPeriodEnd' | 'customerId' | 'id' | 'interval' | 'plan' | 'planBillingInterval' | 'status' | 'trialUntil' | 'updatedAt'>
    )> }
  )> }
);

export type UserChangePasswordMutationVariables = Exact<{
  input: UserChangePasswordInput;
}>;


export type UserChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { userChangePassword: (
    { __typename?: 'NoContent' }
    & Pick<NoContent, 'success'>
  ) }
);

export type VerifyEmailMutationVariables = Exact<{
  email: Scalars['String'];
  nonce: Scalars['String'];
}>;


export type VerifyEmailMutation = (
  { __typename?: 'Mutation' }
  & { verifyEmail?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'blocked' | 'createdAt' | 'deletedAt' | 'email' | 'emailVerified' | 'firstName' | 'id' | 'language' | 'lastName' | 'mobileNumber' | 'newsletter' | 'role' | 'signupReason' | 'updatedAt'>
    & { image?: Maybe<(
      { __typename?: 'Image' }
      & Pick<Image, 'contentType' | 'createdAt' | 'filename' | 'height' | 'id' | 'originalName' | 'sizeInBytes' | 'uri' | 'width'>
    )>, joinReason?: Maybe<(
      { __typename?: 'JoinReason' }
      & Pick<JoinReason, 'id' | 'occupation' | 'school' | 'subject'>
    )>, subscription?: Maybe<(
      { __typename?: 'StripeSubscription' }
      & Pick<StripeSubscription, 'PaidAt' | 'amount' | 'cancelAtPeriodEnd' | 'createdAt' | 'currency' | 'currentPeriodEnd' | 'customerId' | 'id' | 'interval' | 'plan' | 'planBillingInterval' | 'status' | 'trialUntil' | 'updatedAt'>
    )> }
  )> }
);


export const CustomBooksDocument = gql`
    query CustomBooks($filter: BookFilter, $sorting: SortOrdering) {
  books(filter: $filter, sorting: $sorting) {
    edges {
      id
      title
    }
    meta {
      limit
      offset
      total
    }
  }
}
    `;

/**
 * __useCustomBooksQuery__
 *
 * To run a query within a React component, call `useCustomBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomBooksQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useCustomBooksQuery(baseOptions?: Apollo.QueryHookOptions<CustomBooksQuery, CustomBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CustomBooksQuery, CustomBooksQueryVariables>(CustomBooksDocument, options);
      }
export function useCustomBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CustomBooksQuery, CustomBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CustomBooksQuery, CustomBooksQueryVariables>(CustomBooksDocument, options);
        }
export type CustomBooksQueryHookResult = ReturnType<typeof useCustomBooksQuery>;
export type CustomBooksLazyQueryHookResult = ReturnType<typeof useCustomBooksLazyQuery>;
export type CustomBooksQueryResult = Apollo.QueryResult<CustomBooksQuery, CustomBooksQueryVariables>;
export const AuthorDocument = gql`
    query Author($id: ID!) {
  author(id: $id) {
    createdAt
    id
    image {
      contentType
      createdAt
      filename
      height
      id
      originalName
      sizeInBytes
      uri
      width
    }
    name
    updatedAt
  }
}
    `;

/**
 * __useAuthorQuery__
 *
 * To run a query within a React component, call `useAuthorQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthorQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAuthorQuery(baseOptions: Apollo.QueryHookOptions<AuthorQuery, AuthorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AuthorQuery, AuthorQueryVariables>(AuthorDocument, options);
      }
export function useAuthorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthorQuery, AuthorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AuthorQuery, AuthorQueryVariables>(AuthorDocument, options);
        }
export type AuthorQueryHookResult = ReturnType<typeof useAuthorQuery>;
export type AuthorLazyQueryHookResult = ReturnType<typeof useAuthorLazyQuery>;
export type AuthorQueryResult = Apollo.QueryResult<AuthorQuery, AuthorQueryVariables>;
export const AuthorsDocument = gql`
    query Authors($filter: AuthorFilter, $sorting: SortOrdering) {
  authors(filter: $filter, sorting: $sorting) {
    edges {
      createdAt
      id
      image {
        contentType
        createdAt
        filename
        height
        id
        originalName
        sizeInBytes
        uri
        width
      }
      name
      updatedAt
    }
    meta {
      limit
      offset
      total
    }
  }
}
    `;

/**
 * __useAuthorsQuery__
 *
 * To run a query within a React component, call `useAuthorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthorsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useAuthorsQuery(baseOptions?: Apollo.QueryHookOptions<AuthorsQuery, AuthorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AuthorsQuery, AuthorsQueryVariables>(AuthorsDocument, options);
      }
export function useAuthorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthorsQuery, AuthorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AuthorsQuery, AuthorsQueryVariables>(AuthorsDocument, options);
        }
export type AuthorsQueryHookResult = ReturnType<typeof useAuthorsQuery>;
export type AuthorsLazyQueryHookResult = ReturnType<typeof useAuthorsLazyQuery>;
export type AuthorsQueryResult = Apollo.QueryResult<AuthorsQuery, AuthorsQueryVariables>;
export const BookDocument = gql`
    query Book($id: ID!) {
  book(id: $id) {
    approved
    authors {
      createdAt
      id
      image {
        contentType
        createdAt
        filename
        height
        id
        originalName
        sizeInBytes
        uri
        width
      }
      name
      updatedAt
    }
    bookUrl
    categories
    createdAt
    description
    format
    id
    image {
      contentType
      createdAt
      filename
      height
      id
      originalName
      sizeInBytes
      uri
      width
    }
    isbn
    language
    numberOfPages
    price
    publisher {
      address
      city
      country
      createdAt
      deletedAt
      email
      id
      image {
        contentType
        createdAt
        filename
        height
        id
        originalName
        sizeInBytes
        uri
        width
      }
      name
      organisationNumber
      phoneNumber
      postalCode
      updatedAt
    }
    releaseYear
    subjects
    title
    tracking {
      bookmarkedAt
      createdAt
      currentPlacementEpub
      currentPlacementPdf
      favourite
      finishedAt
      id
      readAtLeastOneMin
      totalDuration
      updatedAt
    }
    updatedAt
    version
  }
}
    `;

/**
 * __useBookQuery__
 *
 * To run a query within a React component, call `useBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBookQuery(baseOptions: Apollo.QueryHookOptions<BookQuery, BookQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BookQuery, BookQueryVariables>(BookDocument, options);
      }
export function useBookLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BookQuery, BookQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BookQuery, BookQueryVariables>(BookDocument, options);
        }
export type BookQueryHookResult = ReturnType<typeof useBookQuery>;
export type BookLazyQueryHookResult = ReturnType<typeof useBookLazyQuery>;
export type BookQueryResult = Apollo.QueryResult<BookQuery, BookQueryVariables>;
export const BookIsbnDocument = gql`
    query BookIsbn($isbn: String!) {
  bookIsbn(isbn: $isbn) {
    approved
    authors {
      createdAt
      id
      image {
        contentType
        createdAt
        filename
        height
        id
        originalName
        sizeInBytes
        uri
        width
      }
      name
      updatedAt
    }
    bookUrl
    categories
    createdAt
    description
    format
    id
    image {
      contentType
      createdAt
      filename
      height
      id
      originalName
      sizeInBytes
      uri
      width
    }
    isbn
    language
    numberOfPages
    price
    publisher {
      address
      city
      country
      createdAt
      deletedAt
      email
      id
      image {
        contentType
        createdAt
        filename
        height
        id
        originalName
        sizeInBytes
        uri
        width
      }
      name
      organisationNumber
      phoneNumber
      postalCode
      updatedAt
    }
    releaseYear
    subjects
    title
    tracking {
      bookmarkedAt
      createdAt
      currentPlacementEpub
      currentPlacementPdf
      favourite
      finishedAt
      id
      readAtLeastOneMin
      totalDuration
      updatedAt
    }
    updatedAt
    version
  }
}
    `;

/**
 * __useBookIsbnQuery__
 *
 * To run a query within a React component, call `useBookIsbnQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookIsbnQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookIsbnQuery({
 *   variables: {
 *      isbn: // value for 'isbn'
 *   },
 * });
 */
export function useBookIsbnQuery(baseOptions: Apollo.QueryHookOptions<BookIsbnQuery, BookIsbnQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BookIsbnQuery, BookIsbnQueryVariables>(BookIsbnDocument, options);
      }
export function useBookIsbnLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BookIsbnQuery, BookIsbnQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BookIsbnQuery, BookIsbnQueryVariables>(BookIsbnDocument, options);
        }
export type BookIsbnQueryHookResult = ReturnType<typeof useBookIsbnQuery>;
export type BookIsbnLazyQueryHookResult = ReturnType<typeof useBookIsbnLazyQuery>;
export type BookIsbnQueryResult = Apollo.QueryResult<BookIsbnQuery, BookIsbnQueryVariables>;
export const BookRecommendationsDocument = gql`
    query BookRecommendations($id: ID!, $limit: Int) {
  bookRecommendations(id: $id, limit: $limit) {
    edges {
      approved
      authors {
        createdAt
        id
        image {
          contentType
          createdAt
          filename
          height
          id
          originalName
          sizeInBytes
          uri
          width
        }
        name
        updatedAt
      }
      bookUrl
      categories
      createdAt
      description
      format
      id
      image {
        contentType
        createdAt
        filename
        height
        id
        originalName
        sizeInBytes
        uri
        width
      }
      isbn
      language
      numberOfPages
      price
      publisher {
        address
        city
        country
        createdAt
        deletedAt
        email
        id
        image {
          contentType
          createdAt
          filename
          height
          id
          originalName
          sizeInBytes
          uri
          width
        }
        name
        organisationNumber
        phoneNumber
        postalCode
        updatedAt
      }
      releaseYear
      subjects
      title
      tracking {
        bookmarkedAt
        createdAt
        currentPlacementEpub
        currentPlacementPdf
        favourite
        finishedAt
        id
        readAtLeastOneMin
        totalDuration
        updatedAt
      }
      updatedAt
      version
    }
    meta {
      limit
      offset
      total
    }
  }
}
    `;

/**
 * __useBookRecommendationsQuery__
 *
 * To run a query within a React component, call `useBookRecommendationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookRecommendationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookRecommendationsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useBookRecommendationsQuery(baseOptions: Apollo.QueryHookOptions<BookRecommendationsQuery, BookRecommendationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BookRecommendationsQuery, BookRecommendationsQueryVariables>(BookRecommendationsDocument, options);
      }
export function useBookRecommendationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BookRecommendationsQuery, BookRecommendationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BookRecommendationsQuery, BookRecommendationsQueryVariables>(BookRecommendationsDocument, options);
        }
export type BookRecommendationsQueryHookResult = ReturnType<typeof useBookRecommendationsQuery>;
export type BookRecommendationsLazyQueryHookResult = ReturnType<typeof useBookRecommendationsLazyQuery>;
export type BookRecommendationsQueryResult = Apollo.QueryResult<BookRecommendationsQuery, BookRecommendationsQueryVariables>;
export const BookUrlDocument = gql`
    query BookUrl($checksum: String!, $id: ID!) {
  bookUrl(checksum: $checksum, id: $id) {
    approved
    authors {
      createdAt
      id
      image {
        contentType
        createdAt
        filename
        height
        id
        originalName
        sizeInBytes
        uri
        width
      }
      name
      updatedAt
    }
    bookUrl
    categories
    createdAt
    description
    format
    id
    image {
      contentType
      createdAt
      filename
      height
      id
      originalName
      sizeInBytes
      uri
      width
    }
    isbn
    language
    numberOfPages
    price
    publisher {
      address
      city
      country
      createdAt
      deletedAt
      email
      id
      image {
        contentType
        createdAt
        filename
        height
        id
        originalName
        sizeInBytes
        uri
        width
      }
      name
      organisationNumber
      phoneNumber
      postalCode
      updatedAt
    }
    releaseYear
    subjects
    title
    tracking {
      bookmarkedAt
      createdAt
      currentPlacementEpub
      currentPlacementPdf
      favourite
      finishedAt
      id
      readAtLeastOneMin
      totalDuration
      updatedAt
    }
    updatedAt
    version
  }
}
    `;

/**
 * __useBookUrlQuery__
 *
 * To run a query within a React component, call `useBookUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookUrlQuery({
 *   variables: {
 *      checksum: // value for 'checksum'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBookUrlQuery(baseOptions: Apollo.QueryHookOptions<BookUrlQuery, BookUrlQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BookUrlQuery, BookUrlQueryVariables>(BookUrlDocument, options);
      }
export function useBookUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BookUrlQuery, BookUrlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BookUrlQuery, BookUrlQueryVariables>(BookUrlDocument, options);
        }
export type BookUrlQueryHookResult = ReturnType<typeof useBookUrlQuery>;
export type BookUrlLazyQueryHookResult = ReturnType<typeof useBookUrlLazyQuery>;
export type BookUrlQueryResult = Apollo.QueryResult<BookUrlQuery, BookUrlQueryVariables>;
export const BookmarkDocument = gql`
    query Bookmark($id: ID!) {
  bookmark(id: $id) {
    bookId
    createdAt
    description
    epubPage
    id
    pdfPage
    title
    updatedAt
    userId
  }
}
    `;

/**
 * __useBookmarkQuery__
 *
 * To run a query within a React component, call `useBookmarkQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookmarkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookmarkQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBookmarkQuery(baseOptions: Apollo.QueryHookOptions<BookmarkQuery, BookmarkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BookmarkQuery, BookmarkQueryVariables>(BookmarkDocument, options);
      }
export function useBookmarkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BookmarkQuery, BookmarkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BookmarkQuery, BookmarkQueryVariables>(BookmarkDocument, options);
        }
export type BookmarkQueryHookResult = ReturnType<typeof useBookmarkQuery>;
export type BookmarkLazyQueryHookResult = ReturnType<typeof useBookmarkLazyQuery>;
export type BookmarkQueryResult = Apollo.QueryResult<BookmarkQuery, BookmarkQueryVariables>;
export const BookmarksDocument = gql`
    query Bookmarks($filter: BookmarkFilter, $sorting: SortOrdering) {
  bookmarks(filter: $filter, sorting: $sorting) {
    edges {
      bookId
      createdAt
      description
      epubPage
      id
      pdfPage
      title
      updatedAt
      userId
    }
    meta {
      limit
      offset
      total
    }
  }
}
    `;

/**
 * __useBookmarksQuery__
 *
 * To run a query within a React component, call `useBookmarksQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookmarksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookmarksQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useBookmarksQuery(baseOptions?: Apollo.QueryHookOptions<BookmarksQuery, BookmarksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BookmarksQuery, BookmarksQueryVariables>(BookmarksDocument, options);
      }
export function useBookmarksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BookmarksQuery, BookmarksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BookmarksQuery, BookmarksQueryVariables>(BookmarksDocument, options);
        }
export type BookmarksQueryHookResult = ReturnType<typeof useBookmarksQuery>;
export type BookmarksLazyQueryHookResult = ReturnType<typeof useBookmarksLazyQuery>;
export type BookmarksQueryResult = Apollo.QueryResult<BookmarksQuery, BookmarksQueryVariables>;
export const BooksDocument = gql`
    query Books($filter: BookFilter, $sorting: SortOrdering) {
  books(filter: $filter, sorting: $sorting) {
    edges {
      approved
      authors {
        createdAt
        id
        image {
          contentType
          createdAt
          filename
          height
          id
          originalName
          sizeInBytes
          uri
          width
        }
        name
        updatedAt
      }
      bookUrl
      categories
      createdAt
      description
      format
      id
      image {
        contentType
        createdAt
        filename
        height
        id
        originalName
        sizeInBytes
        uri
        width
      }
      isbn
      language
      numberOfPages
      price
      publisher {
        address
        city
        country
        createdAt
        deletedAt
        email
        id
        image {
          contentType
          createdAt
          filename
          height
          id
          originalName
          sizeInBytes
          uri
          width
        }
        name
        organisationNumber
        phoneNumber
        postalCode
        updatedAt
      }
      releaseYear
      subjects
      title
      tracking {
        bookmarkedAt
        createdAt
        currentPlacementEpub
        currentPlacementPdf
        favourite
        finishedAt
        id
        readAtLeastOneMin
        totalDuration
        updatedAt
      }
      updatedAt
      version
    }
    meta {
      limit
      offset
      total
    }
  }
}
    `;

/**
 * __useBooksQuery__
 *
 * To run a query within a React component, call `useBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBooksQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useBooksQuery(baseOptions?: Apollo.QueryHookOptions<BooksQuery, BooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BooksQuery, BooksQueryVariables>(BooksDocument, options);
      }
export function useBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BooksQuery, BooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BooksQuery, BooksQueryVariables>(BooksDocument, options);
        }
export type BooksQueryHookResult = ReturnType<typeof useBooksQuery>;
export type BooksLazyQueryHookResult = ReturnType<typeof useBooksLazyQuery>;
export type BooksQueryResult = Apollo.QueryResult<BooksQuery, BooksQueryVariables>;
export const HighlightDocument = gql`
    query Highlight($id: ID!) {
  highlight(id: $id) {
    bookId
    createdAt
    epubPage
    highlight
    id
    pdfPage
    updatedAt
    userId
  }
}
    `;

/**
 * __useHighlightQuery__
 *
 * To run a query within a React component, call `useHighlightQuery` and pass it any options that fit your needs.
 * When your component renders, `useHighlightQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHighlightQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useHighlightQuery(baseOptions: Apollo.QueryHookOptions<HighlightQuery, HighlightQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HighlightQuery, HighlightQueryVariables>(HighlightDocument, options);
      }
export function useHighlightLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HighlightQuery, HighlightQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HighlightQuery, HighlightQueryVariables>(HighlightDocument, options);
        }
export type HighlightQueryHookResult = ReturnType<typeof useHighlightQuery>;
export type HighlightLazyQueryHookResult = ReturnType<typeof useHighlightLazyQuery>;
export type HighlightQueryResult = Apollo.QueryResult<HighlightQuery, HighlightQueryVariables>;
export const HighlightsDocument = gql`
    query Highlights($filter: HighlightFilter, $sorting: SortOrdering) {
  highlights(filter: $filter, sorting: $sorting) {
    edges {
      bookId
      createdAt
      epubPage
      highlight
      id
      pdfPage
      updatedAt
      userId
    }
    meta {
      limit
      offset
      total
    }
  }
}
    `;

/**
 * __useHighlightsQuery__
 *
 * To run a query within a React component, call `useHighlightsQuery` and pass it any options that fit your needs.
 * When your component renders, `useHighlightsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHighlightsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useHighlightsQuery(baseOptions?: Apollo.QueryHookOptions<HighlightsQuery, HighlightsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HighlightsQuery, HighlightsQueryVariables>(HighlightsDocument, options);
      }
export function useHighlightsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HighlightsQuery, HighlightsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HighlightsQuery, HighlightsQueryVariables>(HighlightsDocument, options);
        }
export type HighlightsQueryHookResult = ReturnType<typeof useHighlightsQuery>;
export type HighlightsLazyQueryHookResult = ReturnType<typeof useHighlightsLazyQuery>;
export type HighlightsQueryResult = Apollo.QueryResult<HighlightsQuery, HighlightsQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    blocked
    createdAt
    deletedAt
    email
    emailVerified
    firstName
    id
    image {
      contentType
      createdAt
      filename
      height
      id
      originalName
      sizeInBytes
      uri
      width
    }
    joinReason {
      id
      occupation
      school
      subject
    }
    language
    lastName
    mobileNumber
    newsletter
    role
    signupReason
    subscription {
      PaidAt
      amount
      cancelAtPeriodEnd
      createdAt
      currency
      currentPeriodEnd
      customerId
      id
      interval
      plan
      planBillingInterval
      status
      trialUntil
      updatedAt
    }
    updatedAt
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const MissedSearchesDocument = gql`
    query MissedSearches($filter: MissedSearchFilter!, $sorting: SortOrdering) {
  missedSearches(filter: $filter, sorting: $sorting) {
    edges {
      rows
      searchTerm
      user {
        blocked
        createdAt
        deletedAt
        email
        emailVerified
        firstName
        id
        image {
          contentType
          createdAt
          filename
          height
          id
          originalName
          sizeInBytes
          uri
          width
        }
        joinReason {
          id
          occupation
          school
          subject
        }
        language
        lastName
        mobileNumber
        newsletter
        role
        signupReason
        subscription {
          PaidAt
          amount
          cancelAtPeriodEnd
          createdAt
          currency
          currentPeriodEnd
          customerId
          id
          interval
          plan
          planBillingInterval
          status
          trialUntil
          updatedAt
        }
        updatedAt
      }
    }
    meta {
      limit
      offset
      total
    }
  }
}
    `;

/**
 * __useMissedSearchesQuery__
 *
 * To run a query within a React component, call `useMissedSearchesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMissedSearchesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMissedSearchesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useMissedSearchesQuery(baseOptions: Apollo.QueryHookOptions<MissedSearchesQuery, MissedSearchesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MissedSearchesQuery, MissedSearchesQueryVariables>(MissedSearchesDocument, options);
      }
export function useMissedSearchesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MissedSearchesQuery, MissedSearchesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MissedSearchesQuery, MissedSearchesQueryVariables>(MissedSearchesDocument, options);
        }
export type MissedSearchesQueryHookResult = ReturnType<typeof useMissedSearchesQuery>;
export type MissedSearchesLazyQueryHookResult = ReturnType<typeof useMissedSearchesLazyQuery>;
export type MissedSearchesQueryResult = Apollo.QueryResult<MissedSearchesQuery, MissedSearchesQueryVariables>;
export const PreSignupsDocument = gql`
    query PreSignups($filter: PreSignupFilter, $sorting: SortOrdering) {
  preSignups(filter: $filter, sorting: $sorting) {
    edges {
      createdAt
      email
      newsletter
    }
    meta {
      limit
      offset
      total
    }
  }
}
    `;

/**
 * __usePreSignupsQuery__
 *
 * To run a query within a React component, call `usePreSignupsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePreSignupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePreSignupsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function usePreSignupsQuery(baseOptions?: Apollo.QueryHookOptions<PreSignupsQuery, PreSignupsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PreSignupsQuery, PreSignupsQueryVariables>(PreSignupsDocument, options);
      }
export function usePreSignupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PreSignupsQuery, PreSignupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PreSignupsQuery, PreSignupsQueryVariables>(PreSignupsDocument, options);
        }
export type PreSignupsQueryHookResult = ReturnType<typeof usePreSignupsQuery>;
export type PreSignupsLazyQueryHookResult = ReturnType<typeof usePreSignupsLazyQuery>;
export type PreSignupsQueryResult = Apollo.QueryResult<PreSignupsQuery, PreSignupsQueryVariables>;
export const ProductsDocument = gql`
    query Products {
  products {
    active
    description
    id
    name
    prices {
      active
      billingScheme
      currency
      id
      interval
      intervalCount
      unitAmountDecimal
    }
    url
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const PublisherDocument = gql`
    query Publisher($id: ID!) {
  publisher(id: $id) {
    address
    city
    country
    createdAt
    deletedAt
    email
    id
    image {
      contentType
      createdAt
      filename
      height
      id
      originalName
      sizeInBytes
      uri
      width
    }
    name
    organisationNumber
    phoneNumber
    postalCode
    updatedAt
  }
}
    `;

/**
 * __usePublisherQuery__
 *
 * To run a query within a React component, call `usePublisherQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublisherQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublisherQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePublisherQuery(baseOptions: Apollo.QueryHookOptions<PublisherQuery, PublisherQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PublisherQuery, PublisherQueryVariables>(PublisherDocument, options);
      }
export function usePublisherLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PublisherQuery, PublisherQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PublisherQuery, PublisherQueryVariables>(PublisherDocument, options);
        }
export type PublisherQueryHookResult = ReturnType<typeof usePublisherQuery>;
export type PublisherLazyQueryHookResult = ReturnType<typeof usePublisherLazyQuery>;
export type PublisherQueryResult = Apollo.QueryResult<PublisherQuery, PublisherQueryVariables>;
export const PublishersDocument = gql`
    query Publishers($filter: PublisherFilter, $sorting: SortOrdering) {
  publishers(filter: $filter, sorting: $sorting) {
    edges {
      address
      city
      country
      createdAt
      deletedAt
      email
      id
      image {
        contentType
        createdAt
        filename
        height
        id
        originalName
        sizeInBytes
        uri
        width
      }
      name
      organisationNumber
      phoneNumber
      postalCode
      updatedAt
    }
    meta {
      limit
      offset
      total
    }
  }
}
    `;

/**
 * __usePublishersQuery__
 *
 * To run a query within a React component, call `usePublishersQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublishersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublishersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function usePublishersQuery(baseOptions?: Apollo.QueryHookOptions<PublishersQuery, PublishersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PublishersQuery, PublishersQueryVariables>(PublishersDocument, options);
      }
export function usePublishersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PublishersQuery, PublishersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PublishersQuery, PublishersQueryVariables>(PublishersDocument, options);
        }
export type PublishersQueryHookResult = ReturnType<typeof usePublishersQuery>;
export type PublishersLazyQueryHookResult = ReturnType<typeof usePublishersLazyQuery>;
export type PublishersQueryResult = Apollo.QueryResult<PublishersQuery, PublishersQueryVariables>;
export const ReferralDocument = gql`
    query Referral($id: ID!) {
  referral(id: $id) {
    coupon {
      id
      promoCode
      user {
        blocked
        createdAt
        deletedAt
        email
        emailVerified
        firstName
        id
        image {
          contentType
          createdAt
          filename
          height
          id
          originalName
          sizeInBytes
          uri
          width
        }
        joinReason {
          id
          occupation
          school
          subject
        }
        language
        lastName
        mobileNumber
        newsletter
        role
        signupReason
        subscription {
          PaidAt
          amount
          cancelAtPeriodEnd
          createdAt
          currency
          currentPeriodEnd
          customerId
          id
          interval
          plan
          planBillingInterval
          status
          trialUntil
          updatedAt
        }
        updatedAt
      }
    }
    createdAt
    id
    receiver {
      blocked
      createdAt
      deletedAt
      email
      emailVerified
      firstName
      id
      image {
        contentType
        createdAt
        filename
        height
        id
        originalName
        sizeInBytes
        uri
        width
      }
      joinReason {
        id
        occupation
        school
        subject
      }
      language
      lastName
      mobileNumber
      newsletter
      role
      signupReason
      subscription {
        PaidAt
        amount
        cancelAtPeriodEnd
        createdAt
        currency
        currentPeriodEnd
        customerId
        id
        interval
        plan
        planBillingInterval
        status
        trialUntil
        updatedAt
      }
      updatedAt
    }
    rewarded
    updatedAt
  }
}
    `;

/**
 * __useReferralQuery__
 *
 * To run a query within a React component, call `useReferralQuery` and pass it any options that fit your needs.
 * When your component renders, `useReferralQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReferralQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useReferralQuery(baseOptions: Apollo.QueryHookOptions<ReferralQuery, ReferralQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReferralQuery, ReferralQueryVariables>(ReferralDocument, options);
      }
export function useReferralLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReferralQuery, ReferralQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReferralQuery, ReferralQueryVariables>(ReferralDocument, options);
        }
export type ReferralQueryHookResult = ReturnType<typeof useReferralQuery>;
export type ReferralLazyQueryHookResult = ReturnType<typeof useReferralLazyQuery>;
export type ReferralQueryResult = Apollo.QueryResult<ReferralQuery, ReferralQueryVariables>;
export const ReferralsDocument = gql`
    query Referrals($filter: ReferralFilter, $sorting: SortOrdering) {
  referrals(filter: $filter, sorting: $sorting) {
    edges {
      coupon {
        id
        promoCode
        user {
          blocked
          createdAt
          deletedAt
          email
          emailVerified
          firstName
          id
          language
          lastName
          mobileNumber
          newsletter
          role
          signupReason
          updatedAt
        }
      }
      createdAt
      id
      receiver {
        blocked
        createdAt
        deletedAt
        email
        emailVerified
        firstName
        id
        image {
          contentType
          createdAt
          filename
          height
          id
          originalName
          sizeInBytes
          uri
          width
        }
        joinReason {
          id
          occupation
          school
          subject
        }
        language
        lastName
        mobileNumber
        newsletter
        role
        signupReason
        subscription {
          PaidAt
          amount
          cancelAtPeriodEnd
          createdAt
          currency
          currentPeriodEnd
          customerId
          id
          interval
          plan
          planBillingInterval
          status
          trialUntil
          updatedAt
        }
        updatedAt
      }
      rewarded
      updatedAt
    }
    meta {
      limit
      offset
      total
    }
  }
}
    `;

/**
 * __useReferralsQuery__
 *
 * To run a query within a React component, call `useReferralsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReferralsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReferralsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useReferralsQuery(baseOptions?: Apollo.QueryHookOptions<ReferralsQuery, ReferralsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReferralsQuery, ReferralsQueryVariables>(ReferralsDocument, options);
      }
export function useReferralsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReferralsQuery, ReferralsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReferralsQuery, ReferralsQueryVariables>(ReferralsDocument, options);
        }
export type ReferralsQueryHookResult = ReturnType<typeof useReferralsQuery>;
export type ReferralsLazyQueryHookResult = ReturnType<typeof useReferralsLazyQuery>;
export type ReferralsQueryResult = Apollo.QueryResult<ReferralsQuery, ReferralsQueryVariables>;
export const StatisticsDocument = gql`
    query Statistics($filter: StatisticsFilter!, $sorting: SortOrdering) {
  statistics(filter: $filter, sorting: $sorting) {
    edges {
      book {
        approved
        authors {
          createdAt
          id
          name
          updatedAt
        }
        bookUrl
        categories
        createdAt
        description
        format
        id
        image {
          contentType
          createdAt
          filename
          height
          id
          originalName
          sizeInBytes
          uri
          width
        }
        isbn
        language
        numberOfPages
        price
        publisher {
          address
          city
          country
          createdAt
          deletedAt
          email
          id
          name
          organisationNumber
          phoneNumber
          postalCode
          updatedAt
        }
        releaseYear
        subjects
        title
        tracking {
          bookmarkedAt
          createdAt
          currentPlacementEpub
          currentPlacementPdf
          favourite
          finishedAt
          id
          readAtLeastOneMin
          totalDuration
          updatedAt
        }
        updatedAt
        version
      }
      mediatedIncome
      rows
      totalIncome
    }
    meta {
      limit
      offset
      total
    }
    mrr
  }
}
    `;

/**
 * __useStatisticsQuery__
 *
 * To run a query within a React component, call `useStatisticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStatisticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStatisticsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useStatisticsQuery(baseOptions: Apollo.QueryHookOptions<StatisticsQuery, StatisticsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StatisticsQuery, StatisticsQueryVariables>(StatisticsDocument, options);
      }
export function useStatisticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StatisticsQuery, StatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StatisticsQuery, StatisticsQueryVariables>(StatisticsDocument, options);
        }
export type StatisticsQueryHookResult = ReturnType<typeof useStatisticsQuery>;
export type StatisticsLazyQueryHookResult = ReturnType<typeof useStatisticsLazyQuery>;
export type StatisticsQueryResult = Apollo.QueryResult<StatisticsQuery, StatisticsQueryVariables>;
export const SubjectsDocument = gql`
    query Subjects {
  subjects {
    count
    subject
  }
}
    `;

/**
 * __useSubjectsQuery__
 *
 * To run a query within a React component, call `useSubjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSubjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSubjectsQuery(baseOptions?: Apollo.QueryHookOptions<SubjectsQuery, SubjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SubjectsQuery, SubjectsQueryVariables>(SubjectsDocument, options);
      }
export function useSubjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SubjectsQuery, SubjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SubjectsQuery, SubjectsQueryVariables>(SubjectsDocument, options);
        }
export type SubjectsQueryHookResult = ReturnType<typeof useSubjectsQuery>;
export type SubjectsLazyQueryHookResult = ReturnType<typeof useSubjectsLazyQuery>;
export type SubjectsQueryResult = Apollo.QueryResult<SubjectsQuery, SubjectsQueryVariables>;
export const TrackingDocument = gql`
    query Tracking($bookId: ID!, $userId: ID!) {
  tracking(bookId: $bookId, userId: $userId) {
    bookmarkedAt
    createdAt
    currentPlacementEpub
    currentPlacementPdf
    favourite
    finishedAt
    id
    readAtLeastOneMin
    totalDuration
    updatedAt
  }
}
    `;

/**
 * __useTrackingQuery__
 *
 * To run a query within a React component, call `useTrackingQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrackingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrackingQuery({
 *   variables: {
 *      bookId: // value for 'bookId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useTrackingQuery(baseOptions: Apollo.QueryHookOptions<TrackingQuery, TrackingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TrackingQuery, TrackingQueryVariables>(TrackingDocument, options);
      }
export function useTrackingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TrackingQuery, TrackingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TrackingQuery, TrackingQueryVariables>(TrackingDocument, options);
        }
export type TrackingQueryHookResult = ReturnType<typeof useTrackingQuery>;
export type TrackingLazyQueryHookResult = ReturnType<typeof useTrackingLazyQuery>;
export type TrackingQueryResult = Apollo.QueryResult<TrackingQuery, TrackingQueryVariables>;
export const TrackingsDocument = gql`
    query Trackings($filter: TrackingFilter, $sorting: SortOrdering) {
  trackings(filter: $filter, sorting: $sorting) {
    edges {
      bookmarkedAt
      createdAt
      currentPlacementEpub
      currentPlacementPdf
      favourite
      finishedAt
      id
      readAtLeastOneMin
      totalDuration
      updatedAt
    }
    meta {
      limit
      offset
      total
    }
  }
}
    `;

/**
 * __useTrackingsQuery__
 *
 * To run a query within a React component, call `useTrackingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrackingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrackingsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useTrackingsQuery(baseOptions?: Apollo.QueryHookOptions<TrackingsQuery, TrackingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TrackingsQuery, TrackingsQueryVariables>(TrackingsDocument, options);
      }
export function useTrackingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TrackingsQuery, TrackingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TrackingsQuery, TrackingsQueryVariables>(TrackingsDocument, options);
        }
export type TrackingsQueryHookResult = ReturnType<typeof useTrackingsQuery>;
export type TrackingsLazyQueryHookResult = ReturnType<typeof useTrackingsLazyQuery>;
export type TrackingsQueryResult = Apollo.QueryResult<TrackingsQuery, TrackingsQueryVariables>;
export const UserDocument = gql`
    query User($id: ID!) {
  user(id: $id) {
    blocked
    createdAt
    deletedAt
    email
    emailVerified
    firstName
    id
    image {
      contentType
      createdAt
      filename
      height
      id
      originalName
      sizeInBytes
      uri
      width
    }
    joinReason {
      id
      occupation
      school
      subject
    }
    language
    lastName
    mobileNumber
    newsletter
    role
    signupReason
    subscription {
      PaidAt
      amount
      cancelAtPeriodEnd
      createdAt
      currency
      currentPeriodEnd
      customerId
      id
      interval
      plan
      planBillingInterval
      status
      trialUntil
      updatedAt
    }
    updatedAt
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const UserCouponDocument = gql`
    query UserCoupon {
  userCoupon {
    id
    promoCode
    user {
      blocked
      createdAt
      deletedAt
      email
      emailVerified
      firstName
      id
      image {
        contentType
        createdAt
        filename
        height
        id
        originalName
        sizeInBytes
        uri
        width
      }
      joinReason {
        id
        occupation
        school
        subject
      }
      language
      lastName
      mobileNumber
      newsletter
      role
      signupReason
      subscription {
        PaidAt
        amount
        cancelAtPeriodEnd
        createdAt
        currency
        currentPeriodEnd
        customerId
        id
        interval
        plan
        planBillingInterval
        status
        trialUntil
        updatedAt
      }
      updatedAt
    }
  }
}
    `;

/**
 * __useUserCouponQuery__
 *
 * To run a query within a React component, call `useUserCouponQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserCouponQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserCouponQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserCouponQuery(baseOptions?: Apollo.QueryHookOptions<UserCouponQuery, UserCouponQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserCouponQuery, UserCouponQueryVariables>(UserCouponDocument, options);
      }
export function useUserCouponLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserCouponQuery, UserCouponQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserCouponQuery, UserCouponQueryVariables>(UserCouponDocument, options);
        }
export type UserCouponQueryHookResult = ReturnType<typeof useUserCouponQuery>;
export type UserCouponLazyQueryHookResult = ReturnType<typeof useUserCouponLazyQuery>;
export type UserCouponQueryResult = Apollo.QueryResult<UserCouponQuery, UserCouponQueryVariables>;
export const UsersDocument = gql`
    query Users($filter: UserFilter, $sorting: SortOrdering) {
  users(filter: $filter, sorting: $sorting) {
    edges {
      blocked
      createdAt
      deletedAt
      email
      emailVerified
      firstName
      id
      image {
        contentType
        createdAt
        filename
        height
        id
        originalName
        sizeInBytes
        uri
        width
      }
      joinReason {
        id
        occupation
        school
        subject
      }
      language
      lastName
      mobileNumber
      newsletter
      role
      signupReason
      subscription {
        PaidAt
        amount
        cancelAtPeriodEnd
        createdAt
        currency
        currentPeriodEnd
        customerId
        id
        interval
        plan
        planBillingInterval
        status
        trialUntil
        updatedAt
      }
      updatedAt
    }
    meta {
      limit
      offset
      total
    }
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const AddSignupReasonDocument = gql`
    mutation AddSignupReason($input: JoinReasonInput!) {
  addSignupReason(input: $input) {
    blocked
    createdAt
    deletedAt
    email
    emailVerified
    firstName
    id
    image {
      contentType
      createdAt
      filename
      height
      id
      originalName
      sizeInBytes
      uri
      width
    }
    joinReason {
      id
      occupation
      school
      subject
    }
    language
    lastName
    mobileNumber
    newsletter
    role
    signupReason
    subscription {
      PaidAt
      amount
      cancelAtPeriodEnd
      createdAt
      currency
      currentPeriodEnd
      customerId
      id
      interval
      plan
      planBillingInterval
      status
      trialUntil
      updatedAt
    }
    updatedAt
  }
}
    `;
export type AddSignupReasonMutationFn = Apollo.MutationFunction<AddSignupReasonMutation, AddSignupReasonMutationVariables>;

/**
 * __useAddSignupReasonMutation__
 *
 * To run a mutation, you first call `useAddSignupReasonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddSignupReasonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addSignupReasonMutation, { data, loading, error }] = useAddSignupReasonMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddSignupReasonMutation(baseOptions?: Apollo.MutationHookOptions<AddSignupReasonMutation, AddSignupReasonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddSignupReasonMutation, AddSignupReasonMutationVariables>(AddSignupReasonDocument, options);
      }
export type AddSignupReasonMutationHookResult = ReturnType<typeof useAddSignupReasonMutation>;
export type AddSignupReasonMutationResult = Apollo.MutationResult<AddSignupReasonMutation>;
export type AddSignupReasonMutationOptions = Apollo.BaseMutationOptions<AddSignupReasonMutation, AddSignupReasonMutationVariables>;
export const CreateAuthorDocument = gql`
    mutation CreateAuthor($input: AuthorInput!) {
  createAuthor(input: $input) {
    createdAt
    id
    image {
      contentType
      createdAt
      filename
      height
      id
      originalName
      sizeInBytes
      uri
      width
    }
    name
    updatedAt
  }
}
    `;
export type CreateAuthorMutationFn = Apollo.MutationFunction<CreateAuthorMutation, CreateAuthorMutationVariables>;

/**
 * __useCreateAuthorMutation__
 *
 * To run a mutation, you first call `useCreateAuthorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAuthorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAuthorMutation, { data, loading, error }] = useCreateAuthorMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAuthorMutation(baseOptions?: Apollo.MutationHookOptions<CreateAuthorMutation, CreateAuthorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAuthorMutation, CreateAuthorMutationVariables>(CreateAuthorDocument, options);
      }
export type CreateAuthorMutationHookResult = ReturnType<typeof useCreateAuthorMutation>;
export type CreateAuthorMutationResult = Apollo.MutationResult<CreateAuthorMutation>;
export type CreateAuthorMutationOptions = Apollo.BaseMutationOptions<CreateAuthorMutation, CreateAuthorMutationVariables>;
export const CreateBookDocument = gql`
    mutation CreateBook($input: CreateBookInput!) {
  createBook(input: $input) {
    approved
    authors {
      createdAt
      id
      image {
        contentType
        createdAt
        filename
        height
        id
        originalName
        sizeInBytes
        uri
        width
      }
      name
      updatedAt
    }
    bookUrl
    categories
    createdAt
    description
    format
    id
    image {
      contentType
      createdAt
      filename
      height
      id
      originalName
      sizeInBytes
      uri
      width
    }
    isbn
    language
    numberOfPages
    price
    publisher {
      address
      city
      country
      createdAt
      deletedAt
      email
      id
      image {
        contentType
        createdAt
        filename
        height
        id
        originalName
        sizeInBytes
        uri
        width
      }
      name
      organisationNumber
      phoneNumber
      postalCode
      updatedAt
    }
    releaseYear
    subjects
    title
    tracking {
      bookmarkedAt
      createdAt
      currentPlacementEpub
      currentPlacementPdf
      favourite
      finishedAt
      id
      readAtLeastOneMin
      totalDuration
      updatedAt
    }
    updatedAt
    version
  }
}
    `;
export type CreateBookMutationFn = Apollo.MutationFunction<CreateBookMutation, CreateBookMutationVariables>;

/**
 * __useCreateBookMutation__
 *
 * To run a mutation, you first call `useCreateBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookMutation, { data, loading, error }] = useCreateBookMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBookMutation(baseOptions?: Apollo.MutationHookOptions<CreateBookMutation, CreateBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBookMutation, CreateBookMutationVariables>(CreateBookDocument, options);
      }
export type CreateBookMutationHookResult = ReturnType<typeof useCreateBookMutation>;
export type CreateBookMutationResult = Apollo.MutationResult<CreateBookMutation>;
export type CreateBookMutationOptions = Apollo.BaseMutationOptions<CreateBookMutation, CreateBookMutationVariables>;
export const CreateBookmarkDocument = gql`
    mutation CreateBookmark($input: CreateBookmarkInput!) {
  createBookmark(input: $input) {
    bookId
    createdAt
    description
    epubPage
    id
    pdfPage
    title
    updatedAt
    userId
  }
}
    `;
export type CreateBookmarkMutationFn = Apollo.MutationFunction<CreateBookmarkMutation, CreateBookmarkMutationVariables>;

/**
 * __useCreateBookmarkMutation__
 *
 * To run a mutation, you first call `useCreateBookmarkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookmarkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookmarkMutation, { data, loading, error }] = useCreateBookmarkMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBookmarkMutation(baseOptions?: Apollo.MutationHookOptions<CreateBookmarkMutation, CreateBookmarkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBookmarkMutation, CreateBookmarkMutationVariables>(CreateBookmarkDocument, options);
      }
export type CreateBookmarkMutationHookResult = ReturnType<typeof useCreateBookmarkMutation>;
export type CreateBookmarkMutationResult = Apollo.MutationResult<CreateBookmarkMutation>;
export type CreateBookmarkMutationOptions = Apollo.BaseMutationOptions<CreateBookmarkMutation, CreateBookmarkMutationVariables>;
export const CreateHighlightDocument = gql`
    mutation CreateHighlight($input: CreateHighlightInput!) {
  createHighlight(input: $input) {
    bookId
    createdAt
    epubPage
    highlight
    id
    pdfPage
    updatedAt
    userId
  }
}
    `;
export type CreateHighlightMutationFn = Apollo.MutationFunction<CreateHighlightMutation, CreateHighlightMutationVariables>;

/**
 * __useCreateHighlightMutation__
 *
 * To run a mutation, you first call `useCreateHighlightMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateHighlightMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createHighlightMutation, { data, loading, error }] = useCreateHighlightMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateHighlightMutation(baseOptions?: Apollo.MutationHookOptions<CreateHighlightMutation, CreateHighlightMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateHighlightMutation, CreateHighlightMutationVariables>(CreateHighlightDocument, options);
      }
export type CreateHighlightMutationHookResult = ReturnType<typeof useCreateHighlightMutation>;
export type CreateHighlightMutationResult = Apollo.MutationResult<CreateHighlightMutation>;
export type CreateHighlightMutationOptions = Apollo.BaseMutationOptions<CreateHighlightMutation, CreateHighlightMutationVariables>;
export const CreatePublisherDocument = gql`
    mutation CreatePublisher($input: CreatePublisherInput!) {
  createPublisher(input: $input) {
    address
    city
    country
    createdAt
    deletedAt
    email
    id
    image {
      contentType
      createdAt
      filename
      height
      id
      originalName
      sizeInBytes
      uri
      width
    }
    name
    organisationNumber
    phoneNumber
    postalCode
    updatedAt
  }
}
    `;
export type CreatePublisherMutationFn = Apollo.MutationFunction<CreatePublisherMutation, CreatePublisherMutationVariables>;

/**
 * __useCreatePublisherMutation__
 *
 * To run a mutation, you first call `useCreatePublisherMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePublisherMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPublisherMutation, { data, loading, error }] = useCreatePublisherMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePublisherMutation(baseOptions?: Apollo.MutationHookOptions<CreatePublisherMutation, CreatePublisherMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePublisherMutation, CreatePublisherMutationVariables>(CreatePublisherDocument, options);
      }
export type CreatePublisherMutationHookResult = ReturnType<typeof useCreatePublisherMutation>;
export type CreatePublisherMutationResult = Apollo.MutationResult<CreatePublisherMutation>;
export type CreatePublisherMutationOptions = Apollo.BaseMutationOptions<CreatePublisherMutation, CreatePublisherMutationVariables>;
export const CreateStripeCheckoutPortalDocument = gql`
    mutation CreateStripeCheckoutPortal($input: CreateCheckoutPortalInput!) {
  createStripeCheckoutPortal(input: $input)
}
    `;
export type CreateStripeCheckoutPortalMutationFn = Apollo.MutationFunction<CreateStripeCheckoutPortalMutation, CreateStripeCheckoutPortalMutationVariables>;

/**
 * __useCreateStripeCheckoutPortalMutation__
 *
 * To run a mutation, you first call `useCreateStripeCheckoutPortalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStripeCheckoutPortalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStripeCheckoutPortalMutation, { data, loading, error }] = useCreateStripeCheckoutPortalMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateStripeCheckoutPortalMutation(baseOptions?: Apollo.MutationHookOptions<CreateStripeCheckoutPortalMutation, CreateStripeCheckoutPortalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateStripeCheckoutPortalMutation, CreateStripeCheckoutPortalMutationVariables>(CreateStripeCheckoutPortalDocument, options);
      }
export type CreateStripeCheckoutPortalMutationHookResult = ReturnType<typeof useCreateStripeCheckoutPortalMutation>;
export type CreateStripeCheckoutPortalMutationResult = Apollo.MutationResult<CreateStripeCheckoutPortalMutation>;
export type CreateStripeCheckoutPortalMutationOptions = Apollo.BaseMutationOptions<CreateStripeCheckoutPortalMutation, CreateStripeCheckoutPortalMutationVariables>;
export const CreateStripeCustomerPortalDocument = gql`
    mutation CreateStripeCustomerPortal($returnUrl: String) {
  createStripeCustomerPortal(returnUrl: $returnUrl)
}
    `;
export type CreateStripeCustomerPortalMutationFn = Apollo.MutationFunction<CreateStripeCustomerPortalMutation, CreateStripeCustomerPortalMutationVariables>;

/**
 * __useCreateStripeCustomerPortalMutation__
 *
 * To run a mutation, you first call `useCreateStripeCustomerPortalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStripeCustomerPortalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStripeCustomerPortalMutation, { data, loading, error }] = useCreateStripeCustomerPortalMutation({
 *   variables: {
 *      returnUrl: // value for 'returnUrl'
 *   },
 * });
 */
export function useCreateStripeCustomerPortalMutation(baseOptions?: Apollo.MutationHookOptions<CreateStripeCustomerPortalMutation, CreateStripeCustomerPortalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateStripeCustomerPortalMutation, CreateStripeCustomerPortalMutationVariables>(CreateStripeCustomerPortalDocument, options);
      }
export type CreateStripeCustomerPortalMutationHookResult = ReturnType<typeof useCreateStripeCustomerPortalMutation>;
export type CreateStripeCustomerPortalMutationResult = Apollo.MutationResult<CreateStripeCustomerPortalMutation>;
export type CreateStripeCustomerPortalMutationOptions = Apollo.BaseMutationOptions<CreateStripeCustomerPortalMutation, CreateStripeCustomerPortalMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($input: CreateUserInput) {
  createUser(input: $input) {
    jwt
    message
    newAccount
    refreshToken
    success
    user {
      blocked
      createdAt
      deletedAt
      email
      emailVerified
      firstName
      id
      image {
        contentType
        createdAt
        filename
        height
        id
        originalName
        sizeInBytes
        uri
        width
      }
      joinReason {
        id
        occupation
        school
        subject
      }
      language
      lastName
      mobileNumber
      newsletter
      role
      signupReason
      subscription {
        PaidAt
        amount
        cancelAtPeriodEnd
        createdAt
        currency
        currentPeriodEnd
        customerId
        id
        interval
        plan
        planBillingInterval
        status
        trialUntil
        updatedAt
      }
      updatedAt
    }
    userId
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const DeleteAuthorDocument = gql`
    mutation DeleteAuthor($id: ID!) {
  deleteAuthor(id: $id) {
    success
  }
}
    `;
export type DeleteAuthorMutationFn = Apollo.MutationFunction<DeleteAuthorMutation, DeleteAuthorMutationVariables>;

/**
 * __useDeleteAuthorMutation__
 *
 * To run a mutation, you first call `useDeleteAuthorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAuthorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAuthorMutation, { data, loading, error }] = useDeleteAuthorMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAuthorMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAuthorMutation, DeleteAuthorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAuthorMutation, DeleteAuthorMutationVariables>(DeleteAuthorDocument, options);
      }
export type DeleteAuthorMutationHookResult = ReturnType<typeof useDeleteAuthorMutation>;
export type DeleteAuthorMutationResult = Apollo.MutationResult<DeleteAuthorMutation>;
export type DeleteAuthorMutationOptions = Apollo.BaseMutationOptions<DeleteAuthorMutation, DeleteAuthorMutationVariables>;
export const DeleteBookDocument = gql`
    mutation DeleteBook($id: ID!) {
  deleteBook(id: $id) {
    success
  }
}
    `;
export type DeleteBookMutationFn = Apollo.MutationFunction<DeleteBookMutation, DeleteBookMutationVariables>;

/**
 * __useDeleteBookMutation__
 *
 * To run a mutation, you first call `useDeleteBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBookMutation, { data, loading, error }] = useDeleteBookMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBookMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBookMutation, DeleteBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBookMutation, DeleteBookMutationVariables>(DeleteBookDocument, options);
      }
export type DeleteBookMutationHookResult = ReturnType<typeof useDeleteBookMutation>;
export type DeleteBookMutationResult = Apollo.MutationResult<DeleteBookMutation>;
export type DeleteBookMutationOptions = Apollo.BaseMutationOptions<DeleteBookMutation, DeleteBookMutationVariables>;
export const DeleteBookmarkDocument = gql`
    mutation DeleteBookmark($id: ID!) {
  deleteBookmark(id: $id) {
    success
  }
}
    `;
export type DeleteBookmarkMutationFn = Apollo.MutationFunction<DeleteBookmarkMutation, DeleteBookmarkMutationVariables>;

/**
 * __useDeleteBookmarkMutation__
 *
 * To run a mutation, you first call `useDeleteBookmarkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBookmarkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBookmarkMutation, { data, loading, error }] = useDeleteBookmarkMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBookmarkMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBookmarkMutation, DeleteBookmarkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBookmarkMutation, DeleteBookmarkMutationVariables>(DeleteBookmarkDocument, options);
      }
export type DeleteBookmarkMutationHookResult = ReturnType<typeof useDeleteBookmarkMutation>;
export type DeleteBookmarkMutationResult = Apollo.MutationResult<DeleteBookmarkMutation>;
export type DeleteBookmarkMutationOptions = Apollo.BaseMutationOptions<DeleteBookmarkMutation, DeleteBookmarkMutationVariables>;
export const DeleteHighlightDocument = gql`
    mutation DeleteHighlight($id: ID!) {
  deleteHighlight(id: $id) {
    success
  }
}
    `;
export type DeleteHighlightMutationFn = Apollo.MutationFunction<DeleteHighlightMutation, DeleteHighlightMutationVariables>;

/**
 * __useDeleteHighlightMutation__
 *
 * To run a mutation, you first call `useDeleteHighlightMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteHighlightMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteHighlightMutation, { data, loading, error }] = useDeleteHighlightMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteHighlightMutation(baseOptions?: Apollo.MutationHookOptions<DeleteHighlightMutation, DeleteHighlightMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteHighlightMutation, DeleteHighlightMutationVariables>(DeleteHighlightDocument, options);
      }
export type DeleteHighlightMutationHookResult = ReturnType<typeof useDeleteHighlightMutation>;
export type DeleteHighlightMutationResult = Apollo.MutationResult<DeleteHighlightMutation>;
export type DeleteHighlightMutationOptions = Apollo.BaseMutationOptions<DeleteHighlightMutation, DeleteHighlightMutationVariables>;
export const DeletePublisherDocument = gql`
    mutation DeletePublisher($id: ID!) {
  deletePublisher(id: $id) {
    success
  }
}
    `;
export type DeletePublisherMutationFn = Apollo.MutationFunction<DeletePublisherMutation, DeletePublisherMutationVariables>;

/**
 * __useDeletePublisherMutation__
 *
 * To run a mutation, you first call `useDeletePublisherMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePublisherMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePublisherMutation, { data, loading, error }] = useDeletePublisherMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePublisherMutation(baseOptions?: Apollo.MutationHookOptions<DeletePublisherMutation, DeletePublisherMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePublisherMutation, DeletePublisherMutationVariables>(DeletePublisherDocument, options);
      }
export type DeletePublisherMutationHookResult = ReturnType<typeof useDeletePublisherMutation>;
export type DeletePublisherMutationResult = Apollo.MutationResult<DeletePublisherMutation>;
export type DeletePublisherMutationOptions = Apollo.BaseMutationOptions<DeletePublisherMutation, DeletePublisherMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($id: ID!) {
  deleteUser(id: $id) {
    success
  }
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const ExportBooksCsvDocument = gql`
    mutation ExportBooksCsv($filter: BookFilter) {
  exportBooksCSV(filter: $filter)
}
    `;
export type ExportBooksCsvMutationFn = Apollo.MutationFunction<ExportBooksCsvMutation, ExportBooksCsvMutationVariables>;

/**
 * __useExportBooksCsvMutation__
 *
 * To run a mutation, you first call `useExportBooksCsvMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useExportBooksCsvMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [exportBooksCsvMutation, { data, loading, error }] = useExportBooksCsvMutation({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useExportBooksCsvMutation(baseOptions?: Apollo.MutationHookOptions<ExportBooksCsvMutation, ExportBooksCsvMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ExportBooksCsvMutation, ExportBooksCsvMutationVariables>(ExportBooksCsvDocument, options);
      }
export type ExportBooksCsvMutationHookResult = ReturnType<typeof useExportBooksCsvMutation>;
export type ExportBooksCsvMutationResult = Apollo.MutationResult<ExportBooksCsvMutation>;
export type ExportBooksCsvMutationOptions = Apollo.BaseMutationOptions<ExportBooksCsvMutation, ExportBooksCsvMutationVariables>;
export const ExportCsvDocument = gql`
    mutation ExportCsv($filter: StatisticsFilter!, $sorting: SortOrdering) {
  exportCSV(filter: $filter, sorting: $sorting)
}
    `;
export type ExportCsvMutationFn = Apollo.MutationFunction<ExportCsvMutation, ExportCsvMutationVariables>;

/**
 * __useExportCsvMutation__
 *
 * To run a mutation, you first call `useExportCsvMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useExportCsvMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [exportCsvMutation, { data, loading, error }] = useExportCsvMutation({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useExportCsvMutation(baseOptions?: Apollo.MutationHookOptions<ExportCsvMutation, ExportCsvMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ExportCsvMutation, ExportCsvMutationVariables>(ExportCsvDocument, options);
      }
export type ExportCsvMutationHookResult = ReturnType<typeof useExportCsvMutation>;
export type ExportCsvMutationResult = Apollo.MutationResult<ExportCsvMutation>;
export type ExportCsvMutationOptions = Apollo.BaseMutationOptions<ExportCsvMutation, ExportCsvMutationVariables>;
export const ExportPacktSalesCsvDocument = gql`
    mutation ExportPacktSalesCsv($from: Time!, $to: Time!) {
  exportPacktSalesCSV(from: $from, to: $to)
}
    `;
export type ExportPacktSalesCsvMutationFn = Apollo.MutationFunction<ExportPacktSalesCsvMutation, ExportPacktSalesCsvMutationVariables>;

/**
 * __useExportPacktSalesCsvMutation__
 *
 * To run a mutation, you first call `useExportPacktSalesCsvMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useExportPacktSalesCsvMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [exportPacktSalesCsvMutation, { data, loading, error }] = useExportPacktSalesCsvMutation({
 *   variables: {
 *      from: // value for 'from'
 *      to: // value for 'to'
 *   },
 * });
 */
export function useExportPacktSalesCsvMutation(baseOptions?: Apollo.MutationHookOptions<ExportPacktSalesCsvMutation, ExportPacktSalesCsvMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ExportPacktSalesCsvMutation, ExportPacktSalesCsvMutationVariables>(ExportPacktSalesCsvDocument, options);
      }
export type ExportPacktSalesCsvMutationHookResult = ReturnType<typeof useExportPacktSalesCsvMutation>;
export type ExportPacktSalesCsvMutationResult = Apollo.MutationResult<ExportPacktSalesCsvMutation>;
export type ExportPacktSalesCsvMutationOptions = Apollo.BaseMutationOptions<ExportPacktSalesCsvMutation, ExportPacktSalesCsvMutationVariables>;
export const ExportSearchesCsvDocument = gql`
    mutation ExportSearchesCsv($filter: MissedSearchFilter!, $sorting: SortOrdering) {
  exportSearchesCSV(filter: $filter, sorting: $sorting)
}
    `;
export type ExportSearchesCsvMutationFn = Apollo.MutationFunction<ExportSearchesCsvMutation, ExportSearchesCsvMutationVariables>;

/**
 * __useExportSearchesCsvMutation__
 *
 * To run a mutation, you first call `useExportSearchesCsvMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useExportSearchesCsvMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [exportSearchesCsvMutation, { data, loading, error }] = useExportSearchesCsvMutation({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useExportSearchesCsvMutation(baseOptions?: Apollo.MutationHookOptions<ExportSearchesCsvMutation, ExportSearchesCsvMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ExportSearchesCsvMutation, ExportSearchesCsvMutationVariables>(ExportSearchesCsvDocument, options);
      }
export type ExportSearchesCsvMutationHookResult = ReturnType<typeof useExportSearchesCsvMutation>;
export type ExportSearchesCsvMutationResult = Apollo.MutationResult<ExportSearchesCsvMutation>;
export type ExportSearchesCsvMutationOptions = Apollo.BaseMutationOptions<ExportSearchesCsvMutation, ExportSearchesCsvMutationVariables>;
export const InactivateBookDocument = gql`
    mutation InactivateBook($id: ID!) {
  inactivateBook(id: $id) {
    success
  }
}
    `;
export type InactivateBookMutationFn = Apollo.MutationFunction<InactivateBookMutation, InactivateBookMutationVariables>;

/**
 * __useInactivateBookMutation__
 *
 * To run a mutation, you first call `useInactivateBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInactivateBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [inactivateBookMutation, { data, loading, error }] = useInactivateBookMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useInactivateBookMutation(baseOptions?: Apollo.MutationHookOptions<InactivateBookMutation, InactivateBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InactivateBookMutation, InactivateBookMutationVariables>(InactivateBookDocument, options);
      }
export type InactivateBookMutationHookResult = ReturnType<typeof useInactivateBookMutation>;
export type InactivateBookMutationResult = Apollo.MutationResult<InactivateBookMutation>;
export type InactivateBookMutationOptions = Apollo.BaseMutationOptions<InactivateBookMutation, InactivateBookMutationVariables>;
export const LoginAppleDocument = gql`
    mutation LoginApple($appleToken: String!, $firstName: String, $lastName: String) {
  loginApple(appleToken: $appleToken, firstName: $firstName, lastName: $lastName) {
    jwt
    message
    newAccount
    refreshToken
    success
    user {
      blocked
      createdAt
      deletedAt
      email
      emailVerified
      firstName
      id
      image {
        contentType
        createdAt
        filename
        height
        id
        originalName
        sizeInBytes
        uri
        width
      }
      joinReason {
        id
        occupation
        school
        subject
      }
      language
      lastName
      mobileNumber
      newsletter
      role
      signupReason
      subscription {
        PaidAt
        amount
        cancelAtPeriodEnd
        createdAt
        currency
        currentPeriodEnd
        customerId
        id
        interval
        plan
        planBillingInterval
        status
        trialUntil
        updatedAt
      }
      updatedAt
    }
    userId
  }
}
    `;
export type LoginAppleMutationFn = Apollo.MutationFunction<LoginAppleMutation, LoginAppleMutationVariables>;

/**
 * __useLoginAppleMutation__
 *
 * To run a mutation, you first call `useLoginAppleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginAppleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginAppleMutation, { data, loading, error }] = useLoginAppleMutation({
 *   variables: {
 *      appleToken: // value for 'appleToken'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *   },
 * });
 */
export function useLoginAppleMutation(baseOptions?: Apollo.MutationHookOptions<LoginAppleMutation, LoginAppleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginAppleMutation, LoginAppleMutationVariables>(LoginAppleDocument, options);
      }
export type LoginAppleMutationHookResult = ReturnType<typeof useLoginAppleMutation>;
export type LoginAppleMutationResult = Apollo.MutationResult<LoginAppleMutation>;
export type LoginAppleMutationOptions = Apollo.BaseMutationOptions<LoginAppleMutation, LoginAppleMutationVariables>;
export const LoginEmailDocument = gql`
    mutation LoginEmail($email: String!, $password: String!) {
  loginEmail(email: $email, password: $password) {
    jwt
    message
    newAccount
    refreshToken
    success
    user {
      blocked
      createdAt
      deletedAt
      email
      emailVerified
      firstName
      id
      image {
        contentType
        createdAt
        filename
        height
        id
        originalName
        sizeInBytes
        uri
        width
      }
      joinReason {
        id
        occupation
        school
        subject
      }
      language
      lastName
      mobileNumber
      newsletter
      role
      signupReason
      subscription {
        PaidAt
        amount
        cancelAtPeriodEnd
        createdAt
        currency
        currentPeriodEnd
        customerId
        id
        interval
        plan
        planBillingInterval
        status
        trialUntil
        updatedAt
      }
      updatedAt
    }
    userId
  }
}
    `;
export type LoginEmailMutationFn = Apollo.MutationFunction<LoginEmailMutation, LoginEmailMutationVariables>;

/**
 * __useLoginEmailMutation__
 *
 * To run a mutation, you first call `useLoginEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginEmailMutation, { data, loading, error }] = useLoginEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginEmailMutation(baseOptions?: Apollo.MutationHookOptions<LoginEmailMutation, LoginEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginEmailMutation, LoginEmailMutationVariables>(LoginEmailDocument, options);
      }
export type LoginEmailMutationHookResult = ReturnType<typeof useLoginEmailMutation>;
export type LoginEmailMutationResult = Apollo.MutationResult<LoginEmailMutation>;
export type LoginEmailMutationOptions = Apollo.BaseMutationOptions<LoginEmailMutation, LoginEmailMutationVariables>;
export const LoginGoogleDocument = gql`
    mutation LoginGoogle($googleToken: String!) {
  loginGoogle(googleToken: $googleToken) {
    jwt
    message
    newAccount
    refreshToken
    success
    user {
      blocked
      createdAt
      deletedAt
      email
      emailVerified
      firstName
      id
      image {
        contentType
        createdAt
        filename
        height
        id
        originalName
        sizeInBytes
        uri
        width
      }
      joinReason {
        id
        occupation
        school
        subject
      }
      language
      lastName
      mobileNumber
      newsletter
      role
      signupReason
      subscription {
        PaidAt
        amount
        cancelAtPeriodEnd
        createdAt
        currency
        currentPeriodEnd
        customerId
        id
        interval
        plan
        planBillingInterval
        status
        trialUntil
        updatedAt
      }
      updatedAt
    }
    userId
  }
}
    `;
export type LoginGoogleMutationFn = Apollo.MutationFunction<LoginGoogleMutation, LoginGoogleMutationVariables>;

/**
 * __useLoginGoogleMutation__
 *
 * To run a mutation, you first call `useLoginGoogleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginGoogleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginGoogleMutation, { data, loading, error }] = useLoginGoogleMutation({
 *   variables: {
 *      googleToken: // value for 'googleToken'
 *   },
 * });
 */
export function useLoginGoogleMutation(baseOptions?: Apollo.MutationHookOptions<LoginGoogleMutation, LoginGoogleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginGoogleMutation, LoginGoogleMutationVariables>(LoginGoogleDocument, options);
      }
export type LoginGoogleMutationHookResult = ReturnType<typeof useLoginGoogleMutation>;
export type LoginGoogleMutationResult = Apollo.MutationResult<LoginGoogleMutation>;
export type LoginGoogleMutationOptions = Apollo.BaseMutationOptions<LoginGoogleMutation, LoginGoogleMutationVariables>;
export const PreSignupDocument = gql`
    mutation PreSignup($input: PreSignupInput!) {
  preSignup(input: $input) {
    success
  }
}
    `;
export type PreSignupMutationFn = Apollo.MutationFunction<PreSignupMutation, PreSignupMutationVariables>;

/**
 * __usePreSignupMutation__
 *
 * To run a mutation, you first call `usePreSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePreSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [preSignupMutation, { data, loading, error }] = usePreSignupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePreSignupMutation(baseOptions?: Apollo.MutationHookOptions<PreSignupMutation, PreSignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PreSignupMutation, PreSignupMutationVariables>(PreSignupDocument, options);
      }
export type PreSignupMutationHookResult = ReturnType<typeof usePreSignupMutation>;
export type PreSignupMutationResult = Apollo.MutationResult<PreSignupMutation>;
export type PreSignupMutationOptions = Apollo.BaseMutationOptions<PreSignupMutation, PreSignupMutationVariables>;
export const ReSendUserInviteDocument = gql`
    mutation ReSendUserInvite($id: ID!) {
  reSendUserInvite(id: $id) {
    success
  }
}
    `;
export type ReSendUserInviteMutationFn = Apollo.MutationFunction<ReSendUserInviteMutation, ReSendUserInviteMutationVariables>;

/**
 * __useReSendUserInviteMutation__
 *
 * To run a mutation, you first call `useReSendUserInviteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReSendUserInviteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reSendUserInviteMutation, { data, loading, error }] = useReSendUserInviteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useReSendUserInviteMutation(baseOptions?: Apollo.MutationHookOptions<ReSendUserInviteMutation, ReSendUserInviteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReSendUserInviteMutation, ReSendUserInviteMutationVariables>(ReSendUserInviteDocument, options);
      }
export type ReSendUserInviteMutationHookResult = ReturnType<typeof useReSendUserInviteMutation>;
export type ReSendUserInviteMutationResult = Apollo.MutationResult<ReSendUserInviteMutation>;
export type ReSendUserInviteMutationOptions = Apollo.BaseMutationOptions<ReSendUserInviteMutation, ReSendUserInviteMutationVariables>;
export const RefreshTokenDocument = gql`
    mutation RefreshToken($token: String!) {
  refreshToken(token: $token) {
    jwt
    message
    newAccount
    refreshToken
    success
    user {
      blocked
      createdAt
      deletedAt
      email
      emailVerified
      firstName
      id
      image {
        contentType
        createdAt
        filename
        height
        id
        originalName
        sizeInBytes
        uri
        width
      }
      joinReason {
        id
        occupation
        school
        subject
      }
      language
      lastName
      mobileNumber
      newsletter
      role
      signupReason
      subscription {
        PaidAt
        amount
        cancelAtPeriodEnd
        createdAt
        currency
        currentPeriodEnd
        customerId
        id
        interval
        plan
        planBillingInterval
        status
        trialUntil
        updatedAt
      }
      updatedAt
    }
    userId
  }
}
    `;
export type RefreshTokenMutationFn = Apollo.MutationFunction<RefreshTokenMutation, RefreshTokenMutationVariables>;

/**
 * __useRefreshTokenMutation__
 *
 * To run a mutation, you first call `useRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokenMutation, { data, loading, error }] = useRefreshTokenMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useRefreshTokenMutation(baseOptions?: Apollo.MutationHookOptions<RefreshTokenMutation, RefreshTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument, options);
      }
export type RefreshTokenMutationHookResult = ReturnType<typeof useRefreshTokenMutation>;
export type RefreshTokenMutationResult = Apollo.MutationResult<RefreshTokenMutation>;
export type RefreshTokenMutationOptions = Apollo.BaseMutationOptions<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const RemovePreSignupDocument = gql`
    mutation RemovePreSignup($email: String!) {
  removePreSignup(email: $email) {
    success
  }
}
    `;
export type RemovePreSignupMutationFn = Apollo.MutationFunction<RemovePreSignupMutation, RemovePreSignupMutationVariables>;

/**
 * __useRemovePreSignupMutation__
 *
 * To run a mutation, you first call `useRemovePreSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemovePreSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removePreSignupMutation, { data, loading, error }] = useRemovePreSignupMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRemovePreSignupMutation(baseOptions?: Apollo.MutationHookOptions<RemovePreSignupMutation, RemovePreSignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemovePreSignupMutation, RemovePreSignupMutationVariables>(RemovePreSignupDocument, options);
      }
export type RemovePreSignupMutationHookResult = ReturnType<typeof useRemovePreSignupMutation>;
export type RemovePreSignupMutationResult = Apollo.MutationResult<RemovePreSignupMutation>;
export type RemovePreSignupMutationOptions = Apollo.BaseMutationOptions<RemovePreSignupMutation, RemovePreSignupMutationVariables>;
export const ResendVerifyEmailDocument = gql`
    mutation ResendVerifyEmail($id: ID!) {
  resendVerifyEmail(id: $id) {
    blocked
    createdAt
    deletedAt
    email
    emailVerified
    firstName
    id
    image {
      contentType
      createdAt
      filename
      height
      id
      originalName
      sizeInBytes
      uri
      width
    }
    joinReason {
      id
      occupation
      school
      subject
    }
    language
    lastName
    mobileNumber
    newsletter
    role
    signupReason
    subscription {
      PaidAt
      amount
      cancelAtPeriodEnd
      createdAt
      currency
      currentPeriodEnd
      customerId
      id
      interval
      plan
      planBillingInterval
      status
      trialUntil
      updatedAt
    }
    updatedAt
  }
}
    `;
export type ResendVerifyEmailMutationFn = Apollo.MutationFunction<ResendVerifyEmailMutation, ResendVerifyEmailMutationVariables>;

/**
 * __useResendVerifyEmailMutation__
 *
 * To run a mutation, you first call `useResendVerifyEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResendVerifyEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resendVerifyEmailMutation, { data, loading, error }] = useResendVerifyEmailMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useResendVerifyEmailMutation(baseOptions?: Apollo.MutationHookOptions<ResendVerifyEmailMutation, ResendVerifyEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResendVerifyEmailMutation, ResendVerifyEmailMutationVariables>(ResendVerifyEmailDocument, options);
      }
export type ResendVerifyEmailMutationHookResult = ReturnType<typeof useResendVerifyEmailMutation>;
export type ResendVerifyEmailMutationResult = Apollo.MutationResult<ResendVerifyEmailMutation>;
export type ResendVerifyEmailMutationOptions = Apollo.BaseMutationOptions<ResendVerifyEmailMutation, ResendVerifyEmailMutationVariables>;
export const ResetPasswordFinalizeDocument = gql`
    mutation ResetPasswordFinalize($input: ResetPasswordFinalizeInput!) {
  resetPasswordFinalize(input: $input) {
    jwt
    message
    newAccount
    refreshToken
    success
    user {
      blocked
      createdAt
      deletedAt
      email
      emailVerified
      firstName
      id
      image {
        contentType
        createdAt
        filename
        height
        id
        originalName
        sizeInBytes
        uri
        width
      }
      joinReason {
        id
        occupation
        school
        subject
      }
      language
      lastName
      mobileNumber
      newsletter
      role
      signupReason
      subscription {
        PaidAt
        amount
        cancelAtPeriodEnd
        createdAt
        currency
        currentPeriodEnd
        customerId
        id
        interval
        plan
        planBillingInterval
        status
        trialUntil
        updatedAt
      }
      updatedAt
    }
    userId
  }
}
    `;
export type ResetPasswordFinalizeMutationFn = Apollo.MutationFunction<ResetPasswordFinalizeMutation, ResetPasswordFinalizeMutationVariables>;

/**
 * __useResetPasswordFinalizeMutation__
 *
 * To run a mutation, you first call `useResetPasswordFinalizeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordFinalizeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordFinalizeMutation, { data, loading, error }] = useResetPasswordFinalizeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useResetPasswordFinalizeMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordFinalizeMutation, ResetPasswordFinalizeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordFinalizeMutation, ResetPasswordFinalizeMutationVariables>(ResetPasswordFinalizeDocument, options);
      }
export type ResetPasswordFinalizeMutationHookResult = ReturnType<typeof useResetPasswordFinalizeMutation>;
export type ResetPasswordFinalizeMutationResult = Apollo.MutationResult<ResetPasswordFinalizeMutation>;
export type ResetPasswordFinalizeMutationOptions = Apollo.BaseMutationOptions<ResetPasswordFinalizeMutation, ResetPasswordFinalizeMutationVariables>;
export const ResetPasswordInitiateDocument = gql`
    mutation ResetPasswordInitiate($email: String!) {
  resetPasswordInitiate(email: $email) {
    success
  }
}
    `;
export type ResetPasswordInitiateMutationFn = Apollo.MutationFunction<ResetPasswordInitiateMutation, ResetPasswordInitiateMutationVariables>;

/**
 * __useResetPasswordInitiateMutation__
 *
 * To run a mutation, you first call `useResetPasswordInitiateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordInitiateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordInitiateMutation, { data, loading, error }] = useResetPasswordInitiateMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useResetPasswordInitiateMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordInitiateMutation, ResetPasswordInitiateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordInitiateMutation, ResetPasswordInitiateMutationVariables>(ResetPasswordInitiateDocument, options);
      }
export type ResetPasswordInitiateMutationHookResult = ReturnType<typeof useResetPasswordInitiateMutation>;
export type ResetPasswordInitiateMutationResult = Apollo.MutationResult<ResetPasswordInitiateMutation>;
export type ResetPasswordInitiateMutationOptions = Apollo.BaseMutationOptions<ResetPasswordInitiateMutation, ResetPasswordInitiateMutationVariables>;
export const SendContactFormDocument = gql`
    mutation SendContactForm($input: ContactFormInput!) {
  sendContactForm(input: $input) {
    success
  }
}
    `;
export type SendContactFormMutationFn = Apollo.MutationFunction<SendContactFormMutation, SendContactFormMutationVariables>;

/**
 * __useSendContactFormMutation__
 *
 * To run a mutation, you first call `useSendContactFormMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendContactFormMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendContactFormMutation, { data, loading, error }] = useSendContactFormMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendContactFormMutation(baseOptions?: Apollo.MutationHookOptions<SendContactFormMutation, SendContactFormMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendContactFormMutation, SendContactFormMutationVariables>(SendContactFormDocument, options);
      }
export type SendContactFormMutationHookResult = ReturnType<typeof useSendContactFormMutation>;
export type SendContactFormMutationResult = Apollo.MutationResult<SendContactFormMutation>;
export type SendContactFormMutationOptions = Apollo.BaseMutationOptions<SendContactFormMutation, SendContactFormMutationVariables>;
export const SetApproveBookDocument = gql`
    mutation SetApproveBook($approved: Boolean!, $id: ID!) {
  setApproveBook(approved: $approved, id: $id) {
    approved
    authors {
      createdAt
      id
      image {
        contentType
        createdAt
        filename
        height
        id
        originalName
        sizeInBytes
        uri
        width
      }
      name
      updatedAt
    }
    bookUrl
    categories
    createdAt
    description
    format
    id
    image {
      contentType
      createdAt
      filename
      height
      id
      originalName
      sizeInBytes
      uri
      width
    }
    isbn
    language
    numberOfPages
    price
    publisher {
      address
      city
      country
      createdAt
      deletedAt
      email
      id
      image {
        contentType
        createdAt
        filename
        height
        id
        originalName
        sizeInBytes
        uri
        width
      }
      name
      organisationNumber
      phoneNumber
      postalCode
      updatedAt
    }
    releaseYear
    subjects
    title
    tracking {
      bookmarkedAt
      createdAt
      currentPlacementEpub
      currentPlacementPdf
      favourite
      finishedAt
      id
      readAtLeastOneMin
      totalDuration
      updatedAt
    }
    updatedAt
    version
  }
}
    `;
export type SetApproveBookMutationFn = Apollo.MutationFunction<SetApproveBookMutation, SetApproveBookMutationVariables>;

/**
 * __useSetApproveBookMutation__
 *
 * To run a mutation, you first call `useSetApproveBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetApproveBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setApproveBookMutation, { data, loading, error }] = useSetApproveBookMutation({
 *   variables: {
 *      approved: // value for 'approved'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSetApproveBookMutation(baseOptions?: Apollo.MutationHookOptions<SetApproveBookMutation, SetApproveBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetApproveBookMutation, SetApproveBookMutationVariables>(SetApproveBookDocument, options);
      }
export type SetApproveBookMutationHookResult = ReturnType<typeof useSetApproveBookMutation>;
export type SetApproveBookMutationResult = Apollo.MutationResult<SetApproveBookMutation>;
export type SetApproveBookMutationOptions = Apollo.BaseMutationOptions<SetApproveBookMutation, SetApproveBookMutationVariables>;
export const SetFavouriteDocument = gql`
    mutation SetFavourite($favourite: Boolean!, $id: ID!) {
  setFavourite(favourite: $favourite, id: $id) {
    bookmarkedAt
    createdAt
    currentPlacementEpub
    currentPlacementPdf
    favourite
    finishedAt
    id
    readAtLeastOneMin
    totalDuration
    updatedAt
  }
}
    `;
export type SetFavouriteMutationFn = Apollo.MutationFunction<SetFavouriteMutation, SetFavouriteMutationVariables>;

/**
 * __useSetFavouriteMutation__
 *
 * To run a mutation, you first call `useSetFavouriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetFavouriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setFavouriteMutation, { data, loading, error }] = useSetFavouriteMutation({
 *   variables: {
 *      favourite: // value for 'favourite'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSetFavouriteMutation(baseOptions?: Apollo.MutationHookOptions<SetFavouriteMutation, SetFavouriteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetFavouriteMutation, SetFavouriteMutationVariables>(SetFavouriteDocument, options);
      }
export type SetFavouriteMutationHookResult = ReturnType<typeof useSetFavouriteMutation>;
export type SetFavouriteMutationResult = Apollo.MutationResult<SetFavouriteMutation>;
export type SetFavouriteMutationOptions = Apollo.BaseMutationOptions<SetFavouriteMutation, SetFavouriteMutationVariables>;
export const TrackDocument = gql`
    mutation Track($id: ID!, $startSession: Boolean!) {
  track(id: $id, startSession: $startSession) {
    bookmarkedAt
    createdAt
    currentPlacementEpub
    currentPlacementPdf
    favourite
    finishedAt
    id
    readAtLeastOneMin
    totalDuration
    updatedAt
  }
}
    `;
export type TrackMutationFn = Apollo.MutationFunction<TrackMutation, TrackMutationVariables>;

/**
 * __useTrackMutation__
 *
 * To run a mutation, you first call `useTrackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTrackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [trackMutation, { data, loading, error }] = useTrackMutation({
 *   variables: {
 *      id: // value for 'id'
 *      startSession: // value for 'startSession'
 *   },
 * });
 */
export function useTrackMutation(baseOptions?: Apollo.MutationHookOptions<TrackMutation, TrackMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TrackMutation, TrackMutationVariables>(TrackDocument, options);
      }
export type TrackMutationHookResult = ReturnType<typeof useTrackMutation>;
export type TrackMutationResult = Apollo.MutationResult<TrackMutation>;
export type TrackMutationOptions = Apollo.BaseMutationOptions<TrackMutation, TrackMutationVariables>;
export const UnregisterNewsletterDocument = gql`
    mutation UnregisterNewsletter($email: String!) {
  unregisterNewsletter(email: $email) {
    success
  }
}
    `;
export type UnregisterNewsletterMutationFn = Apollo.MutationFunction<UnregisterNewsletterMutation, UnregisterNewsletterMutationVariables>;

/**
 * __useUnregisterNewsletterMutation__
 *
 * To run a mutation, you first call `useUnregisterNewsletterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnregisterNewsletterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unregisterNewsletterMutation, { data, loading, error }] = useUnregisterNewsletterMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useUnregisterNewsletterMutation(baseOptions?: Apollo.MutationHookOptions<UnregisterNewsletterMutation, UnregisterNewsletterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnregisterNewsletterMutation, UnregisterNewsletterMutationVariables>(UnregisterNewsletterDocument, options);
      }
export type UnregisterNewsletterMutationHookResult = ReturnType<typeof useUnregisterNewsletterMutation>;
export type UnregisterNewsletterMutationResult = Apollo.MutationResult<UnregisterNewsletterMutation>;
export type UnregisterNewsletterMutationOptions = Apollo.BaseMutationOptions<UnregisterNewsletterMutation, UnregisterNewsletterMutationVariables>;
export const UpdateAuthorDocument = gql`
    mutation UpdateAuthor($id: ID!, $input: AuthorInput) {
  updateAuthor(id: $id, input: $input) {
    createdAt
    id
    image {
      contentType
      createdAt
      filename
      height
      id
      originalName
      sizeInBytes
      uri
      width
    }
    name
    updatedAt
  }
}
    `;
export type UpdateAuthorMutationFn = Apollo.MutationFunction<UpdateAuthorMutation, UpdateAuthorMutationVariables>;

/**
 * __useUpdateAuthorMutation__
 *
 * To run a mutation, you first call `useUpdateAuthorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAuthorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAuthorMutation, { data, loading, error }] = useUpdateAuthorMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAuthorMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAuthorMutation, UpdateAuthorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAuthorMutation, UpdateAuthorMutationVariables>(UpdateAuthorDocument, options);
      }
export type UpdateAuthorMutationHookResult = ReturnType<typeof useUpdateAuthorMutation>;
export type UpdateAuthorMutationResult = Apollo.MutationResult<UpdateAuthorMutation>;
export type UpdateAuthorMutationOptions = Apollo.BaseMutationOptions<UpdateAuthorMutation, UpdateAuthorMutationVariables>;
export const UpdateBookDocument = gql`
    mutation UpdateBook($id: ID!, $input: UpdateBookInput!) {
  updateBook(id: $id, input: $input) {
    approved
    authors {
      createdAt
      id
      image {
        contentType
        createdAt
        filename
        height
        id
        originalName
        sizeInBytes
        uri
        width
      }
      name
      updatedAt
    }
    bookUrl
    categories
    createdAt
    description
    format
    id
    image {
      contentType
      createdAt
      filename
      height
      id
      originalName
      sizeInBytes
      uri
      width
    }
    isbn
    language
    numberOfPages
    price
    publisher {
      address
      city
      country
      createdAt
      deletedAt
      email
      id
      image {
        contentType
        createdAt
        filename
        height
        id
        originalName
        sizeInBytes
        uri
        width
      }
      name
      organisationNumber
      phoneNumber
      postalCode
      updatedAt
    }
    releaseYear
    subjects
    title
    tracking {
      bookmarkedAt
      createdAt
      currentPlacementEpub
      currentPlacementPdf
      favourite
      finishedAt
      id
      readAtLeastOneMin
      totalDuration
      updatedAt
    }
    updatedAt
    version
  }
}
    `;
export type UpdateBookMutationFn = Apollo.MutationFunction<UpdateBookMutation, UpdateBookMutationVariables>;

/**
 * __useUpdateBookMutation__
 *
 * To run a mutation, you first call `useUpdateBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBookMutation, { data, loading, error }] = useUpdateBookMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBookMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBookMutation, UpdateBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBookMutation, UpdateBookMutationVariables>(UpdateBookDocument, options);
      }
export type UpdateBookMutationHookResult = ReturnType<typeof useUpdateBookMutation>;
export type UpdateBookMutationResult = Apollo.MutationResult<UpdateBookMutation>;
export type UpdateBookMutationOptions = Apollo.BaseMutationOptions<UpdateBookMutation, UpdateBookMutationVariables>;
export const UpdateBookmarkDocument = gql`
    mutation UpdateBookmark($id: ID!, $input: UpdateBookmarkInput!) {
  updateBookmark(id: $id, input: $input) {
    bookId
    createdAt
    description
    epubPage
    id
    pdfPage
    title
    updatedAt
    userId
  }
}
    `;
export type UpdateBookmarkMutationFn = Apollo.MutationFunction<UpdateBookmarkMutation, UpdateBookmarkMutationVariables>;

/**
 * __useUpdateBookmarkMutation__
 *
 * To run a mutation, you first call `useUpdateBookmarkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBookmarkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBookmarkMutation, { data, loading, error }] = useUpdateBookmarkMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBookmarkMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBookmarkMutation, UpdateBookmarkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBookmarkMutation, UpdateBookmarkMutationVariables>(UpdateBookmarkDocument, options);
      }
export type UpdateBookmarkMutationHookResult = ReturnType<typeof useUpdateBookmarkMutation>;
export type UpdateBookmarkMutationResult = Apollo.MutationResult<UpdateBookmarkMutation>;
export type UpdateBookmarkMutationOptions = Apollo.BaseMutationOptions<UpdateBookmarkMutation, UpdateBookmarkMutationVariables>;
export const UpdateHighlightDocument = gql`
    mutation UpdateHighlight($id: ID!, $input: UpdateHighlightInput!) {
  updateHighlight(id: $id, input: $input) {
    bookId
    createdAt
    epubPage
    highlight
    id
    pdfPage
    updatedAt
    userId
  }
}
    `;
export type UpdateHighlightMutationFn = Apollo.MutationFunction<UpdateHighlightMutation, UpdateHighlightMutationVariables>;

/**
 * __useUpdateHighlightMutation__
 *
 * To run a mutation, you first call `useUpdateHighlightMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateHighlightMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateHighlightMutation, { data, loading, error }] = useUpdateHighlightMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateHighlightMutation(baseOptions?: Apollo.MutationHookOptions<UpdateHighlightMutation, UpdateHighlightMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateHighlightMutation, UpdateHighlightMutationVariables>(UpdateHighlightDocument, options);
      }
export type UpdateHighlightMutationHookResult = ReturnType<typeof useUpdateHighlightMutation>;
export type UpdateHighlightMutationResult = Apollo.MutationResult<UpdateHighlightMutation>;
export type UpdateHighlightMutationOptions = Apollo.BaseMutationOptions<UpdateHighlightMutation, UpdateHighlightMutationVariables>;
export const UpdatePlacementDocument = gql`
    mutation UpdatePlacement($currentPlacementEpub: String, $currentPlacementPdf: Int, $id: ID!) {
  updatePlacement(
    currentPlacementEpub: $currentPlacementEpub
    currentPlacementPdf: $currentPlacementPdf
    id: $id
  ) {
    bookmarkedAt
    createdAt
    currentPlacementEpub
    currentPlacementPdf
    favourite
    finishedAt
    id
    readAtLeastOneMin
    totalDuration
    updatedAt
  }
}
    `;
export type UpdatePlacementMutationFn = Apollo.MutationFunction<UpdatePlacementMutation, UpdatePlacementMutationVariables>;

/**
 * __useUpdatePlacementMutation__
 *
 * To run a mutation, you first call `useUpdatePlacementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePlacementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePlacementMutation, { data, loading, error }] = useUpdatePlacementMutation({
 *   variables: {
 *      currentPlacementEpub: // value for 'currentPlacementEpub'
 *      currentPlacementPdf: // value for 'currentPlacementPdf'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdatePlacementMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePlacementMutation, UpdatePlacementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePlacementMutation, UpdatePlacementMutationVariables>(UpdatePlacementDocument, options);
      }
export type UpdatePlacementMutationHookResult = ReturnType<typeof useUpdatePlacementMutation>;
export type UpdatePlacementMutationResult = Apollo.MutationResult<UpdatePlacementMutation>;
export type UpdatePlacementMutationOptions = Apollo.BaseMutationOptions<UpdatePlacementMutation, UpdatePlacementMutationVariables>;
export const UpdatePublisherDocument = gql`
    mutation UpdatePublisher($id: ID!, $input: UpdatePublisherInput!) {
  updatePublisher(id: $id, input: $input) {
    address
    city
    country
    createdAt
    deletedAt
    email
    id
    image {
      contentType
      createdAt
      filename
      height
      id
      originalName
      sizeInBytes
      uri
      width
    }
    name
    organisationNumber
    phoneNumber
    postalCode
    updatedAt
  }
}
    `;
export type UpdatePublisherMutationFn = Apollo.MutationFunction<UpdatePublisherMutation, UpdatePublisherMutationVariables>;

/**
 * __useUpdatePublisherMutation__
 *
 * To run a mutation, you first call `useUpdatePublisherMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePublisherMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePublisherMutation, { data, loading, error }] = useUpdatePublisherMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePublisherMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePublisherMutation, UpdatePublisherMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePublisherMutation, UpdatePublisherMutationVariables>(UpdatePublisherDocument, options);
      }
export type UpdatePublisherMutationHookResult = ReturnType<typeof useUpdatePublisherMutation>;
export type UpdatePublisherMutationResult = Apollo.MutationResult<UpdatePublisherMutation>;
export type UpdatePublisherMutationOptions = Apollo.BaseMutationOptions<UpdatePublisherMutation, UpdatePublisherMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: ID!, $input: UpdateUserInput) {
  updateUser(id: $id, input: $input) {
    blocked
    createdAt
    deletedAt
    email
    emailVerified
    firstName
    id
    image {
      contentType
      createdAt
      filename
      height
      id
      originalName
      sizeInBytes
      uri
      width
    }
    joinReason {
      id
      occupation
      school
      subject
    }
    language
    lastName
    mobileNumber
    newsletter
    role
    signupReason
    subscription {
      PaidAt
      amount
      cancelAtPeriodEnd
      createdAt
      currency
      currentPeriodEnd
      customerId
      id
      interval
      plan
      planBillingInterval
      status
      trialUntil
      updatedAt
    }
    updatedAt
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const UserChangePasswordDocument = gql`
    mutation UserChangePassword($input: UserChangePasswordInput!) {
  userChangePassword(input: $input) {
    success
  }
}
    `;
export type UserChangePasswordMutationFn = Apollo.MutationFunction<UserChangePasswordMutation, UserChangePasswordMutationVariables>;

/**
 * __useUserChangePasswordMutation__
 *
 * To run a mutation, you first call `useUserChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userChangePasswordMutation, { data, loading, error }] = useUserChangePasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<UserChangePasswordMutation, UserChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserChangePasswordMutation, UserChangePasswordMutationVariables>(UserChangePasswordDocument, options);
      }
export type UserChangePasswordMutationHookResult = ReturnType<typeof useUserChangePasswordMutation>;
export type UserChangePasswordMutationResult = Apollo.MutationResult<UserChangePasswordMutation>;
export type UserChangePasswordMutationOptions = Apollo.BaseMutationOptions<UserChangePasswordMutation, UserChangePasswordMutationVariables>;
export const VerifyEmailDocument = gql`
    mutation VerifyEmail($email: String!, $nonce: String!) {
  verifyEmail(email: $email, nonce: $nonce) {
    blocked
    createdAt
    deletedAt
    email
    emailVerified
    firstName
    id
    image {
      contentType
      createdAt
      filename
      height
      id
      originalName
      sizeInBytes
      uri
      width
    }
    joinReason {
      id
      occupation
      school
      subject
    }
    language
    lastName
    mobileNumber
    newsletter
    role
    signupReason
    subscription {
      PaidAt
      amount
      cancelAtPeriodEnd
      createdAt
      currency
      currentPeriodEnd
      customerId
      id
      interval
      plan
      planBillingInterval
      status
      trialUntil
      updatedAt
    }
    updatedAt
  }
}
    `;
export type VerifyEmailMutationFn = Apollo.MutationFunction<VerifyEmailMutation, VerifyEmailMutationVariables>;

/**
 * __useVerifyEmailMutation__
 *
 * To run a mutation, you first call `useVerifyEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyEmailMutation, { data, loading, error }] = useVerifyEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *      nonce: // value for 'nonce'
 *   },
 * });
 */
export function useVerifyEmailMutation(baseOptions?: Apollo.MutationHookOptions<VerifyEmailMutation, VerifyEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyEmailMutation, VerifyEmailMutationVariables>(VerifyEmailDocument, options);
      }
export type VerifyEmailMutationHookResult = ReturnType<typeof useVerifyEmailMutation>;
export type VerifyEmailMutationResult = Apollo.MutationResult<VerifyEmailMutation>;
export type VerifyEmailMutationOptions = Apollo.BaseMutationOptions<VerifyEmailMutation, VerifyEmailMutationVariables>;