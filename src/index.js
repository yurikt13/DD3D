import React from 'react';
import ReactDOM from 'react-dom';
import App1 from './pages/App1'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
  <React.StrictMode>
    <App1 />
  </React.StrictMode>, 
  document.getElementById('root')
)