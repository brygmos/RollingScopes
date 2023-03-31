import React from 'react';
import cl from './styles/CharacterItemFull.module.css';

type Props = {
  card: CharacterType;
};

export type CharacterType = {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: {
    name?: string;
    url?: string;
  };
  location?: {
    name?: string;
    url?: string;
  };
  image?: string;
  episode?: Array<string>;
  url?: string;
  created?: string;
};

function CharacterItemFull(props: Props): JSX.Element {
  return (
    <div className={cl.card}>
      <div className={cl.close}>
        <div></div>
        <div></div>
      </div>
      {props.card.image && <img className={cl.img} src={props.card.image} alt="card image" />}
      <div className={cl.textContent}>
        <div className={cl.header}>
          <h1>{props.card.name}</h1>
        </div>
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
          <strong>Created: </strong>
          {props.card.created}
        </p>
        <div className={cl.episodes}>
          <p>
            <strong>Episodes:</strong>
          </p>
          {props.card.episode?.map((episode) => (
            <p key={episode}>
              <a href={episode} target={'_blank'} rel="noreferrer">
                <i>{episode}</i>
              </a>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CharacterItemFull;
