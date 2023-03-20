import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { App } from '../App';
import { MemoryRouter } from 'react-router-dom';
import AboutUs from './AboutUs';

describe('App', () => {
  it('Renders page', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toBeTruthy();
  });
  it('Title is not empty', () => {
    render(<AboutUs />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('About us');
  });
});
