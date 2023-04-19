/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    getSelector(value: string): Chainable<any>;
    findSelector(value: string): Chainable<any>;
  }
}
