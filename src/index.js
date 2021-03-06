import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import createElemComp from './components/create_element';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const container = document.getElementById('container');

ReactDOM.render(createElemComp, container);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
