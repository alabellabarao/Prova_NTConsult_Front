/// <reference types= "cypress"/>

export default {
    salvar_Mensagem(){

cy.get('#form-button-save')
    .click();
cy.wait(2000);  // Espera 2 segundos para o texto ser atualizado
cy.contains('Your data has been successfully stored into the database. Edit Customer or Go back to list')
    .should('be.visible')
    }
}