/// <reference types= "cypress"/>

export default {
    adicionar_Cliente(){
        cy.contains('Add Customer') 
            .should('have.attr', 'href', '/v1.x/demo/bootstrap_theme_v4/add') 
            .click();
        //cy.wait(10000);
        cy.url().should('include', 'https://www.grocerycrud.com/v1.x/demo/bootstrap_theme_v4/add');
         
    }
}