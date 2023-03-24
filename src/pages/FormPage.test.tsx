import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { App } from '../App';
import { MemoryRouter } from 'react-router-dom';
import FormPage from './FormPage';

describe('FormPage', () => {
  it('renders form', () => {
    render(
      <MemoryRouter initialEntries={['/form']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toBeTruthy();
  });
  it('Title is not empty', () => {
    render(<FormPage />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Form');
  });
});
