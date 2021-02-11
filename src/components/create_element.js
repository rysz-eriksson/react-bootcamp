import React from 'react';
import ReactDOM from 'react-dom';

const createElemComp = React.createElement(
  "p",
  null,
  "And finally - createElement method"
);

const container = document.getElementById('container');

ReactDOM.render(createElemComp, container);