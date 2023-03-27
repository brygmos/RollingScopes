import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import MyModal from './MyModal';

describe('MyModal', () => {
  it('show message', () => {
    render(
      <MemoryRouter initialEntries={['/banana']}>
        <MyModal
          setModalVisibility={() => {
            return true;
          }}
          modalText={'Test'}
          visible={true}
        />
      </MemoryRouter>
    );
    expect(screen.getByText(/test/i)).toBeTruthy();
  });
  it('hide message', () => {
    render(
      <MemoryRouter initialEntries={['/banana']}>
        <MyModal
          setModalVisibility={() => {
            return true;
          }}
          modalText={'Test'}
          visible={true}
        />
      </MemoryRouter>
    );
    expect(screen.getByText(/test/i)).toBeTruthy();
    fireEvent.click(screen.getByRole('heading', { level: 1 }));
    expect(screen.getByRole('heading', { level: 1 })).toBeTruthy();
  });
});
