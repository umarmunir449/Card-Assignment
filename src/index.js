import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from'./Mycomponents/Header';
import './App.css';
import  {MediaPage} from './Mycomponents/MediaPage';
import {MediaCard} from './Mycomponents/MediaCard'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
   <MediaPage/>
    <MediaCard/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
