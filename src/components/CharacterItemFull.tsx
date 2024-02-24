import React from 'react';
import cl from './styles/CharacterItemFull.module.css';
import CloseButton from './UI/CloseButton/CloseButton';
import { CharacterType } from './CharacterItem';
import Episodes from './Episodes';

type Props = {
  card: CharacterType;
  closeModal?: () => void;
};

function CharacterItemFull(props: Props): JSX.Element {
  return (
    <div className={cl.card}>
      <CloseButton onClick={props.closeModal} />
      {props.card.image && <img className={cl.img} src={props.card.image} alt="card image" />}
      <div className={cl.textContent}>
        <div className={cl.header}>
          <h1>{props.card.name}</h1>
        </div>
        {props.card.species && (
          <p>
            <strong>Species: </strong>
            {props.card.species}
          </p>
        )}
        {props.card.type && (
          <p>
            <strong>Type: </strong>
            {props.card.type}
          </p>
        )}
        <p>
          <strong>Status: </strong>
          {props.card.status}
        </p>
        <p>
          <strong>Gender: </strong>
          {props.card.gender}
        </p>
        <p>
          <strong>Location: </strong>
          {props.card.location?.name}
        </p>
        <p>
          <strong>Created: </strong>
          {props.card.created && new Date(props.card.created).toLocaleDateString()}
        </p>
        <Episodes episodes={props.card.episode} />
      </div>
    </div>
  );
}

export default CharacterItemFull;
