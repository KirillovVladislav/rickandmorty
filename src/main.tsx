import { ApiProvider } from '@reduxjs/toolkit/query/react';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { api } from './services/characters';

ReactDOM.render(
  <ApiProvider api={api}>
    <App />
  </ApiProvider>,
  document.getElementById('root'),
);
