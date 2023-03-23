import React from 'react';
// import cl from './styles/FormPage.module.css';
import Form from './Form';
import CardsList from '../components/CardsList';
import { CardType } from '../components/CardItem';

type State = {
  cards: CardType[];
  lastId: number;
};

type Props = object;

class FormPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      cards: [],
      lastId: -1,
    };
  }

  formHandler = (card: CardType) => {
    // this.state.cards = [...this.state.cards, card];
    this.setState({ cards: [...this.state.cards, card] });
    this.setState({ lastId: this.state.cards.length });
  };

  render() {
    return (
      <>
        <Form formHandler={this.formHandler} lastId={this.state.lastId} />
        <CardsList cards={this.state.cards} />
      </>
    );
  }
}

export default FormPage;