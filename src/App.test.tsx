import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { fetch, Headers, Request, Response } from 'cross-fetch';
import { setupServer } from 'msw/node';
import { handlers } from './mocks/handlers';
import { App } from './App';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

export const server = setupServer(...handlers);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

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
  it('save search in input after changing page and getting back', () => {
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
