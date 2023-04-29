import React, { FC, useState } from 'react';
import SearchBar from '../components/SearchBar';
import { CharacterType } from '../components/CharacterItem';
import CharacterList from '../components/CharactersList';
import MyModal from '../components/MyModal';
import CharacterItemFull from '../components/CharacterItemFull';
import { ImodalTextType } from '../components/Form';
import Loader from '../components/UI/Loader/Loader';
import { useGetCharacterByIdQuery, useGetCharactersQuery } from '../../API/RTKQuery';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Main: FC = (): JSX.Element => {
  const searchValue = useSelector((state: RootState) => state?.search?.value);
  const characters = useSelector((state: RootState) => state?.searchResults?.cards);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalText, setModalText] = useState('');
  const [query, setQuery] = useState(searchValue);
  const [modalTextType, setModalTextType] = useState('neutral');
  const [activeCard, setActiveCard] = useState<CharacterType>({} as CharacterType);

  const { data: charactersFromApi, error, isFetching } = useGetCharactersQuery(query);
  const {
    data: characterItem,
    error: itemError,
    isFetching: itemIsFetching,
  } = useGetCharacterByIdQuery(activeCard.id || 1);

  const findQuery = async (query: string) => {
    setQuery(query);
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
            setActiveCard({} as CharacterType);
          }}
        >
          {itemIsFetching ? (
            <Loader />
          ) : (
            <CharacterItemFull
              card={characterItem || {}}
              closeModal={() => {
                setModalVisibility(!modalVisibility);
              }}
            />
          )}
          {itemError && <p>Info not found</p>}
        </MyModal>
      )}
      <SearchBar findQuery={findQuery} />
      {isFetching && <Loader />}
      {error && (
        <div className={'container'}>
          <h1>Cards not found</h1>
        </div>
      )}
      {!charactersFromApi && characters ? (
        <CharacterList cards={characters} showFullCard={showFullCard} />
      ) : (
        !error && <CharacterList cards={charactersFromApi?.results} showFullCard={showFullCard} />
      )}
    </>
  );
};

export default Main;
