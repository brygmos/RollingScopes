import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { describe, expect, it } from 'vitest';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('has a correct initial value', () => {
    //ARRANGE
    render(<SearchBar />);
    //ACT
    //expect
    expect(screen.getByPlaceholderText('Search...')).toHaveTextContent('');
  });
  it('correctly gets input text', () => {
    //ARRANGE
    render(<SearchBar />);
    //ACT
    const bar = screen.getByPlaceholderText('Search...');
    fireEvent.change(bar, { target: { value: 'abc' } });
    //expect
    expect(bar).toHaveValue('abc');
  });
});
