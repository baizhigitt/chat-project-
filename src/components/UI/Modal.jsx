import React from "react";
import styled from "styled-components";

export const Modal = ({ onCloseBtn, onOpenBtn }) => {
  return (
    <ModalStyled onClick={onCloseBtn}>
      <ModalWindow onClick={(event) => event.stopPropagation()}>
        <ModalText>Вы точно хотите удалить все сообщения?</ModalText>
        <ModalButtton onClick={onOpenBtn}>Да</ModalButtton>
        <ModalButtton onClick={onCloseBtn}>Нет</ModalButtton>
      </ModalWindow>
    </ModalStyled>
  );
};

const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalWindow = styled.div`
  background-color: #fff;
  padding: 24px 20px;
  border-radius: 10px;
  width: 320px;
  text-align: center;
  box-shadow: 0 5px 15px;
`;

const ModalText = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  color: #333;
  font-weight: bold;
  font-style: unset;
`;

const ModalButtton = styled.button`
  margin: 0 20px;
  padding: 8px 18px;
  font-size: 14px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: #e0e0e0;
  transition: background-color 0.2s ease;
`;
