import { elements as el } from "./elements";

class BrazilMapPage {
    constructor() { }

    verifyBrazilMap() {
        cy.get(el.brazilMap).should('be.visible');
    }

    getZoomableGroup() {
        return cy.get(el.zoomableGroup);
    }

    getMapTransform() {
        this.getZoomableGroup()
            .invoke('attr', 'transform')
            .as('initialTransform');
    }

    getMapRect() {
        return cy.get(`${el.brazilMap} g rect`);
    }

    mouseDrag() {
        this.getMapRect()
            .trigger('mousedown', { which: 1, force: true }) // Simula o botão esquerdo do mouse sendo pressionado
            .trigger('mousemove', { clientX: 400, clientY: 400 }) // Simula o movimento do mouse até as coordenadas (400, 400) na tela.
            .trigger('mouseup', { force: true }); // Simula o soltar do botão do mouse.
    }

    verifyTransform() {
        cy.get('@initialTransform').then((initialTransform) => {
            this.getZoomableGroup()
                .invoke('attr', 'transform')
                .should((t) => {
                    expect(t).to.not.contain('NaN')
                })
                .should('eq', initialTransform);
        });
    }

    zoom(zoomValue: number) {
        cy.get(el.brazilMap).trigger('wheel', { deltaX: zoomValue });
    }
    
    verifyStatesQuantity(quantity: number) {
        cy.get(`${el.brazilStates} [data-test^="brazil-state-"]`)
            .should('have.length', quantity);
    }

    getState(stateAcronym: string) {
        return cy.get(el.brazilState(stateAcronym));
    }

    verifyStateOpacity(opacityValue: string) {
        this.getState('SP')
            .should('have.css', 'opacity', opacityValue);
    }

    stateMouseHover(stateAcronym: string, triggerType: string) {
        cy.get(el.brazilState(stateAcronym)).trigger(triggerType);
    }

    verifyStateHoverEffect(stateAcronym: string, opacities: { default: string; hover: string }) {
        this.verifyStateOpacity(opacities.default);
        this.stateMouseHover(stateAcronym, 'mouseover');
        this.verifyStateOpacity(opacities.hover);
        this.stateMouseHover(stateAcronym, 'mouseout');
        this.verifyStateOpacity(opacities.default);
    }


};

export default BrazilMapPage;