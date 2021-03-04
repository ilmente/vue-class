/// <reference types="Cypress" />

describe('Sign Up page', () => {
    beforeEach(() => {
        cy.viewport('macbook-13');
        cy.visit('/code/05');
    });

    const login = () => {
        cy.get('[data-qa-username]').type('user123');
        cy.get('[data-qa-password]').type('123');
        cy.get('[data-qa-submit]').click();
        cy.get('[data-qa-email-empty]').should('have.length', 1);
    }

    it('sign in successfull', () => {
        login();
    });

    it('open first spam mail and change it to read', () => {
        login();
        cy.get('[data-qa-spam-only-button]').click();
        cy.get('[data-qa-email-link]:first').click({ force: true });
        cy.get('[data-qa-status-dropdown-value]').contains('Spam')
        cy.get('[data-qa-status-dropdown-button]').click({ force: true });
        cy.get('[data-qa-status-dropdown-option]:nth(1)').click({ force: true });
        cy.get('[data-qa-status-dropdown-value]', { timeout: 6000 }).contains('Read');
        cy.get('[data-qa-notification].is-success').should('be.visible');
    });
});
