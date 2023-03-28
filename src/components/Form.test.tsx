import { act, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { describe, expect, it } from 'vitest';

import Form from './Form';

describe('Form', () => {
  it('render fields', () => {
    URL.createObjectURL = vi.fn().mockReturnValue('TODOmyMockUrl');
    render(<Form formHandler={() => {}} lastId={0} />);

    expect(screen.getByPlaceholderText(/your name/i)).toHaveTextContent('');
    expect(screen.getByPlaceholderText(/surname/i)).toHaveTextContent('');
    expect(screen.getByPlaceholderText(/title/i)).toHaveTextContent('');
    expect(screen.getByText(/category/i)).toBeTruthy();
  });
  it('show input data', () => {
    render(<Form formHandler={() => {}} lastId={0} />);

    const name = screen.getByPlaceholderText(/your name/i);

    act(() => {
      fireEvent.change(name, { target: { value: 'abc' } });
      fireEvent.click(screen.getByPlaceholderText(/surname/i));
    });

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Form');
    expect(name).toHaveValue('abc');
  });
  //TODO

  // it('show hints', () => {
  //   render(<Form formHandler={() => {}} lastId={0} />);
  //
  //   const name = screen.getByPlaceholderText(/your name/i);
  //
  //   fireEvent.change(name, { target: { value: 'a' } });
  //   fireEvent.click(screen.getByText(/Create/i));
  //
  //   expect(screen.getByText(/this field is required/i)).toBeInTheDOM();
  // });
  // it('show correct hints', () => {
  //   render(<Form formHandler={() => {}} lastId={0} />);
  //
  //   const name = screen.getByPlaceholderText(/title/i);
  //
  //   act(() => {
  //     fireEvent.change(name, { target: { value: 'a' } });
  //     fireEvent.click(screen.getByText(/Create/i));
  //   });
  //
  //   const hint = screen.getByTestId('titleError');
  //
  //   expect(hint).toHaveTextContent('Field is required');
  // });
});
