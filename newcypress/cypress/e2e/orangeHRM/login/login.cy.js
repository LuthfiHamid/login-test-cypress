/// <reference types="cypress" />

describe('Login Feature', () => {
    it('User Login with valid credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'),
        cy.get('h5').contains('Login').should('have.text','Login');
        cy.get('.orangehrm-login-forgot > .oxd-text')
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('[type="submit"]').click();
        cy.get('h6').contains('Dashboard').should('have.text','Dashboard');
        cy.get('button').contains(' Upgrade').should('have.text',' Upgrade').click()
        cy.get('[placeholder="Search"]').type('Search');
        cy.get('p').contains('Time at Work').should('have.text','Time at Work');
        cy.get('p').contains('My Actions').should('have.text','My Actions');
        cy.get('p').contains('Quick Launch').should('have.text','Quick Launch');
        cy.get('p').contains('Buzz Latest Posts').should('have.text','Buzz Latest Posts');
        cy.get('p').contains('Employees on Leave Today').should('have.text','Employees on Leave Today');
        cy.get('p').contains('Employee Distribution by Sub Unit').should('have.text','Employee Distribution by Sub Unit');
        cy.get('p').contains('Employee Distribution by Location').should('have.text','Employee Distribution by Location');
        




    })
})