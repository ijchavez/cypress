/// <reference types="cypress" />

const BASE_PATH = '/';
const BOARD_PATH = "board/"

beforeEach(() => {
    cy
      .visit(`${BASE_PATH}${BOARD_PATH}84800954344`)

})
it('Multiple assertions with expect', () => {

    cy
      .get('[data-cy=task]')
      .then(item => {
        if (item.length !== 3) {
            throw new Error('Not enough elements!');

        }
        expect(item[0]).to.contain.text('milk');
        expect(item[1]).to.contain.text('bread');

    })
  
})
it('Multiple assertions', () => {

    cy
      .get('[data-cy=task]')
      .eq(0)
      .should('contain.text', 'milk')
  
    cy
      .get('[data-cy=task]')
      .eq(1)
      .should('contain.text', 'bread')
  
})