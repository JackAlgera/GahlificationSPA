import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const axios = require('axios').default;
const DEBUG = process.env.NODE_ENV === "development";

const URL = 'http://localhost:8080/api'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

axios.interceptors.request.use((config: any) => {
  config.url = `${URL}/${config.url}`;
  return config;
}, (error: any) => {
  return Promise.reject(error);
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
