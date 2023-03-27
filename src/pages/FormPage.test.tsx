import { act, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { App } from '../App';
import { MemoryRouter } from 'react-router-dom';
import FormPage from './FormPage';

describe('FormPage', () => {
  it('renders form', () => {
    render(
      <MemoryRouter initialEntries={['/form']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toBeTruthy();
  });
  it('Title is not empty', () => {
    render(<FormPage />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Form');
  });
  it('card was added, fields are empty', () => {
    render(
      <MemoryRouter initialEntries={['/form']}>
        <App />
      </MemoryRouter>
    );

    const name = screen.getByPlaceholderText(/your name/i);
    const surname = screen.getByPlaceholderText(/your surname/i);
    const title = screen.getByPlaceholderText(/title/i);
    const checkBox: HTMLInputElement = screen.getByTestId('check');

    act(() => {
      fireEvent.change(name, { target: { value: 'Name' } });
      fireEvent.change(surname, { target: { value: 'Surname' } });
      fireEvent.change(title, { target: { value: 'Title' } });
      fireEvent.click(checkBox);
      fireEvent.click(screen.getByText(/create/i));
    });

    expect(checkBox.checked).toEqual(true);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Form');
    expect(screen.getByPlaceholderText(/title/i)).toHaveTextContent('');
  });
});
