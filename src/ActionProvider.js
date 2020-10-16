import socketIOClient from "socket.io-client";
import React, { useState, useEffect, useMemo } from "react";

const ENDPOINT = "http://127.0.0.1:3001";
const socket = socketIOClient(ENDPOINT);

class ActionProvider extends React.Component{
  constructor(createChatBotMessage, setStateFunc) {
    super();
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  
  }

  // new method
  // greet(text) {
  //   // const greetingMessage = this.createChatBotMessage("H", { widget: "Slider"});
  //   // this.updateChatbotState(greetingMessage);
  //   socket.emit("inputMsg", text);
  //   socket.on("outputMsg", (data)=> {
  //     console.log("recieved message", data);
  //     const message = this.createChatBotMessage(data.text, {
  //       widget: "Slider",
  //     });
  //     this.updateChatbotState(message);
  //   })
  // }

  getNextQuestion = (data) => {
    socket.emit("inputMsg", data);
    socket.once("outputMsg", (data) => {
      const message = this.createChatBotMessage(data.text, {
        widget: data.type,
      });
      this.updateChatbotState(message);
      console.log(data.text)
    });

  }

  // handleButtonEvent = (text) => {
  //   const socket = socketIOClient(ENDPOINT);
  //   socket.emit("inputMsg", text);
  //   socket.on("outputMsg", (data) => {
  //     const message = this.createChatBotMessage(data.text, {
  //       widget: "Slider",
  //     });
  //     console.log("recieved message", data);
  //     this.updateChatbotState(message);
  //   });
  // };

  updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
