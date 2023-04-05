import React from 'react';
import cl from './CloseButton.module.css';

type Props = {
  onClick?: () => void;
};

function CloseButton(props: Props): JSX.Element {
  return (
    <div className={cl.close} onClick={props.onClick}>
      <div></div>
      <div></div>
    </div>
  );
}

export default CloseButton;
