/// <reference types="cypress" />
beforeEach(() => {
    cy
      .visit('/');
});
it.only('Running task', () => {
    cy
      .task('setupDb', {
        boards: [{
          name: 'board created with .task()',
          id: 1,
          starred: false,
          user: 0
        }],
        lists: [],
        tasks: [],
        users: []
      })
  
    cy
      .visit('/')
  
});
it('Running task with board created', () => {
    cy
      .addBoard('new board');
    cy
      .task('setupDb')
  
    cy
      .visit('/')
  
});