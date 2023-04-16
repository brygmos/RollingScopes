import React from 'react';
import cl from './styles/CardList.module.css';
import CharacterItem, { CharacterType } from './CharacterItem';

type Props = {
  cards: CharacterType[];
  showFullCard: (arg0: number) => void;
};

function CharacterList(props: Props): JSX.Element {
  return (
    <div className={cl.container}>
      <div className={cl.cardList}>
        {props.cards.map((card) => (
          <CharacterItem card={card} key={card.id} showFullCard={props.showFullCard} />
        ))}
      </div>
    </div>
  );
}

export default CharacterList;
