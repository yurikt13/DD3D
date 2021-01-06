import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactDOM from 'react-dom';
import App from './routes/App';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, 
  document.getElementById('root')
)