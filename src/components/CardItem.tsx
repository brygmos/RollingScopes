import React from 'react';

type State = {
  card: string;
};

type CardType = {
  id: number;
  title: string;
  author?: object;
  views?: string;
  likes?: number;
  bookmarked?: boolean;
  image?: string;
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
      <div>
        <h1>{this.props.card.title}</h1>
        <h1>id {this.props.card.id}</h1>
        <span>views {this.props.card.views}</span>
        <span>likes {this.props.card.likes}</span>
        <img src={this.props.card.image} alt="card image" />
      </div>
    );
  }
}

export default CardItem;
