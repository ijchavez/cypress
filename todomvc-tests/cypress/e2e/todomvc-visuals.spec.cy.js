/// <reference types="cypress" />

import { TodoPage } from './page-objects/todo-page';
const TODO_MVC_URL = "https://todomvc-app-for-testing.surge.sh/";

describe("Visual validation", () =>{
    const todoPage = new TodoPage();
    before(() => {
      todoPage.navigate(TODO_MVC_URL);
  
    })
    beforeEach(() => {
        cy.eyesOpen({
            appName: "Todo MVC", batchName: "Todo MCV hey!",
            browser: [
                {name: "chrome", width: 1024, height: 768},
                {name: "chrome", width: 800, height: 600},
                {name: "firefox", width: 1024, height: 768},
                {deviceName: "iPhone X"}

            ]
            
        });

    });
    afterEach(() => {
        cy.eyesClose();
        
    });
    it('should look good', () =>{
        cy.eyesCheckWindow("empty todo list");

        todoPage.addTodo('.new-todo', "Clean room");
        todoPage.addTodo('.new-todo', "Learn JS");

        cy.eyesCheckWindow("two todos");

        todoPage.clickElement(':nth-child(1) > .view > .toggle');

        cy.eyesCheckWindow("mark as completed");

      });

});