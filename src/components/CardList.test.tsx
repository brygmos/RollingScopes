import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { describe, expect, it } from 'vitest';
import CardList from './CardsList';
import { getCardsByFakeAPI } from '../../API';

describe('CardList', () => {
  it(' renders children', () => {
    //ARRANGE
    render(<CardList cards={getCardsByFakeAPI()} />);
    //ACT
    //expect
    expect(screen.getByText('Title')).toBeTruthy();
  });
});
