/// <reference types="Cypress"/>

describe("Login feature Test", () => {

    beforeEach(() => {
        cy.fixture('user').then(user => {

            user.email = 'hatem@gmail.com'
        }).as('user')
    })

    it("Login feature Test", () => {

        cy.visit("cypress/index.html");
        cy.get('@user').then(user => {
            cy.log(user)
        })
    })

 })


