import BrazilMapPage from "../pages/BrazilMapPage";
import HeaderPage from "../pages/HeaderPage";

describe('Mapa', () => {
    const headerPage = new HeaderPage();
    const brazilMapPage = new BrazilMapPage();
    beforeEach(() => {
        cy.visit("/");
        headerPage.toMapSection();
    });

    it('Deve renderizar o mapa com sucesso', () => {
        brazilMapPage.verifyBrazilMap();
    });

    it('Não deve permitir o evento de Pan', () => {
        brazilMapPage.verifyBrazilMap();
        brazilMapPage.getMapTransform();
        brazilMapPage.mouseDrag();
        brazilMapPage.verifyTransform();
    });

    it('Não deve permitir o evento de Zoom In', () => {
        brazilMapPage.verifyBrazilMap();
        brazilMapPage.getMapTransform();
        brazilMapPage.zoom(-300);
        brazilMapPage.verifyTransform();
    });

    it('Não deve permitir o Zoom Out', () => {
        brazilMapPage.verifyBrazilMap();
        brazilMapPage.getMapTransform();
        brazilMapPage.zoom(300);
        brazilMapPage.verifyTransform();
    });
})