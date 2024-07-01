/// <reference types= "cypress"/>

const user_data = require ('../../fixtures/user_Dados.json')

export default {
    digitar_Campos(){

    cy.get('#field-customerName')
        .type(user_data.name)
    cy.get('#field-contactLastName')
        .click()
        .type(user_data.lastName)
    cy.get('#field-contactFirstName')
        .click()
        .type(user_data.firstName)
    cy.get('#field-phone')
        .click()
        .type(user_data.fone)
    cy.get('#field-addressLine1')
        .click()
        .type(user_data.addressLine1)
    cy.get('#field-addressLine2')
        .click()
        .type(user_data.addressLine2)
    cy.get('#field-city')
        .click()
        .type(user_data.city)
    cy.get('#field-state')
        .click()
        .type(user_data.state)
    cy.get('#field-postalCode')
        .click()
        .type(user_data.postalCode)
    cy.get('#field-country')
        .click()
        .type(user_data.country)
    cy.get('#field_salesRepEmployeeNumber_chosen')
        .type('Bow{enter}')
    cy.get('#field-creditLimit')
        .click()
        .type(user_data.creditLimit)
    cy.get('#field-deleted')
        .click()
        .type(user_data.deleted)

    }   
}