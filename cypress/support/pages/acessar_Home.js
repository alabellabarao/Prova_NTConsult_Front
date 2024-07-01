/// <reference types= "cypress"/>

export default {
    acessar_Home(){
        cy.visit('/')
            .get('.table-label')
        cy.get('.header-tools')
            .should('be.visible')
        cy.get('.switch-version')
            .should('be.visible')
            .select('Bootstrap V4 Theme')
            .get('#switch-version-select')
            .should('be.visible')


    }
}


