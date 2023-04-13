import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import cl from './styles/CardItem.module.css';
import { faBookmark, faEye, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export type CardType = {
  id?: number;
  title?: string;
  author?: author;
  views?: string;
  likes?: number;
  bookmarked?: boolean;
  image?: string;
  email?: string;
  role?: string;
  selector?: string;
  date?: string;
  category?: string;
};
type author = {
  firstname: string;
  lastname: string;
};
type Props = {
  card: CardType;
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
  created?: string | Date | number;
};

function CardItem(props: Props): JSX.Element {
  return (
    <div className={cl.card}>
      {props.card.image && <img className={cl.img} src={props.card.image} alt="card image" />}
      <div className={cl.textContent}>
        <div className={cl.header}>
          <h1>{props.card.title}</h1>
          <p>
            Author:
            <a href="#">
              <span>{props.card.author?.firstname}</span>
              <span> {props.card.author?.lastname}</span>
            </a>
            {props.card.role && <span> ({props.card.role})</span>}
          </p>
          {props.card.category && (
            <p>
              Category:<a href="#">{props.card.category}</a>
            </p>
          )}
          {props.card.date && <p>Date of creation: {props.card.date}</p>}
        </div>
        <div className={cl.btns}>
          <div className={cl.like}>
            <FontAwesomeIcon icon={faThumbsUp} />
            <span>{props.card.likes}</span>
          </div>
          <div className={cl.bookmark}>
            <FontAwesomeIcon icon={faBookmark} />
          </div>
        </div>
        <div className={cl.views}>
          <FontAwesomeIcon icon={faEye} />
          <span>{props.card.views}</span>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
