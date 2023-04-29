/// <reference types="cypress" />
import '@cypress/code-coverage/support';

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
    cy.contains('Create card').click();
    cy.contains('invalid data');
  });
  it('show success message on valid form submit', () => {
    cy.get('input[placeholder="your name"]').type('FF');
    cy.get('input[placeholder="your surname"]').type('FF');
    cy.get('input[placeholder="title"]').type('FF');
    cy.get('input[placeholder="title"]').type('FF');
    cy.get('input[id="tutor"]').check();
    cy.get('input[type="checkbox"]').check();
    cy.get('input[type="date"]').type('2021-09-30');
    cy.get('select').select('saab');
    cy.get('input[type="file"]').invoke('show').selectFile('cypress/fixtures/test.png');

    cy.contains('Create card').click();

    cy.contains('Card was successfully added');
  });
  it('show hints on invalid data enter', () => {
    cy.contains('Create card').click();
    cy.contains('invalid data');
    cy.contains('Surname is required');
    cy.contains('please choose a cover');
    cy.contains('you need to agree');
  });
});
