import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './Store';
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <PersistGate loadin={null} persistor={persistor}></PersistGate>
  <BrowserRouter>
  <React.StrictMode>
    <Router />
  </React.StrictMode>
  </BrowserRouter>
  </Provider>
);


