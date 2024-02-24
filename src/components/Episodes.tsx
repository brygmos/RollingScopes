import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import cl from './styles/Episodes.module.css';

const Episodes: FC<{ episodes: string[] | undefined }> = ({ episodes }): JSX.Element => {
  // const { episodeNumber } = useParams();
  const [expanded, setExpanded] = useState(!(episodes?.length && episodes.length > 3));

  function toggle() {
    setExpanded((prevState) => {
      return !prevState;
    });
  }

  return (
    <p className={cl.title} onClick={toggle}>
      <strong>
        Episodes
        {!expanded && (
          <span>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" fill="transparent" />
              <path
                d="M9.5 7L14.5 12L9.5 17"
                stroke="cyan"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        )}
        {expanded && (
          <span>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" fill="transparent" />
              <path
                d="M17 9.5L12 14.5L7 9.5"
                stroke="cyan"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        )}
      </strong>
      {expanded && (
        <div className={cl.list}>
          {episodes?.map((episode) => (
            <p key={episode}>
              <Link
                to={{
                  pathname: `/episodes/${episode.slice(40)}`,
                }}
              >
                Episode {episode.slice(40)}
              </Link>
            </p>
          ))}
        </div>
      )}
    </p>
  );
};

export default Episodes;
