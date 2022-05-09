import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import Routes from './Front/Routes';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
axios.defaults.baseURL ='http://192.168.1.7:3001/';

const root = ReactDOM.createRoot(document.getElementById("root"));
const options = {
  position: 'bottom center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
}

root.render(
  <AlertProvider template={AlertTemplate} {...options}>
  <React.StrictMode>
    <Suspense fallback={<span>Loading...</span>}/>
    
    <Routes/>
  </React.StrictMode>
  </AlertProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();