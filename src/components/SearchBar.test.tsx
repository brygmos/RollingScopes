import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { describe, expect, it } from 'vitest';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('has a correct initial value', () => {
    render(<SearchBar />);
    expect(screen.getByPlaceholderText(/search.../i)).toHaveTextContent('');
  });
  it('correctly gets input text', () => {
    render(<SearchBar />);

    const bar = screen.getByPlaceholderText(/search.../i);
    fireEvent.change(bar, { target: { value: 'abc' } });

    expect(bar).toHaveValue('abc');
  });
});
