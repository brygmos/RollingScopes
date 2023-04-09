import { setupServer } from 'msw/node';
import { expect, it, Mock } from 'vitest';
import { handlers } from '../mocks/handlers';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Main from './Main';
import Api from '../../API';

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
  it('correctly get data', async () => {
    render(<Main />);
    const response = await Api.getAllCharacters();
    const data = await response.json();
    expect(data.results[0].id).toEqual(20);
    expect(data.results[0].name).toEqual('Ants in my Eyes Johnson');
    screen.debug();
  });
});
