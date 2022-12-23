import React from 'react';
import { Provider } from 'react-redux';

import App from './components/app/App';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style/index.scss';

import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById("root");

  const root = createRoot(rootElement);
  root.render(<Provider tab="home" store={store}><App /></Provider>);



