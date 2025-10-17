declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Comando personalizado para verificar se um elemento está dentro da viewport.
     * @example cy.get('div').isInViewport();
     */
    isInViewport(): Chainable<Subject>;

    /**
     * Comando personalizado para verificar se um elemento está fora da viewport.
     * @example cy.get('div').isNotInViewport();
     */
    isNotInViewport(): Chainable<Subject>;
  }
}
