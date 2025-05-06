import { useState } from "react";

import { Modal } from "./Modal";

import styled from "styled-components";

export const ChatInput = ({ transferUp, removeAllMessages }) => {
  const [value, setValue] = useState("");

  const [showModal, setShowModal] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();

    if (!value.trim()) return;

    const newMessages = {
      id: crypto.randomUUID(),
      text: value,
      time: new Date(),
    };

    transferUp(newMessages);
    setValue("");
  };

  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  //  function отвечает за то чтоб при клике  button delete отображало modal'ка
  const handlerDeleteBtn = () => {
    setShowModal(true);
  };

  // function отвечает если user выберет кнопку нет то закрывается modal'ка
  const handlerCloseModal = () => {
    setShowModal(false);
  };

  // function отвечает  если user выберет кнопку "да" удалить все messages
  const deleteAllMessages = () => {
    removeAllMessages();
    setShowModal(false);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <ChatSection>
          <InputField
            onChange={valueChangeHandler}
            type="text"
            placeholder="type a message..."
            value={value}
          />

          <DeleteBtn type="button" onClick={handlerDeleteBtn}></DeleteBtn>
          {value && (
            <>
              <SendBtn type="submit"></SendBtn>
            </>
          )}
        </ChatSection>
      </form>
      {showModal && (
        <>
          <div></div>
          <Modal onCloseBtn={handlerCloseModal} onOpenBtn={deleteAllMessages} />
        </>
      )}
    </div>
  );
};

const ChatSection = styled.section`
  position: fixed;
  bottom: 35px;
  position: absolute;
  width: 95%;
  display: flex;
  gap: 10px;
`;

const InputField = styled.input`
  width: 100%;
  border: 1px solid grey;
  border-radius: 20px;
  outline: none;
  padding: 15px 10px;
  visibility: inherit;
  font-family: Arial, Helvetica, sans-serif;
  font-size: larger;
`;

const SendBtn = styled.button`
  background: url("https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1200px-Telegram_2019_Logo.svg.png")
    center center / cover no-repeat;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

const DeleteBtn = styled.button`
  background: url("https://www.shutterstock.com/image-vector/delete-icon-list-remove-button-260nw-1542560498.jpg")
    center center/cover no-repeat;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  background-color: black;
  color: white;
`;
