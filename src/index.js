import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//REDUX IMPORTS 
// -store, where my slices/reducers are gathered;
// and -Provider, a wrapper that makes the store available to my app.
import {store} from "./app/store"
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


