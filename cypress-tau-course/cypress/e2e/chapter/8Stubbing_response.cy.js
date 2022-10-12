/// <reference types="cypress" />

beforeEach(() => {

    //cy.request({
      //method: 'POST',
      //url: '/api/reset'
    //})

});
it('Stubbing response empty body', () => {
    cy
      .intercept({
        method: 'GET',
        url: '/api/boards'
      }, {
        body:[]

      }).as('boardList')
  
    cy
      .visit('/');
    
  
  });
it('Stubbing response with fixture', () => {
    cy
      .intercept({
        method: 'GET',
        url: '/api/boards'
      }, {
        fixture: 'threeBoards'
        
      }).as('boardList')

    cy
      .visit('/');
  
});
it('Stubbing response with network error', () => {
  cy
    .intercept({
      method: 'POST',
      url: '/api/boards'
    }, {
      forceNetworkError: true
      
    }).as('createBoard')

  cy
    .visit('/');

  cy
    .get('[data-cy=create-board]')
    .click()

  cy
    .get('[data-cy=new-board-input]')
    .type('new board {enter}')

  cy
    .get('#errorMessage')
    .should('be.visible')

});
it.only('Stubbing response with dinamic function', () => {
  cy
    .intercept({
      method: 'GET',
      url: '/api/boards'

    }, (req) =>{
      req.reply((res) => {
        res.body[0].starred = true;

      })

    }).as('boardList')

  cy
    .visit('/');
  
    
  cy.get('[data-id="board_10984028622"] > .board_title')
    .invoke('text')
    .then((text) => {
      cy.get(':nth-child(2) > .board_item > .board_title')
        .invoke('text')
        .should("eq", text);

  })

});