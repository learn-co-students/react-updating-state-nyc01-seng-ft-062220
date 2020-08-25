import React from 'react';
import ReactDOM from 'react-dom';
import LightSwitch from "./components/ClickityClick";
import ButtonCounter from "./components/ButtonCounter";

ReactDOM.render(
  <div>
    Mount Components Here
    <LightSwitch />
    <ButtonCounter />

  </div>,
  document.getElementById('root')
);
