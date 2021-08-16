/// <reference types="Cypress"/>

describe("Login feature Test", () => {


    it("should visit the login page correctly", () => {

        cy.visit("cypress/index.html");
        cy.get('[name="courses"]').select('wdio').should('contain', 'wdio');
        cy.get('[type="checkbox"]').check('Fries').should('be.checked');
    })

 })


