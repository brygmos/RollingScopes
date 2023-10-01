import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { describe, expect, it } from 'vitest';
import CharacterList from './CharactersList';

const cardsMock = [
  {
    id: 20,
    name: 'Ants in my Eyes Johnson',
    status: 'unknown',
    species: 'Human',
    type: 'Human with ants in his eyes',
    gender: 'Male',
    origin: {
      name: 'unknown',
      url: '',
    },
    location: {
      name: 'Interdimensional Cable',
      url: 'https://rickandmortyapi.com/api/location/6',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/20.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/8'],
    url: 'https://rickandmortyapi.com/api/character/20',
    created: '2017-11-04T22:34:53.659Z',
  },
];

describe('CharacterList', () => {
  it(' renders children', () => {
    render(<CharacterList cards={cardsMock} showFullCard={() => {}} />);
    expect(screen.getByText('Ants in my Eyes Johnson')).toBeTruthy();
  });
});
