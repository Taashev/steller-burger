describe('modal', () => {
  beforeEach(() => {
    cy.seedAndVisit();
  });

  it('modal open', () => {
    cy.contains('Краторная булка N-200i').as('bun');
    cy.get('@bun').click();
  });

  it('modal close', () => {
    cy.contains('Краторная булка N-200i').as('bun');
    cy.get('@bun').click();
    cy.get('#modal').as('modal');
    cy.get('@modal').get('.Modal_close__3Iq3N').as('buttonClose');
    cy.get('@buttonClose').click();
  });
});
