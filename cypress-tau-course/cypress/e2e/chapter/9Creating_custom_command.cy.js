/// <reference types="cypress" />

beforeEach(() => {
/*
    cy.request({
      method: 'POST',
      url: '/api/reset'
    })
*/
});
it('Custom command', () => {
  cy
    .visit('/');

  cy
    .addBoard('new board');

});
it.only('Custom command chaining', () => {
  cy
    .visit('/board/35983900455');

  cy
    .take('list')
    .eq(0)
    .take('task')

});
