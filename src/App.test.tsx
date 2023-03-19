import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { App } from './App';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  it('renders searchbar', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText(/search.../i)).toBeTruthy();
  });
  it('renders about page', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading')).toHaveTextContent(/about us/i);
  });
  it('save search in LS after changing page and getting back', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const bar = screen.getByPlaceholderText(/search.../i);
    const about = screen.getByText('About');
    const main = screen.getByText('Main');

    fireEvent.change(bar, { target: { value: 'qwerty' } });
    fireEvent.click(about);
    expect(screen.getByRole('heading')).toHaveTextContent('About us');
    fireEvent.click(main);

    expect(screen.getByPlaceholderText(/search.../i)).toHaveValue('qwerty');
  });
});
