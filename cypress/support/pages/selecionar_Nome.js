/// <reference types= "cypress"/>

export default {
    selecionar_Nome(){
        cy.get('input[name="customerName"]')
            .click()
            .type('Pedro Bento')
        cy.get('.select-row', { timeout: 10000 })
            .first()
            .click()

    }
}