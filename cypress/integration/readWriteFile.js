/// <reference types="Cypress"/>

describe("Login feature Test", () => {

     it("Read and Write a file", () => {

        cy.visit("cypress/index.html");
        cy.readFile('example.txt');
        cy.writeFile('example.txt', 'Cypress is the best')
        })
    })

