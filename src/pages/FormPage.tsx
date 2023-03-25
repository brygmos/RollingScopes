import React, { FC, useState } from 'react';
import FormHooks from '../components/FormHooks';
import CardsList from '../components/CardsList';
import { CardType } from '../components/CardItem';

const FormPage: FC = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [lastId, setLastId] = useState(-1);

  function formHandler(card: CardType): void {
    setCards([...cards, card]);
    setLastId(cards.length);
  }

  return (
    <>
      <FormHooks formHandler={formHandler} lastId={lastId} />
      <CardsList cards={cards} />
    </>
  );
};

export default FormPage;
