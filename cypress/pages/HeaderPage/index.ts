import { elements as el } from "./elements";

class HeaderPage {

    public toSummarySection(): void {
        cy.get(el.summaryLink).click();
        cy.get(el.summarySectionTitle).isInViewport();
        cy.get(el.homeSectionTitle).isNotInViewport();
    }

    public toMapSection(): void {
        cy.get(el.mapLink).click();
        cy.get(el.mapSectionTitle).isInViewport();
        cy.get(el.summarySectionTitle).isNotInViewport();
    }

    public toAiBrSection(): void {
        cy.get(el.aiBrLink).click();
        cy.get(el.aiBrSection).isInViewport();
        cy.get(el.mapSectionTitle).isNotInViewport();
    }
};

export default HeaderPage;