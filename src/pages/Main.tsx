import React, { FC, useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import { CharacterType } from '../components/CardItem';
import CharacterList from '../components/CharactersList';
import MyModal from '../components/MyModal';
import CharacterItemFull from '../components/CharacterItemFull';
import { ImodalTextType } from '../components/Form';
import Loader from '../components/UI/Loader/Loader';
import Api from '../../API';

const Main: FC = (): JSX.Element => {
  const [cards, setCards] = useState<CharacterType[]>([]);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalText, setModalText] = useState('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [cardIsLoading, setCardIsLoading] = useState(false);
  const [modalTextType, setModalTextType] = useState('neutral');
  const [activeCard, setActiveCard] = useState<CharacterType | object>({});

  useEffect(() => {
    initialQuery().then(console.log);
  }, []);

  const initialQuery = async () => {
    const response = await Api.getAllCharacters();
    const data = await response.json();
    if (response.status === 200) {
      setCards(data.results);
      setCardIsLoading(false);
    }
  };

  const findQuery = async (query: string) => {
    setIsLoading(true);
    const response = await Api.getCharactersByQuery(query);
    const data = await response.json();
    if (response.status === 200) {
      setCards(data.results);
      setIsLoading(false);
      return Promise.resolve();
    } else {
      setError(error);
      return Promise.reject();
    }
  };

  function setModal(visible: boolean, text = '', type: ImodalTextType) {
    setModalVisibility(visible);
    setModalText(text);
    setModalTextType(type);
  }

  const showFullCard = async (id: number) => {
    setModal(true, '', ImodalTextType.success);
    setCardIsLoading(true);
    const response = await Api.getCharacterById(id);
    const data = await response.json();
    if (response.status === 200) {
      setActiveCard(data);
      setCardIsLoading(false);
      return Promise.resolve();
    } else {
      setError(error);
      return Promise.reject();
    }
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
          {cardIsLoading ? (
            <Loader />
          ) : (
            <CharacterItemFull
              card={activeCard}
              closeModal={() => {
                setModalVisibility(!modalVisibility);
              }}
            />
          )}
        </MyModal>
      )}
      <SearchBar findQuery={findQuery} />
      {isLoading && <Loader />}
      <h1>{error}</h1>
      {!cards ? (
        <div className={'container'}>
          <h1>Cards not found</h1>
        </div>
      ) : (
        <CharacterList cards={cards} showFullCard={showFullCard} />
      )}
    </>
  );
};

export default Main;
