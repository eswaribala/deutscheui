import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from "react-router-dom";
var app=(
    <HashRouter basename={"/banking-app"}>

            <App />

    </HashRouter>
)
ReactDOM.render(
  app,
  document.getElementById('startup')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
