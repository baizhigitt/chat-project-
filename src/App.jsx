import { Chat } from "./components/chat/Chat";
import { ChatInput } from "./components/UI/ChatInput";
import { UserInfo } from "./components/userInfo/UserInfo";

import { useState } from "react";
import styled from "styled-components";

const CONVERSATION = [
  {
    id: "f1",
    text: "Hello, Jasmina",
    time: new Date(),
    read: false,
  },
];

export const App = () => {
  const [messages, setMessages] = useState(CONVERSATION);

  const transferArray = (transferMessages) => {
    setMessages((prev) => {
      return [...prev, transferMessages];
    });
  };

  const deleteMessage = (id) => {
    setMessages((prev) => prev.filter((item) => item.id !== id));
  };

  const removeAllMessages = () => {
    setMessages([]);
  };

  const isReadMessages = (id) => {
    setMessages((prev) => {
      return prev.map((item) =>
        item.id === id ? { ...item, read: !item.read } : item
      );
    });
  };

  return (
    <div>
      <InnerAppContainer>
        <UserInfo nameUserInfo={"Jasmina"} />
        <Chat
          messages={messages}
          onDelete={deleteMessage}
          onReadMessages={isReadMessages}
        />
        <ChatInput
          transferUp={transferArray}
          removeAllMessages={removeAllMessages}
        />
      </InnerAppContainer>
    </div>
  );
};
export default App;

const InnerAppContainer = styled.div`
  width: 1000px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  background: url("https://i.pinimg.com/736x/d2/bf/d3/d2bfd3ea45910c01255ae022181148c4.jpg")
    center center/cover no-repeat;
  min-height: 90vh;
  padding: 20px;
`;
