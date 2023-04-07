import { setupServer } from 'msw/node';
import { expect, it, Mock } from 'vitest';
import { handlers } from '../mocks/handlers';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Main from './Main';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

global.fetch = vi.fn(() => {
  Promise.resolve({
    json: () => {
      Promise.resolve(handlers);
    },
  });
}) as Mock;

describe('fetch', () => {
  // it('renders mock data', async () => {
  //   render(<Main />);
  //   expect(screen.getByText(/Ants in my Eyes Johnson/i)).toBeInTheDocument();
  //   // await expect(fetch).toHaveBeenCalledTimes(44);
  //   // await expect(screen.getByPlaceholderText(/Search.../i)).toBeInTheDocument();
  //   screen.debug();
  // });

  it('correctly get data', async () => {
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    render(<Main />);
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    expect(data.results[0].id).toEqual(20);
    expect(data.results[0].name).toEqual('Ants in my Eyes Johnson');
    // await expect(screen.findByText(/Ants in my Eyes Johnson/i)).toBeInTheDocument();
    screen.debug();
  });
});
