import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { describe, expect, it } from 'vitest';
import Navbar from './Navbar';
import { MemoryRouter } from 'react-router-dom';

describe('Navbar', () => {
  it('correctly change class on click', () => {
    render(
      <MemoryRouter initialEntries={['/banana']}>
        <Navbar />
      </MemoryRouter>
    );

    const about = screen.getByText('About');
    fireEvent.click(about);

    expect(about).toHaveClass('_navlink_active_eba153');
  });
});
