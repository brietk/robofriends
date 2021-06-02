import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './robots'; // {} af því fæll exportar ekki default einu

ReactDOM.render(
                <CardList robots={robots} />
, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 