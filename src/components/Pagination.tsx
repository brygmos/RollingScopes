import React, { useEffect, useState } from 'react';
import cl from './styles/Pagination.module.css';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';

type Props = {
  count: number;
  limit?: number;
  activePage: number;
  changePage: (page: number) => void;
};

const Pagination = ({ count, activePage, changePage, limit = isMobile ? 5 : 10 }: Props) => {
  const pagesArray: number[] = fillArr(count);

  const [first, setFirst] = useState(pagesArray[0]);
  const [last, setLast] = useState(limit);
  const [center, setCenter] = useState(Math.floor(last / 2));
  const edgeButtonsFlag = count >= limit;

  const resultArray: number[] = pagesArray.slice(first - 1, last);

  function moveToEnd() {
    changePage(count);
    setLast(count);
    setFirst(count - (limit - 1));
    setCenter(Math.floor(count - limit / 2));
  }

  function moveToStart() {
    changePage(1);
    setLast(limit);
    setFirst(1);
    setCenter(Math.floor(limit / 2));
  }

  function fillArr(count: number) {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push(i + 1);
    }
    return arr;
  }

  useEffect(() => {
    if (activePage > center && last < count) {
      const diff = activePage - center;
      setFirst(first + diff < count - limit ? first + diff : count - (limit - 1));
      setLast(last + diff <= count ? last + diff : count);
      setCenter((prevState) => prevState + diff);
    }

    if (activePage <= center && first > 1) {
      const diff = center - activePage;
      setFirst(first - diff > 0 ? first - diff : 1);
      setLast(last - diff > limit ? last - diff : limit);
      setCenter((prevState) => prevState - diff);
    }
  }, [activePage]);

  if (count <= 1) return null;

  const edgeButtonLeft = (
    <div
      onClick={moveToStart}
      className={activePage === 1 ? cl.page_wrapper_disabled : cl.page_wrapper}
    >
      <span className={activePage === 1 ? cl.page_disabled : cl.page}>{'В начало'}</span>
    </div>
  );

  const edgeButtonRight = (
    <div
      onClick={moveToEnd}
      className={activePage === count ? cl.page_wrapper_disabled : cl.page_wrapper}
    >
      <span className={activePage === count ? cl.page_disabled : cl.page}>{'В конец'}</span>
    </div>
  );

  return (
    <div>
      <BrowserView>
        <div className={cl.pagination__wrapper}>
          {edgeButtonLeft}
          {resultArray.map((p) => {
            return (
              <div
                onClick={() => changePage(p)}
                className={activePage === p ? cl.page_wrapper__current : cl.page_wrapper}
                key={p + 'page'}
              >
                <span className={activePage === p ? cl.page__current : cl.page}>{p}</span>
              </div>
            );
          })}
          {edgeButtonRight}
        </div>
      </BrowserView>
      <MobileView>
        <div className={cl.pagination__wrapper}>
          {resultArray.map((p) => {
            return (
              <div
                onClick={() => changePage(p)}
                className={activePage === p ? cl.page_wrapper__current : cl.page_wrapper}
                key={p + 'page'}
              >
                <span className={activePage === p ? cl.page__current : cl.page}>{p}</span>
              </div>
            );
          })}
        </div>
        {edgeButtonsFlag && (
          <div className={cl.edgeButtonsMobileContainer}>
            {edgeButtonLeft}
            {edgeButtonRight}
          </div>
        )}
      </MobileView>
    </div>
  );
};

export default Pagination;
