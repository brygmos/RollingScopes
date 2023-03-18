import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { App } from '../App';
import { MemoryRouter } from 'react-router-dom';
import NotFound from './NotFound';

describe('NotFound', () => {
  it('should redirect to NotFound if path does not exist', () => {
    render(
      <MemoryRouter initialEntries={['/banana']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading')).toHaveTextContent('Not found');
  });
  it('Header is not empty', () => {
    //ARRANGE
    render(<NotFound />);
    //ACT
    //expect
    expect(screen.getByRole('heading')).toHaveTextContent('Not found');
  });
});
