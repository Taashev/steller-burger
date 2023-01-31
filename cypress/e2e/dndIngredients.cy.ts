describe('dnd ingredients', () => {
  beforeEach(() => {
    cy.seedAndVisit();
  });

  it('drag the bun into the constructor', () => {
    const dataTransfer = new DataTransfer();
    cy.contains('Краторная булка N-200i').as('bun');
    cy.contains('Выберите булочку').as('constructorBun');
    cy.get('@bun').trigger('dragstart', { dataTransfer });
    cy.get('@constructorBun').trigger('drop', { dataTransfer });
  });

  it('drag the ingredient into the constructor', () => {
    const dataTransfer = new DataTransfer();
    cy.get('[data-testid=constructor-ingredients]').as(
      'constructorIngredients'
    );
    cy.contains('Соус Spicy-X').trigger('dragstart', { dataTransfer });
    cy.get('@constructorIngredients').trigger('drop', { dataTransfer });
    cy.contains('Соус фирменный Space Sauce').trigger('dragstart', {
      dataTransfer,
    });
    cy.get('@constructorIngredients').trigger('drop', { dataTransfer });
  });
});
