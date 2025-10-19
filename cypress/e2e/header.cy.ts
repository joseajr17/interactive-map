import HeaderPage from "../pages/HeaderPage";

describe("Header", () => {
  const headerPage = new HeaderPage();

  beforeEach(() => {
    cy.visit("/");
  });

  it("Deve redirecionar para a seção de Resumo com sucesso", () => {
    headerPage.toSummarySection();

  });

  it("Deve redirecionar para a seção do Mapa com sucesso", () => {
    headerPage.toMapSection();
  });

  it("Deve redirecionar para a seção da IA no Brasil com sucesso", () => {
    headerPage.toAiBrSection();
  });
});
