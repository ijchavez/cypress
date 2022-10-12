/// <reference types="cypress" />

const BASE_PATH = '/';
const BOARD_PATH = "board/"

beforeEach(() => {
    cy
      .visit(`${BASE_PATH}${BOARD_PATH}84800954344`)

})
it('Chaining commands', () => {
  cy
    .contains('milk')

  cy
    .get('[data-cy=list]')
    .eq(0)
    .contains('milk') 

});