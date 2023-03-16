import React from 'react';
import { cards } from '../../API';
import CardItem from './CardItem';
import cl from './styles/CardList.module.css';

class CardsList extends React.Component {
  render() {
    return (
      <div className={cl.container}>
        <div className={cl.cardList}>
          {cards.map((card) => (
            <CardItem card={card} key={card.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default CardsList;
