import React, { FC, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
// import cl from '../components/styles/CharacterItemFull.module.css';
import { CharacterType, Info } from '../components/CharacterItem';
import {
  useGetCharacterByIdQuery,
  useGetCharactersQuery,
  useGetEpisodeByIdQuery,
  useGetEpisodesQuery,
} from '../../API/RTKQuery';
import { useNavigate, useLocation } from 'react-router-dom';
import Pagination from '../components/Pagination';
// import Episodes from '../components/Episodes';

export type EpisodeType = {
  id?: number;
  name?: string;
  air_date?: string;
  episode?: string;
  characters?: string[];
  url: string;
  created?: string | Date | number;
};

export type AllEpisodesResponseType = {
  info: Info;
  results: EpisodeType[];
};

function useQuery() {
  const { search } = useLocation();
  console.log(search);

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Episodes: FC = (): JSX.Element => {
  const query = useQuery();
  const [page, setPage] = useState(Number(query.get('page')) || 1);
  const navigate = useNavigate();
  const { episodeNumber, setEpisodeNumber } = useParams();
  const { data: episodesFromApi, error, isFetching } = useGetEpisodesQuery({ page: page });
  const {
    data: characterItem,
    error: itemError,
    isFetching: itemIsFetching,
  } = useGetEpisodeByIdQuery(Number(episodeNumber) || 1);

  return episodeNumber?.length ? (
    <div className={'container'}>
      <h1>Episode {episodeNumber}</h1>
      <p>
        <a
          style={{ color: 'white' }}
          href={'#'}
          onClick={() => {
            navigate('../episodes');
          }}
        >
          ←To episodes
        </a>
      </p>
      {characterItem && <p>{characterItem.name}</p>}
      {characterItem && <p>{characterItem.air_date}</p>}
    </div>
  ) : (
    <div className={'container'}>
      <h1>Episodes</h1>
      {query.has('page') && <h2>Page {query.get('page')}</h2>}

      {/*<Episodes episodes={episodesFromApi} />*/}
      {episodesFromApi &&
        episodesFromApi?.results.map((episode) => (
          <p key={episode.id}>
            <Link
              style={{ color: 'white' }}
              to={{
                pathname: `/episodes/${episode.url.slice(40)}`,
              }}
            >
              Episode {episode.url.slice(40)}: {episode.name}
            </Link>
          </p>
        ))}
      <Pagination
        count={error ? 0 : episodesFromApi?.info?.pages || 1}
        activePage={page}
        changePage={(page) => {
          setPage(page);
          query.set('page', page.toString());
          navigate('../episodes' + '?page=' + page);
        }}
      />
    </div>
  );
};

export default Episodes;
