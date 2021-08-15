const { before, after } = require("cypress/types/lodash");
const { beforeEach } = require("mocha");

describe("Login feature Test", () => {

    before(() => {
        cy.log("Run the server locally");
    })

    after(() => {
        cy.log("kill the server");
    })

    beforeEach(() => {
        cy.log("navigate to login page");
    })

    it("should visit the login page correctly", () => {

        cy.log("website should have the correct url");

    })

    it("should be able to login", () => {

        cy.log("fill the username and the password and login");
        cy.log("should navigate the login page");


    })

 })


