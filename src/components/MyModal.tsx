import React, { FC } from 'react';
import cl from './styles/MyModal.module.css';

type Props = {
  visible: boolean;
  setModal: () => void;
  children?: React.ReactNode;
};

const MyModal: FC<Props> = ({ children, setModal }) => {
  return (
    <div
      className={cl.background}
      onClick={() => {
        setModal();
      }}
    >
      <div className={cl.container}>{children}</div>
    </div>
  );
};

export default MyModal;
