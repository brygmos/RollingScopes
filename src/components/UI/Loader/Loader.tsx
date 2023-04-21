import React from 'react';
import cl from './Loader.module.css';

const Loader = () => {
  return (
    <>
      <p>loading...</p>
      <div className={cl.loader}></div>
    </>
  );
};

export default Loader;
