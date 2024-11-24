/// <reference types="cypress" />

describe('Login Test in Cypress', () => {
    it.only('Login Scenario', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'),
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
        cy.get('img[alt="client brand banner"]')
          .should('be.visible')
          .log('Login is succesfull')

    })
})