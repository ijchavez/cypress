/// <reference types="cypress" />
beforeEach(() => {

    //cy.request({
      //method: 'POST',
      //url: '/api/reset'
    //})
  
  });
it('Intercept requests', () => {
    cy
      .intercept({
        method: 'POST',
        url: '/api/boards'
      }).as('createBoard')
  
    cy
      .visit('/')
  
    cy
      .get('[data-cy=create-board]')
      .click()
  
    cy
      .get('[data-cy=new-board-input]')
      .type('launching a rocket{enter}')
  
    cy
      .wait('@createBoard')
      .then( (board) => {
        expect(board.response.statusCode).to.eq(201)
        expect(board.response.body.name).to.eq('launching a rocket')
        expect(board.response.body.starred).to.eq(false)
        expect(board.state).to.eq("Complete")
      })
  
  });