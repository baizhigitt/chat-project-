import { Chat } from "./components/chat/Chat";
import { ChatInput } from "./components/UI/ChatInput";
import { UserInfo } from "./components/userInfo/UserInfo";
import {
  deleteMessages,
  fetchMessages,
  updateMessagePatch,
  postMessage,
} from "./api/Api";

import { useCallback, useEffect, useState } from "react";
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

  useEffect(() => {
    const loadMessages = async () => {
      const data = await fetchMessages();
      const sorted = data.sort((a, b) => new Date(a.time) - new Date(b.time));
      setMessages(sorted);
    };
    loadMessages();
  }, []);

  const transferArray = useCallback(
    async (newMessage) => {
      const savedMessage = await postMessage(newMessage);
      setMessages((prev) => [...prev, savedMessage]);
    },
    [setMessages]
  );

  const deleteMessage = useCallback(
    async (id) => {
      await deleteMessages(id);
      setMessages((prev) => prev.filter((item) => item.id !== id));
    },
    [setMessages]
  );

  const removeAllMessages = useCallback(() => {
    setMessages([]);
  }, []);

  const isReadMessages = useCallback(
    async (id) => {
      const updatedMessages = messages.map((item) =>
        item.id === id ? { ...item, read: !item.read } : item
      );
      setMessages(updatedMessages);

      const currentMessage = messages.find((item) => item.id === id);

      if (currentMessage) {
        await updateMessagePatch(id, { read: !currentMessage.read });
      }
    },
    [messages]
  );

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
