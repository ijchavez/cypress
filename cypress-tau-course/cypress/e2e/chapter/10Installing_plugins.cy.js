/// <reference types="cypress" />

beforeEach(() => {

    cy.request({
      method: 'POST',
      url: '/api/reset'

    })
    cy
    .visit('/');
    cy
      .addBoard('new board');

        cy
      .intercept({
        method: 'GET',
        url: '/api/boards'
      
      })
      .as('getBoard');
    
    cy
    .visit('/')
    
    let id = "";
    cy
      .wait('@getBoard')
      .then( (board) => {
          id = board.response.body[0].id;
          cy
            .request({
              method: 'GET',
              url: '/api/boards/' + id,
              
            })
          cy.visit('board/' + id)

        })
    cy
      .get('[data-cy="add-list"]')
      .type('to do')

    cy
      .get('[data-cy="save"]')
      .click();

    cy
      .get('[data-cy="add-list"]')
      .type('done')

    cy
      .get('[data-cy="save"]')
      .click();

    cy
      .get('[data-cy="new-task"]')
      .eq(1)
      .click();
    
    cy
      .get('[data-cy="task-input"]')
      .eq(1)
      .type('task1');
    
    cy
      .get('[data-cy="add-task"]')
      .eq(1)
      .click()
    
    cy
      .get('[data-cy="new-task"]')
      .eq(1)
      .click();
    cy
      .get('[data-cy="task-input"]')
      .eq(1)
      .type('task2');
    
    cy
      .get('[data-cy="add-task"]')
      .eq(1)
      .click()

});

it('Drag and drop tasks and imgs', () => {
  cy
    .get('[data-cy=task]')
    .eq(0)
    .as('task2')
  
  cy
    .get('[data-cy=task]')
    .eq(1)
    .as('task1')

  cy
    .get('@task2')
    .drag('@task1')
  
  cy
    .get('[data-cy="tasks-list"] > :nth-child(1)')
    .click();

  cy
    .get('.dropzone-custom-content')
    .attachFile('logo.png', {subjectType : 'drag-n-drop'}); 

});
it('Custom command chaining hover', () => {
  cy
    .visit('/')

  cy
    .get('[data-cy="board-item"]')
    .realHover()

});
it.only('Installing applitools plugin', () => {

  cy
    .visit('/');

  cy
    .eyesOpen({
      appName: 'Trello app',
      testName: 'Trying out Applitools plugin',
      browser: { width: 800, height: 600 },
    });

  cy
    .eyesCheckWindow('Board list');

  cy
    .eyesClose();
    
});