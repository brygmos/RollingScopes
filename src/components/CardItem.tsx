import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import cl from './styles/CardItem.module.css';
import { faEye, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

type State = {
  card: string;
};

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
  card: CardType;
};

class CardItem extends React.Component<Props, State> {
  state: State = {
    card: '',
  };

  render() {
    return (
      <div className={cl.card}>
        <img className={cl.img} src={this.props.card.image} alt="card image" />
        <h1>{this.props.card.title}</h1>
        <p>
          Author:
          <span>{this.props.card.author?.firstname}</span>
          <span> {this.props.card.author?.lastname}</span>
        </p>
        <FontAwesomeIcon icon={faEye} />
        <span>{this.props.card.views}</span>
        <FontAwesomeIcon icon={faThumbsUp} />
        <span>{this.props.card.likes}</span>
      </div>
    );
  }
}

export default CardItem;
