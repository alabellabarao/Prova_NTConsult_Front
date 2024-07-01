/// <reference types= "cypress"/>

export default {
    clicar_Delete(){
        cy.get('.text-danger')
        .contains('Delete')
        .should('be.visible')
        .click()

    cy.get('.modal-dialog')
        .should('be.visible')
    }   
}