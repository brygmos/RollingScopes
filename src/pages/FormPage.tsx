import React, { FC, useState } from 'react';
import CardsList from '../components/CardsList';
import { CardType } from '../components/CardItem';
import Form from '../components/Form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { addCard } from '../redux/formSlice';

const FormPage: FC = () => {
  // const [cards, setCards] = useState<CardType[]>([]);
  const [lastId, setLastId] = useState(-1);
  const cards = useSelector((state: RootState) => state.form.cards);
  const dispatch = useDispatch();

  function formHandler(card: CardType): void {
    // setCards([...cards, card]);
    dispatch(addCard(card));
    setLastId(cards.length);
  }

  return (
    <>
      <Form formHandler={formHandler} lastId={lastId} />
      <CardsList cards={cards} />
    </>
  );
};

export default FormPage;
