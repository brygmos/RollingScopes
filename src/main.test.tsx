import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { App } from './App';
import { MemoryRouter } from 'react-router-dom';

describe('main', () => {
  it('Renders main page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByPlaceholderText(/search.../i)).toBeTruthy();
  });
});
