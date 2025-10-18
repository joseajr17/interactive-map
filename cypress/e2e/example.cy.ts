describe("HomePage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Deve redirecionar para a seção de Resumo com sucesso", () => {
    cy.get('[data-test="summary-link"]').click();
    cy.get('[data-test="summary-section-title"]').isInViewport();
    cy.get('[data-test="home-section-title"]').isNotInViewport();
  });
});
