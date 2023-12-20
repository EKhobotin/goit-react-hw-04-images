import React from 'react';
import { Overlay, ModalDiv } from './Modal.styled';

export const Modal = ({ url, onClick }) => {
  return (
    <Overlay onClick={onClick}>
      <ModalDiv>
        <img src={url} alt="qwerty" />
      </ModalDiv>
    </Overlay>
  );
};
