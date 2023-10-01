import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { App } from './App';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { fetch, Headers, Request, Response } from 'cross-fetch';
import { setupServer } from 'msw/node';
import { handlers } from './mocks/handlers';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

export const server = setupServer(...handlers);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('main', () => {
  it('Renders main page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByPlaceholderText(/search.../i)).toBeTruthy();
  });
});
