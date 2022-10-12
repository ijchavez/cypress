/// <reference types="cypress" />

const BASE_PATH = '/';
const BOARD_PATH = "board/"

beforeEach(() => {
    cy
      .visit(`${BASE_PATH}${BOARD_PATH}84800954344`)

})
it('Changing DOM with invoke, adding a class', () => {
  cy
    .get('[data-cy="task"]')
    .eq(0)
    .invoke('addClass','overDue')

})