import React from 'react';
import CardItem, { CardType } from './CardItem';
import cl from './styles/CardList.module.css';
import { getCardsByFakeAPI } from '../../API';

type Props = {
  cards: CardType[];
};

class CardsList extends React.Component<Props> {
  cards: CardType[] = getCardsByFakeAPI();
  render(): JSX.Element {
    return (
      <div className={cl.container}>
        <div className={cl.cardList}>
          {this.cards.map((card) => (
            <CardItem card={card} key={card.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default CardsList;
