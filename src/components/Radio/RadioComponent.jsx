import React, { useEffect } from "react";
import "./RadioComponent.css";
import socketIOClient from "socket.io-client";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import clsx from "clsx";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const ENDPOINT = "http://127.0.0.1:3001";
const socket = socketIOClient(ENDPOINT);

const RadioComponent = (props) => {
    const [selectedValue, setSelectedValue] = React.useState('a');

  const options = [
    {
      text: "Yes",
      id: 1,
    },
    { text: "No", id: 2 },
  ];

  const onChangeRadioHandler = (e) => {
    e.preventDefault()
    props.actionProvider.getNextQuestion(e.target.value);
  };

  const optionsMarkup = options.map((option) => (
    <FormControlLabel value="end" control={<Radio value={option.text} color="primary" id={option.id} name={option.text} onChange={onChangeRadioHandler} />} label={option.text} />
  ));

  return (
    <div className="radio-bot-container">
      <FormControl component="fieldset">
        <RadioGroup aria-label="gender" name="customized-radios">
          {optionsMarkup}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default RadioComponent;
