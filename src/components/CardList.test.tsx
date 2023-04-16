import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { describe, expect, it } from 'vitest';
import CardList from './CardsList';
import { CardType } from './CardItem';

const cards: CardType[] = [
  {
    id: 0,
    title: 'Title',
    author: { firstname: 'Daniil', lastname: 'Danilov' },
    views: '666666',
    likes: 55,
    bookmarked: true,
    image: 'https://www.syl.ru/misc/i/ai/187028/780025.jpg',
  },
];

describe('CardList', () => {
  it(' renders children', () => {
    render(<CardList cards={cards} />);
    expect(screen.getByText('Title')).toBeTruthy();
  });
});
