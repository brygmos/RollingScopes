import React from 'react';
import CardItem from './CardItem';
import cl from './styles/CardList.module.css';
import { getCardsByFakeAPI } from '../../API';

type CardType = {
  id: number;
  title: string;
  author?: author;
  views?: string;
  likes?: number;
  bookmarked?: boolean;
  image?: string;
};
type author = {
  firstname: string;
  lastname: string;
};

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
