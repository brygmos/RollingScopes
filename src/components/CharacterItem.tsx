import React from 'react';
import cl from './styles/CardItem.module.css';

type Props = {
  card: CharacterType;
  showFullCard: (arg0: number) => void;
};

export type CharacterType = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
};

function CharacterItem(props: Props): JSX.Element {
  return (
    <div
      className={cl.card}
      onClick={() => {
        props.showFullCard(props.card.id);
      }}
    >
      {props.card.image && <img className={cl.img} src={props.card.image} alt="card image" />}
      <div className={cl.textContent}>
        <div className={cl.header}>
          <h1>{props.card.name}</h1>
          <p>{props.card.species}</p>
        </div>
      </div>
    </div>
  );
}

export default CharacterItem;
