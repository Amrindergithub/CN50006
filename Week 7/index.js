/* eslint-disable react/jsx-pascal-case */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Hook_ControlledButtonState from "./Counter"; // Task 1: Click Counter Component
import EmojeeCounter from "./EmojeeCounters"; // Task 2: Emoji Counter Component
import TextboxLabel from "./TextBoxLabel.js"; // Task 3: Textbox and Label Component

ReactDOM.render(
  <React.StrictMode>
    {/* Task 1: Click Counter Component */}
    <Hook_ControlledButtonState />

    {/* Task 2: Emoji Counter Components */}
    <EmojeeCounter pic="Love.png" />
    <EmojeeCounter pic="sad.png" />
    <EmojeeCounter pic="like.png" />

    {/* Task 3: Textbox and Label Component */}
    <TextboxLabel />
  </React.StrictMode>,
  document.getElementById("root")
);