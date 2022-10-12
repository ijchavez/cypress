/// <reference types="cypress" />

const nameBoard = 'board created with API';
beforeEach(() => {

    cy.request({
      method: 'POST',
      url: '/api/reset'
    })
  
  });
  
  it('Sending requests', () => {
  
    cy
      .visit('/')
  
  });
  it('Create a board from API .request() command', () => {
    cy
      .request({
        method: 'POST',
        url: '/api/boards',
        body:{
            name: nameBoard

        }
        
      })
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
    
    cy.get('[data-cy="board-title"]').invoke('val')
      .should("eq", nameBoard)

  });
/*
To get the text of an element invoke('text')
To get the value of an inputbox invoke('val')
*/