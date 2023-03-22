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

type State = {
  card: CardType;
};

type Props = {
  card: CardType;
};

class CardItem extends React.Component<Props, State> {
  state: State = {
    card: this.props.card,
  };

  render(): JSX.Element {
    return (
      <div className={cl.card}>
        <img className={cl.img} src={this.props.card.image} alt="card image" />
        <div className={cl.textContent}>
          <div className={cl.header}>
            <h1>{this.props.card.title}</h1>
            <p>
              Author:
              <a href="#">
                <span>{this.props.card.author?.firstname}</span>
                <span> {this.props.card.author?.lastname}</span>
                <span> {this.props.card.role}</span>
              </a>
            </p>
            <p>
              Category:
              <a href="#">
                <span>{this.props.card.category}</span>
              </a>
            </p>
            <p>
              Date of creation:
              <a href="#">
                <span>{this.props.card.date}</span>
              </a>
            </p>
          </div>
          <div className={cl.btns}>
            <div className={cl.like}>
              <FontAwesomeIcon icon={faThumbsUp} />
              <span>{this.props.card.likes}</span>
            </div>
            <div className={cl.bookmark}>
              <FontAwesomeIcon icon={faBookmark} />
            </div>
          </div>
          <div className={cl.views}>
            <FontAwesomeIcon icon={faEye} />
            <span>{this.props.card.views}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CardItem;
