import React from "react";

import { createGlobalStyle, styled } from "styled-components";

export const Chat = ({ messages, onDelete, onReadMessages }) => {
  return (
    <div>
      <GlobalStyle />
      {messages.map((item) => (
        <ChatItem
          key={item.id}
          {...item}
          onDelete={onDelete}
          onReadMessages={onReadMessages}
        />
      ))}
    </div>
  );
};

const ChatItem = ({ text, time, onDelete, id, read, onReadMessages }) => {
  const currentTime = new Date(time).toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <ChatContainer>
      <Chatinterface read={read}>
        <p>{text}</p>

        <Span>{currentTime}</Span>
        <label>
          <input
            type="checkbox"
            checked={read}
            onChange={() => onReadMessages(id)}
          />
        </label>
      </Chatinterface>

      <ChatButton onClick={() => onDelete(id)}></ChatButton>
    </ChatContainer>
  );
};

// styled-components
const GlobalStyle = createGlobalStyle`
*{  margin: 0;
    padding: 0;
    box-sizing: border-box;}
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-right: 10px;
  max-height: 70vh;
  overflow-y: auto;
`;

const Span = styled.span`
  font-size: 0.9rem;
  color: #888;
`;

const ChatButton = styled.button`
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNreDbW4N28_smgUgAH9GV6kaYxmrdPpkgfw&s")
    center center/cover no-repeat;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

const Chatinterface = styled.div`
  max-width: 25%;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: larger;
  overflow: hidden;
  word-wrap: break-word;
  white-space: normal;
  background-color: ${({ read }) => (read ? "#e0ffe0" : "#ffe0e0")};
`;
