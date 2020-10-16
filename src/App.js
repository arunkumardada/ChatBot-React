import React, { useState, useEffect, useMemo } from "react";
import Chatbot from "react-chatbot-kit";
import "./App.css";
import socketIOClient from "socket.io-client";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import config from "./config";
import chatIcon from "../src/assets/chaticon.png";
import { createChatBotMessage } from "react-chatbot-kit";

const ENDPOINT = "https://ssachatbot.cloud.pcftest.com";
const socket = socketIOClient();

function App() {
  const [toggleIcon, setToggleIcon] = useState(true);
  //Component Did Mount Events
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    //Socket on Recieve Messages
    // socket.on("outputMsg", (data) => {
    //   // setMessages(data);

    // });
  }, []);

  const onToggleChatIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div className="App">
      <header className="App-header">
        {toggleIcon ? (
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        ) : null}

        <div className="chat-icon">
          <img
            src={chatIcon}
            name="chatbot-ssa"
            style={{ width: "70px", cursor: "pointer" }}
            onClick={onToggleChatIcon}
          ></img>
        </div>
      </header>
    </div>
  );
}

export default App;
