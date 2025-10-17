Cypress.Commands.add('isInViewport', { prevSubject: true }, (subject) => {
  const window = cy.state('window');
  const bottom = window.innerHeight;
  const right = window.innerWidth;
  const rect = subject[0].getBoundingClientRect();

  expect(rect.top).to.be.within(0, bottom);
  expect(rect.bottom).to.be.within(0, bottom);
  expect(rect.left).to.be.within(0, right);
  expect(rect.right).to.be.within(0, right);

  return subject;
});

Cypress.Commands.add('isNotInViewport', { prevSubject: true }, (subject) => {
  const window = cy.state('window');
  const bottom = window.innerHeight;
  const rect = subject[0].getBoundingClientRect();

  // Verifica se o elemento está completamente acima ou completamente abaixo da viewport
  const isAbove = rect.bottom < 0;
  const isBelow = rect.top > bottom;

  expect(isAbove || isBelow).to.be.true;
  
  return subject;
});