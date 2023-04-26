/// <reference types="cypress" />
import '@cypress/code-coverage/support';
import { waitFor } from '@testing-library/react';

describe('form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/form');
  });
  it('show form', () => {
    cy.url().should('include', '/form');
    cy.contains('Create card');
  });
  it('show error on invalid form submit', () => {
    cy.contains('Form');
    cy.scrollTo('bottom');
    // cy.get('input[placeholder="your name"]').type('test');
    // cy.get('input[placeholder="your name"]').type('{enter}');
    cy.contains('Create card').click();
    cy.contains('invalid data');
  });
});
