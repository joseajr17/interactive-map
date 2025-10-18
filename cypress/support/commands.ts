Cypress.Commands.add("isInViewport", { prevSubject: true }, (subject) => {
  cy.window().then((win) => {
    const bottom = win.innerHeight;
    const right = win.innerWidth;
    const rect = subject[0].getBoundingClientRect();

    expect(rect.top).to.be.within(0, bottom);
    expect(rect.bottom).to.be.within(0, bottom);
    expect(rect.left).to.be.within(0, right);
    expect(rect.right).to.be.within(0, right);

    cy.wrap(subject);
  });
  
});

Cypress.Commands.add("isNotInViewport", { prevSubject: true }, (subject) => {
  cy.window().then((win) => {
    const bottom = win.innerHeight;
    const rect = subject[0].getBoundingClientRect();
    const isAbove = rect.bottom < 0;
    const isBelow = rect.top > bottom;

    expect(isAbove || isBelow).to.be.true;

    cy.wrap(subject);
  });
});
