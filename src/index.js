import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from "redux-persist";

const root = ReactDOM.createRoot(document.getElementById('root'));
let persistor = persistStore(store);

root.render(
  <React.StrictMode>
  <Provider store={store}>
  <PersistGate loadin={null} persistor={persistor}>
  <BrowserRouter>
    <Router />
  </BrowserRouter>
  </PersistGate>
  </Provider>
  </React.StrictMode>
);



