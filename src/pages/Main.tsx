import React, { FC, useState } from 'react';
import SearchBar from '../components/SearchBar';
import { CharacterType } from '../components/CharacterItem';
import CharacterList from '../components/CharactersList';
import MyModal from '../components/MyModal';
import CharacterItemFull from '../components/CharacterItemFull';
import { ImodalTextType } from '../components/Form';
import Loader from '../components/UI/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setSearchResults } from '../redux/searchResultsSlice';
import { useGetCharacterByIdQuery, useGetCharactersQuery } from '../redux/RTKQuery';

const Main: FC = (): JSX.Element => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalText, setModalText] = useState('');
  const [query, setQuery] = useState('');
  // const [error, setError] = useState<string>('');
  // const [isLoading, setIsLoading] = useState(false);
  // const [cardIsLoading, setCardIsLoading] = useState(false);
  const [modalTextType, setModalTextType] = useState('neutral');
  const [activeCard, setActiveCard] = useState<CharacterType>({} as CharacterType);

  const searchResults = useSelector((state: RootState) => state.searchResults.cards);
  const searchValue = useSelector((state: RootState) => state.search.value);
  const dispatch = useDispatch();

  const { data: characters, error, isLoading } = useGetCharactersQuery(query);
  const {
    data: characterItem,
    error: itemError,
    isLoading: itemIsLoading,
  } = useGetCharacterByIdQuery(activeCard.id || 1);
  characters && dispatch(setSearchResults(characters.results));

  const findQuery = async (query: string) => {
    setQuery(query);
    console.log(itemIsLoading);
  };

  function setModal(visible: boolean, text = '', type: ImodalTextType) {
    setModalVisibility(visible);
    setModalText(text);
    setModalTextType(type);
  }

  const showFullCard = async (id: number) => {
    setActiveCard({ ...activeCard, id: id });
    setModal(true, '', ImodalTextType.success);
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
          {itemIsLoading ? (
            <Loader />
          ) : (
            <CharacterItemFull
              card={characterItem || {}}
              closeModal={() => {
                setModalVisibility(!modalVisibility);
              }}
            />
          )}
        </MyModal>
      )}
      <SearchBar findQuery={findQuery} />
      {isLoading && <Loader />}
      {error && (
        <div className={'container'}>
          <h1>Some error</h1>
        </div>
      )}
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
