import { Chat } from "./components/chat/Chat";
import { ChatInput } from "./components/UI/ChatInput";
import { UserInfo } from "./components/userInfo/UserInfo";
import appStyle from "./components/App.module.css";
import { useState } from "react";

//  SCROLL   КЫЛА

//  АЛБАЙ    КОЙДУМ

const { innerAppcontainer, appContainer } = appStyle;

const CONVERSATION = [
  {
    id: "f1",
    text: "Hello, Jasmina",
    time: new Date(),
  },
];

export const App = () => {
  const [newMessage, setNewMessage] = useState(CONVERSATION);

  const transferArray = (transferMessages) => {
    // 1-WAY

    // const report = [...newMessage];
    // report.push(transferMessages);
    // setNewMessage(report);

    // 2 -WAY

    // const report = [...newMessage, transferMessages];
    // setNewMessage(newMessage);

    // 3 - WAY

    // setNewMessage((prev) => [...prev, transferMessages]);

    setNewMessage((prev) => {
      return [...prev, transferMessages];
    });
  };

  return (
    <div>
      <div className={appContainer}>
        <div className={innerAppcontainer}>
          <UserInfo nameUserInfo={"Jasmina"} />
          <Chat messages={newMessage} />
          <ChatInput transferUp={transferArray} />
        </div>
      </div>
    </div>
  );
};
export default App;
