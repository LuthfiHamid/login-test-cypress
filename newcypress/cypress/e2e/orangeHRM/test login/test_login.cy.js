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
    it.only('Login with invalid credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'),
        cy.get('[name="username"]').type('Admin123');
        cy.get('[name="password"]').type('admin');
        cy.get('button[type="submit"]').click();
        cy.get('[role="alert"]')

    })
    it.only('Login with invalid credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'),
        cy.get('[name="username"]').type('Admin123');
        cy.get('[name="password"]');
        cy.get('button[type="submit"]').click();
        cy.get('span').contains('Required').should('have.text','Required');

    })
})
