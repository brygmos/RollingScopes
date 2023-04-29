/// <reference types="cypress" />
import '@cypress/code-coverage/support';

describe('about page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/about');
  });
  it('show about page', () => {
    cy.url().should('include', '/about');
    cy.contains('About us');
  });
});
