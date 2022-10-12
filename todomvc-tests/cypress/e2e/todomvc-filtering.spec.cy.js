/// <reference types="cypress" />

import { TodoPage } from './page-objects/todo-page';
const TODO_MVC_URL = "https://todomvc-app-for-testing.surge.sh/";

describe("TODO filtering", () => {
  const todoPage = new TodoPage();
  beforeEach(() => {
    todoPage.navigate(TODO_MVC_URL);

    todoPage.addTodo('.new-todo', "Clean room");
    todoPage.addTodo('.new-todo', "Learn JS");
    todoPage.addTodo('.new-todo', "Use Cypress");

    todoPage.clickElement(':nth-child(2) > .view > .toggle');

  });
  it("should filter 'Active' todos", () => {
    todoPage.clickElementContains("Active")

    todoPage.validateExpected('.todo-list li', "have.length", 2);

  });
  it("should filter 'Completed' todos", () => {
    todoPage.clickElementContains("Completed")

    todoPage.validateExpected('.todo-list li', "have.length", 1);

  });
  it("should filter 'All' todos", () => {
    todoPage.clickElementContains("All")

    todoPage.validateExpected('.todo-list li', "have.length", 3);
    
  });

})