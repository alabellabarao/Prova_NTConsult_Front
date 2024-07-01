/// <reference types= "cypress"/>

export default {
    clicar_BotaoDelete(){
        cy.get('button.btn.btn-danger.delete-multiple-confirmation-button')
            .contains('Delete')
            .should('be.visible')
            .click()
        cy.contains('Your data has been successfully deleted from the database.', { timeout: 20000 })
            .should('be.visible')
    }
}