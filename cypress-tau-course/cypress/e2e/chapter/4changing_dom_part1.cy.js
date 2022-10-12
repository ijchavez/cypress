/// <reference types="cypress" />

const BASE_PATH = '/';

beforeEach(() => {
    cy
      .visit(`${BASE_PATH}`)

})
/*
it('Changing DOM with force:true (not recommended)', () => {
    cy
      .get('[data-cy="star"]')
      .click({ force: true })
      .click()
  
})

it('Changing DOM with invoke', () => {
  cy
    .get('[data-cy="star"]')
    .invoke('show')
    .click()

})
*/
it('Changing DOM with invoke', () => {
  cy
    .get('[data-cy="board-item"]')
    .trigger('mouseover')

  cy
    .get('[data-cy="star"]')
    .should('be.visible')
  
  cy
    .get('[data-cy="board-item"]')
    .trigger('mouseout')

  cy
    .get('[data-cy="star"]')
    .should('not.be.visible')

})