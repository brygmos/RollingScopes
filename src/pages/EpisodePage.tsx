import React, { FC } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
// import cl from '../components/styles/CharacterItemFull.module.css';
import { CharacterType, Info } from '../components/CharacterItem';
import {
  useGetCharacterByIdQuery,
  useGetCharactersQuery,
  useGetEpisodeByIdQuery,
  useGetEpisodesQuery,
} from '../../API/RTKQuery';
import { useNavigate } from 'react-router-dom';

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

const Episodes: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const { episodeNumber, setEpisodeNumber } = useParams();
  const { data: episodesFromApi, error, isFetching } = useGetEpisodesQuery({});
  const {
    data: characterItem,
    error: itemError,
    isFetching: itemIsFetching,
  } = useGetEpisodeByIdQuery(Number(episodeNumber) || 1);

  return episodeNumber?.length ? (
    <div className={'container'}>
      <h1>Episode {episodeNumber}</h1>
      <a
        href={'#'}
        onClick={() => {
          navigate('../episodes');
        }}
      >
        ←To episodes
      </a>
      {characterItem && <p>{characterItem.name}</p>}
    </div>
  ) : (
    <div className={'container'}>
      <h1>Episodes</h1>
      {episodesFromApi &&
        episodesFromApi?.results.map((episode) => (
          <p key={episode.id}>
            <Link
              to={{
                pathname: `/episodes/${episode.url.slice(40)}`,
              }}
            >
              Episode {episode.url.slice(40)}: {episode.name}
            </Link>
          </p>
        ))}
    </div>
  );
};

export default Episodes;
