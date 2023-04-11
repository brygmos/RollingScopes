import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { App } from './App';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

describe('App', () => {
  it('renders searchbar', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByPlaceholderText(/search.../i)).toBeTruthy();
  });
  it('renders about page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/about']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/about us/i);
  });
  it('save search in LS after changing page and getting back', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    const bar = screen.getByPlaceholderText(/search.../i);
    const about = screen.getByText('About');
    const main = screen.getByText('Main');

    fireEvent.change(bar, { target: { value: 'qwerty' } });
    fireEvent.click(about);
    fireEvent.click(main);

    expect(screen.getByPlaceholderText(/search.../i)).toHaveValue('qwerty');
  });
});
