import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { describe, expect, it } from 'vitest';

import Form from './Form';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

describe('Form', () => {
  it('render fields', () => {
    URL.createObjectURL = vi.fn().mockReturnValue('myMockUrl');
    render(
      <Provider store={store}>
        <Form formHandler={() => {}} lastId={0} />
      </Provider>
    );

    expect(screen.getByPlaceholderText(/your name/i)).toHaveTextContent('');
    expect(screen.getByPlaceholderText(/surname/i)).toHaveTextContent('');
    expect(screen.getByPlaceholderText(/title/i)).toHaveTextContent('');
    expect(screen.getByText(/category/i)).toBeTruthy();
  });
  it('show input data', () => {
    render(
      <Provider store={store}>
        <Form formHandler={() => {}} lastId={0} />
      </Provider>
    );

    const name = screen.getByPlaceholderText(/your name/i);

    act(() => {
      fireEvent.change(name, { target: { value: 'abc' } });
      fireEvent.click(screen.getByPlaceholderText(/surname/i));
    });

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Form');
    expect(name).toHaveValue('abc');
  });

  it('displays modal error message', async () => {
    render(
      <Provider store={store}>
        <Form formHandler={() => {}} lastId={0} />
      </Provider>
    );

    const usernameInput = screen.getByPlaceholderText(/your name/i);
    fireEvent.change(usernameInput, { target: { value: 'a' } });

    fireEvent.click(screen.getByText(/Create/i));

    await waitFor(() => screen.getByText(/invalid data/i));
  });

  it('displays error message when name is empty', async () => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <Form formHandler={() => {}} lastId={0} />
      </Provider>
    );
    const usernameInput = getByPlaceholderText(/your name/i);
    fireEvent.change(usernameInput, { target: { value: '' } });

    const submitButton = getByText('Create card');
    fireEvent.click(submitButton);

    await waitFor(() => getByText('name is required'));
  });
});
