Cypress.Commands.add(
  'findSelector',
  {
    prevSubject: true
  },
  (subject, method) => {
    const findSelector = cy.wrap(subject).find(`[data-cy="${method}"]`);
    return findSelector;
  }
);
