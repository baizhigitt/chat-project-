import React from "react";
import chatStyle from "./Chat.module.css";

export const Chat = ({ messages }) => {
  return (
    <div>
      {messages.map((item) => (
        <ChatItem key={item.id} {...item} />
      ))}
    </div>
  );
};

const { chatInterFace, chatContainer } = chatStyle;

const ChatItem = ({ text, time }) => {
  const currentTime = new Date(time).toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={chatContainer}>
      <div className={chatInterFace}>
        <p>{text}</p>
        <span>{currentTime}</span>
      </div>
    </div>
  );
};
