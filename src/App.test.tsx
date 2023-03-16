import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { App } from './App';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  it('Renders hello world', () => {
    //ARRANGE
    render(<App />);
    //ACT
    //expect
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Hello world');
  });
  it('Renders not found if path does not exist', () => {
    render(
      <MemoryRouter initialEntries={['/banana']}>
        <App />
      </MemoryRouter>
    );
  });
});
