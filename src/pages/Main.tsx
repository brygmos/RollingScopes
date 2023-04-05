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
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [modalTextType, setModalTextType] = useState('neutral');
  const [activeCard, setActiveCard] = useState<CharacterType | object>({});

  useEffect(() => {
    foo();
  }, []);

  const foo = async () => {
    const url = `https://rickandmortyapi.com/api/character`;
    const response = await fetch(url);
    const data = await response.json();
    setCards(data.results);
  };

  const findQuery = async (query: string) => {
    const url = `https://rickandmortyapi.com/api/character?`;
    try {
      setIsLoading(true);
      const response = await fetch(
        url +
          new URLSearchParams({
            name: query,
          })
      ).catch(handleError);
      const data = await response.json();
      setCards(data.results);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleError = () => {
    console.log(error);
    return new Response(
      JSON.stringify({
        code: 400,
        message: 'network Error',
      })
    );
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
      {modalVisibility && (
        <MyModal
          visible={modalVisibility}
          modalText={modalText}
          messageType={modalTextType}
          setModalVisibility={() => {
            setModalVisibility(!modalVisibility);
          }}
        >
          <CharacterItemFull
            card={activeCard}
            closeModal={() => {
              setModalVisibility(!modalVisibility);
            }}
          />
        </MyModal>
      )}
      <SearchBar findQuery={findQuery} />
      {isLoading && <h1>Loading...</h1>}
      <h1>{error}</h1>
      {!cards ? (
        <h1>Cards not found</h1>
      ) : (
        <CharacterList cards={cards} showFullCard={showFullCard} />
      )}
    </>
  );
};

export default Main;
