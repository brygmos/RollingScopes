import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { App } from '../App';
import WrappedApp from '../App';
import { MemoryRouter } from 'react-router-dom';
import NotFound from './NotFound';
import AboutUs from './AboutUs';

describe('App', () => {
  it('Renders page', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
  });
  it('Header is not empty', () => {
    //ARRANGE
    render(<AboutUs />);
    //ACT
    //expect
    expect(screen.getByRole('heading')).toHaveTextContent('About us');
  });
});
