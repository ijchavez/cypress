/// <reference types="cypress" />

import { TodoPage } from './page-objects/todo-page';
const TODO_MVC_URL = "https://todomvc-app-for-testing.surge.sh/";

describe("TODO actions", () => {
  const todoPage = new TodoPage();
  beforeEach(() => {
    todoPage.navigate(TODO_MVC_URL);
    todoPage.addTodo('.new-todo', "Clean room");

  })
  it('should add a new todo to the list', () =>{
    todoPage.validateExpected('label', 'have.text', 'Clean room');
    todoPage.validateBool('.toggle', "not.to.be.checked");

  
  });
  it('should mark todo as completed', () =>{
    todoPage.clickElement('.toggle');
    todoPage.validateCss('label', "have.css", "text-decoration-line", "line-through");
     
  });
  it('should clear completed todos', () =>{
    todoPage.clickElement('.toggle');
    todoPage.clickElement('.clear-completed');

    todoPage.validateExpected(".todo-list", "not.have.descendants", "li");

  });

})
