import React, { FC, useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import { CharacterType } from '../components/CardItem';
import CharacterList from '../components/CharactersList';
import MyModal from '../components/MyModal';
import CharacterItemFull from '../components/CharacterItemFull';
import { ImodalTextType } from '../components/Form';

const Main: FC = (): JSX.Element => {
  const [cards, setCards] = useState<CharacterType[]>([]);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalText, setModalText] = useState('');
  const [modalTextType, setModalTextType] = useState('neutral');
  const [activeCard, setActiveCard] = useState<CharacterType | object>({});

  useEffect(() => {
    foo();
  }, []);

  const foo = async () => {
    const url = `https://rickandmortyapi.com/api/character/?page=$1`;
    const response = await fetch(url);
    const data = await response.json();
    setCards(data.results);
  };

  function setModal(visible: boolean, text = '', type: ImodalTextType) {
    setModalVisibility(visible);
    setModalText(text);
    setModalTextType(type);
  }

  const showFullCard = (id: number) => {
    const card = cards.filter((card) => card.id == id)[0];
    setModal(true, '', ImodalTextType.success);
    setActiveCard(card);
  };

  return (
    <>
      {cards[0] && modalVisibility && (
        <MyModal
          visible={modalVisibility}
          modalText={modalText}
          messageType={modalTextType}
          setModalVisibility={() => {
            setModalVisibility(false);
          }}
        >
          <CharacterItemFull card={activeCard} />
        </MyModal>
      )}
      <SearchBar />
      <CharacterList cards={cards} showFullCard={showFullCard} />
    </>
  );
};

export default Main;
