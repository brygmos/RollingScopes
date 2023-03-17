import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { App } from '../App';
import WrappedApp from '../App';
import { MemoryRouter } from 'react-router-dom';
import NotFound from './NotFound';

describe('App', () => {
  it('Renders not found if path does not exist', () => {
    render(
      <MemoryRouter initialEntries={['/banana']}>
        <App />
      </MemoryRouter>
    );
  });
  it('Header is not empty', () => {
    //ARRANGE
    render(<NotFound />);
    //ACT
    //expect
    expect(screen.getByRole('heading')).toHaveTextContent('Not found');
  });
});
