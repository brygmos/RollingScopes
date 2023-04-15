import '@testing-library/jest-dom';
import { fetch, Headers, Request, Response } from 'cross-fetch';
import { setupServer } from 'msw/node';
import { handlers } from '../mocks/handlers';
import { renderWithProviders } from '../testUtils';
import RouterWrappedApp from '../App';
import React from 'react';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { it } from 'vitest';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

export const server = setupServer(...handlers);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('App', function () {
  it('shows init results', async () => {
    renderWithProviders(<RouterWrappedApp />);
    await waitFor(() => {
      expect(screen.getByText(/Ants in my Eyes Johnson/i)).toBeInTheDocument();
    });
  });
  it('finds and shows found results', async () => {
    renderWithProviders(<RouterWrappedApp />);
    const input = screen.getByPlaceholderText(/search.../i);
    fireEvent.change(input, { target: { value: 'some value' } });
    fireEvent.click(screen.getByText('Search'));
    await waitFor(() => {
      expect(screen.getByText(/Pibbles Bodyguard/i)).toBeInTheDocument();
    });
  });
  it('shows full card', async () => {
    renderWithProviders(<RouterWrappedApp />);
    const input = screen.getByPlaceholderText(/search.../i);
    fireEvent.change(input, { target: { value: 'fghgfjjg' } });
    fireEvent.click(screen.getByText('Search'));
    await waitFor(() => {
      const card = screen.getByText(/Shrimply Pibbles/i);
      expect(card).toBeInTheDocument();
    });
    fireEvent.click(screen.getByText(/Shrimply Pibbles/i));
    await waitFor(() => {
      const fullCard = screen.getByText(/Human with ants in his eyes/i);
      expect(fullCard).toBeInTheDocument();
    });
  });
});
