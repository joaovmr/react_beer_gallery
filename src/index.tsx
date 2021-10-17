import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './components/store';
import App from './components/dataDisplay/App';


ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App></App>  
  </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);
