/**
 * When selecting elements for Cypress you should use data-cy="". When defining
 * and selecting elements you should use this constants file. Try to follow this
 * naming convention:
 *
 * export enum <ComponentName>Selectors {
 *   HEADING = '<component-name>-heading',
 *   PARAGRAPH = '<component-name>-paragraph'
 * }
 *
 * So lets say you have a Button component where you want to select the content
 * and the spinner, that would result in:
 *
 * export enum ButtonSelectors {
 *   CONTENT = 'button-content',
 *   SPINNER = 'button-spinner'
 * }
 */

// TODO: Just for showcase, remove or adapt FormSelectors
export enum HomeSelectors {
  CONTACT_BUTTON = 'home-contact-button',
  CLOSE_BUTTON = 'home-close-button',
  SEARCH_FIELD = 'home-search-field'
}

export enum FAQSelectors {
  CONTACT_BUTTON = 'faq-contact-button'
}

export enum OnePagerSelectors {
  EMAIL_FORM = 'email-form'
}

export enum NotFoundSelectors {
  HOME_BUTTON = 'home-button'
}

export enum LoginSelectors {
  EMAIL = 'login-email-form-email',
  PASSWORD = 'login-email-form-password',
  FORM = 'login-email-form-form',
  ERROR_RESPONSE = 'login-email-form-error'
}

export enum ForgotPasswordSelectors {
  EMAIL = 'forgot-password-email',
  FORM = 'forgot-password-form',
  RESPONSE = 'forgot-password-response'
}

export enum ResetPasswordSelectors {
  PASSWORD = 'reset-password-password',
  CONFIRM_PASSWORD = 'reset-password-confirm-password',
  FORM = 'reset-password-form',
  RESPONSE = 'reset-password-response'
}

export enum UserInfoFormSelectors {
  FORM_BUTTON = 'user-info-form-form-button',
  FIRSTNAME = 'user-info-form-firstname',
  LASTNAME = 'user-info-form-lastname',
  EMAIL = 'user-info-form-email',
  EDIT_BUTTON = 'user-info-edit-button'
}

export enum ChangePasswordFormSelectors {
  OLDPASSWORD = 'change-password-form-oldpassword',
  NEWPASSWORD = 'change-password-form-newpassword',
  CONFIRMPASSWORD = 'change-password-form-confirmpassword',
  SAVE_BUTTON = 'change-password-form-button'
}

export enum UserSettingsSelectors {
  CHANGE_BUTTON = 'user-settings-change-button'
}

export enum HeaderSelectors {
  HOME_BUTTON = 'header-home-button',
  SEARCH_BUTTON = 'header-search-button',
  SEARCH_FIELD = 'header-search-field',
  FORM = 'header-field-form',
  SEARCH_ICON = 'header-search-icon',
  SEARCH_FIELD_DESKTOP = 'header-search-field',
  FREE_TRIAL_BUTTON = 'header-free-trial-button',
  LOGIN_BUTTON = 'heeader-login-button',
  FAVOURITE_BUTTON = 'header-favourite-button',
  BOOKS_BUTTON = 'header-books-button',
  LIBRARY_BUTTON = 'header-library-button',
  REFERRAL_BUTTON = 'header-referral-button'
}

export enum UserMenuSelectors {
  USER_ACCORDION = 'header-user-accordion',
  LOGOUT_BUTTON = 'header-logout-button'
}

export enum BurgerMenuSelectors {
  BURGER_MENU = 'burger-menu-burger-menu',
  LOGOUT_BUTTON = 'burger-menu-logout-button'
}

export enum FooterSelectors {
  COOKIES = 'footer-cookies-link',
  LEGAL = 'footer-legal-link',
  OUR_MISSION = 'footer-our-mission-link',
  CONTACT_US = 'footer-contact-us',
  FAQ = 'footer-faq'
}

export enum FAQItemSelectors {
  FAQ_ITEM = 'faq-item-faq-item',
  ANSWER_SECTION = 'faq-item-answer-section'
}

export enum ContactFormSelectors {
  FORM = 'contact-form-form',
  NAME = 'contact-form-name',
  EMAIL = 'contact-form-email',
  CATEGORY_DROPDOWN = 'contact-form-category-dropdown',
  MESSAGE = 'contact-form-message',
  SUCCESS_RESPONSE = 'contact-form-success-response',
  ERROR_RESPONSE = 'contact-form-error-response'
}

export enum LandingLoggedInSelectors {
  HERO = 'landing-logged-in-hero'
}

export enum ChoosePlanSelectors {
  TITLE = 'choose-plan-title',
  PLAN_BUTTON = 'choose-plan-plan-buttun'
}

export enum SubscriptionSectionSelectors {
  CHOOSE_PLAN_BUTTON = 'subscription-section-choose-plan-button',
  HANDLE_BUTTON = 'subscription-section-handle-button'
}

export enum SearchResultsSelectors {
  SEARCH_FIELD = 'search-results-search-field',
  FORM = 'search-results-field-form',
  BOOKS = 'search-results-books',
  BOOK_ITEM = 'book-item-book-item'
}

export enum MyBooksSelector {
  FAVOURITE = 'my-books-favourite'
}

export enum ButtonsSectionSelectors {
  READ_BUTTON = 'buttons-section-read-button',
  FAVOURITE_BUTTON = 'buttons-section-favourite-button'
}

export enum BookItemSelectors {
  BOOK_ITEM = 'book-item-book-item'
}

export enum BookItemHoveredSelectors {
  INFO_BUTTON = 'book-item-hovered-info-button',
  FAVOURITE_BUTTON = 'book-item-hovered-favourite-button'
}

export enum FooterFormSelectors {
  EMAIL_FORM = 'footer-email-form'
}

export enum SearchBarStickySelectors {
  SEARCH_FIELD = 'search-bar-sticky-search-field'
}

export enum MenuSelectors {
  BOOKS_STATISTICS_LINK = 'menu-books-statistics-link',
  LOGOUT_BUTTON = 'menu-logout-button',
  USERS_LINK = 'menu-users-link',
  BOOKS_LINK = 'menu-books-link',
  MISSED_SEARCHES_LINK = 'menu-missed-searches-link'
}

export enum UsersSelectors {
  TABLE = 'users-table'
}

export enum GdprConsentSelectors {
  Root = 'gdpr-consent-root',
  ACCEPT_BUTTON = 'gdpr-consent-accept-button'
}

export enum TabsSelectors {
  Root = 'tabs-root',
  Label = 'tabs-label',
  Content = 'tabs-content',
  Beside = 'tabs-beside'
}

export enum BoardAccordionSelectors {
  BOARD_ITEM_LABEL = 'board-item-label',
  BOARD_ITEM_CONTENT = 'board-item-content'
}
