/// <reference types="cypress" />
import loginPage from "../../../pom/test login/test_login_pom.cy";

describe('Login Test in Cypress', () => {
    it.only('login with valid credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'),
        loginPage.inputUsername().type('Admin');
        loginPage.inputPassword().type('admin123');
        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('actionSumary');
        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/shortcuts').as('Shortcuts');
        loginPage.buttonLogin().click();
        cy.wait('@actionSumary');
        cy.wait('@Shortcuts');
        cy.get('img[alt="client brand banner"]')
          .should('be.visible')
          .log('Login is succesfull')
     })
     it.only('Login with invalid credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'),
        loginPage.inputUsername().type('Admin123');
        loginPage.inputPassword().type('admin');
        loginPage.buttonLogin().click();
        cy.get('[role="alert"]')

    })
    it.only('Login with invalid credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'),
        loginPage.inputUsername().type('Admin123');
        loginPage.inputPassword();
        loginPage.buttonLogin().click();
        cy.get('span').contains('Required').should('have.text','Required');

    })
})
