import React, { useEffect } from "react";
import "./Text.css";
import socketIOClient from "socket.io-client";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const ENDPOINT = "http://127.0.0.1:3001";

const TextComponent = (props) => {
    const socket = socketIOClient(ENDPOINT);
    // socket.emit("inputMsg","hi")

    // socket.on("outputMsg", (data)=>{
    //     props.actionProvider.getNextQuestion(data)
    // })

  return <div></div>

};

export default TextComponent;

