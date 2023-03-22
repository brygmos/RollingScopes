import React from 'react';
import CardItem, { CardType } from './CardItem';
import cl from './styles/CardList.module.css';

type Props = {
  cards: CardType[];
};

class CardsList extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <div className={cl.container}>
        <div className={cl.cardList}>
          {this.props.cards.map((card) => (
            <CardItem card={card} key={card.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default CardsList;
