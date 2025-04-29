import { useState } from "react";
import chatInputStyle from "./ChatInput.module.css";

const { chatSection, inputField, sendBtn } = chatInputStyle;

export const ChatInput = ({ transferUp }) => {
  const [value, setValue] = useState("");

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

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className={chatSection}>
          <input
            onChange={valueChangeHandler}
            className={inputField}
            type="text"
            placeholder="type a message..."
            value={value}
          />
          {value && <Button />}
        </div>
      </form>
    </div>
  );
};

const Button = () => {
  return (
    <div>
      <button className={sendBtn} type="submit"></button>
    </div>
  );
};
