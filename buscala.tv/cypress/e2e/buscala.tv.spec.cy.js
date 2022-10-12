/// <reference types="cypress" />

import { TodoPage } from './page-objects/todo-page';
const TODO_MVC_URL = "https://buscala.tv/";
const projectXMovie = "Proyecto X";

describe("buscala.tv tests", () => {
  const todoPage = new TodoPage();
  beforeEach(() => {
    todoPage.navigate(TODO_MVC_URL);
    todoPage.validateExpected(".text-2xl","have.text","| ¿Dónde miro la serie o pelicula?")
    //cy.get("[data-test='search-input']").invoke('attr', 'placeholder').should('have.text', 'Harry Potter 1');

  })
  it('should add a new todo to the list', () =>{
    
    todoPage.addTodo("[data-test='search-input']", projectXMovie);
    todoPage.validateExpected("[data-test='result'] > .text-center","have.text",
                              `Podés ver ${projectXMovie} en Netflix, Apple iTunes, Google Play Movies y Movistar Play`);
    
    cy.get('[data-test="footer"] > .flex').should('have.text', 'Funciona gracias a ');

  });

})
