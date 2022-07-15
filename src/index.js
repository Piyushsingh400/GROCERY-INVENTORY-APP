import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ItemProvider } from './Context';
import App from './App';


ReactDOM.render(
  <ItemProvider>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ItemProvider>
  ,
  document.getElementById('root')
);