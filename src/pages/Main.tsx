import React, { FC, useCallback, useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import { CharacterType } from '../components/CardItem';
import CharacterList from '../components/CharactersList';
import MyModal from '../components/MyModal';
import CharacterItemFull from '../components/CharacterItemFull';
import { ImodalTextType } from '../components/Form';
import Loader from '../components/UI/Loader/Loader';
import Api from '../../API';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setSearchResults } from '../redux/searchResultsSlice';

const Main: FC = (): JSX.Element => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalText, setModalText] = useState('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [cardIsLoading, setCardIsLoading] = useState(false);
  const [modalTextType, setModalTextType] = useState('neutral');
  const [activeCard, setActiveCard] = useState<CharacterType | object>({});

  const searchResults = useSelector((state: RootState) => state.searchResults.cards);
  const dispatch = useDispatch();

  // useCallback is for avoiding warning in useEffect
  const initialQuery = useCallback(async () => {
    const response = await Api.getAllCharacters();
    const data = await response.json();
    if (response.status === 200) {
      dispatch(setSearchResults(data.results));
      setCardIsLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    initialQuery().then(null);
  }, [initialQuery]);

  const findQuery = async (query: string) => {
    setIsLoading(true);
    try {
      const response = await Api.getCharactersByQuery(query);
      const data = await response.json();
      dispatch(setSearchResults(data.results));
      // setCards(data.results);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
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
      {!searchResults ? (
        <div className={'container'}>
          <h1>Cards not found</h1>
        </div>
      ) : (
        <CharacterList cards={searchResults} showFullCard={showFullCard} />
      )}
    </>
  );
};

export default Main;
