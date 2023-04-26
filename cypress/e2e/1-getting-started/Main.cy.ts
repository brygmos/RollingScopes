/// <reference types="cypress" />
import '@cypress/code-coverage/support';
import { waitFor } from '@testing-library/react';

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('render control elements', () => {
    cy.contains('Search...');
    cy.contains('Main');
    cy.contains('About');
    cy.contains('Form');
  });
  it('renders init cards', () => {
    // cy.get('.todo-list li').should('have.length', 2);
    cy.contains('Rick Sanchez');
    cy.contains('Morty Smith');
  });
  it('show 404 error', () => {
    cy.visit('http://localhost:3000/bgbgbg');
    cy.contains('Error 404: not found');
  });
  it('show full card', () => {
    cy.contains('Rick Sanchez').click();
    cy.on('window:load', () => {
      cy.contains('Citadel of Ricks');
    });
  });
  it('navigate to about', () => {
    cy.visit('http://localhost:3000/about');
    cy.url().should('include', '/about');
    cy.contains('About us');
  });
  it('navigate to formpage', () => {
    cy.visit('http://localhost:3000/form');
    cy.url().should('include', '/form');
    cy.contains('Create card');
  });
  it('search cards', () => {
    cy.get('input[placeholder="Search..."]').type('pibble').type('{enter}');
    cy.contains('Shrimply Pibbles', { timeout: 10000 });
  });
});
