import React from 'react';
import { cards } from '../../API';
import CardItem from './CardItem';

class CardsList extends React.Component {
  // state: State = {
  //   field: '',
  // };
  render() {
    return (
      <div>
        {cards.map((card) => (
          <CardItem card={card} key={card.id} />
        ))}
      </div>
    );
  }
}

export default CardsList;
