/// <reference types="cypress" />

const BASE_PATH = '/';
const tokenMap = new Map([['trello_token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImluZm8uZ2VyYXJkby5jaGF2ZXpAZ21haWwuY29tIiwiaWF0IjoxNjY1NDE0OTY0LCJleHAiOjE2NjU0MTg1NjQsInN1YiI6IjEifQ.MR7HWsua67V4ri5NPfDLkV1ACa92HkEnQgOSZerr_0M']]);
beforeEach(() => {
    Cypress.Cookies.preserveOnce('trello-token')
    cy
      .visit(`${BASE_PATH}`)

})
it('Changing DOM with invoke', () => {
  cy.setCookie('trello_token', tokenMap.get('trello_token'));
  cy.reload();

})
it('test #2', () => {


})
it('test #3', () => {

})