Cypress.Commands.add('getSelector', (selector) => {
  return cy.get(`[data-cy="${selector}"]`);
});
