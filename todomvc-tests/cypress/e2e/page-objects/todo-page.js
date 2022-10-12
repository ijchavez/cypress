export class TodoPage{
    navigate(url){
        cy.visit(url);

    };
    addTodo(element, todoText){
        cy.get(element).type(todoText +  "{enter}");
        
    }
    validateExpected(element, whatTo, expected){
        cy.get(element).should(whatTo, expected);

    }
    validateBool(element, whatTo){
        cy.get(element).should(whatTo);

    }
    validateCss(element, whatTo, property, value){
        cy.get(element).should(whatTo, property, value);

    }
    clickElement(element){
        cy.get(element).click();

    }
    clickElementContains(element){
        cy.contains(element).click();

    }
}
