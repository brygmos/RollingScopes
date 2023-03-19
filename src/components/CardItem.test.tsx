import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { describe, expect, it } from 'vitest';
import CardItem from './CardItem';

const testCard = {
  id: 3,
  title: 'Card title',
  author: { firstname: 'card firstname', lastname: 'card lastname' },
  views: 'card views',
  likes: 54,
  bookmarked: false,
  image:
    'https://sun9-81.userapi.com/impg/VqrmbztEXnas1uCpDD4OpEz9QGUDADW_PxRXQw/C0LDQUtsEDM.jpg?size=537x240&quality=96&sign=9a063dcc6adf27537a6d9184a2c06c7a&type=share',
};

describe('CardItem', () => {
  it(' correctly gets data', () => {
    render(<CardItem card={testCard} />);

    expect(screen.getByRole('heading')).toHaveTextContent('Card title');
    expect(screen.getByText('card firstname')).toHaveTextContent('firstname');
  });
});
