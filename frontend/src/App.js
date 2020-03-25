import React from 'react';

import './global.css';

import Routes from './routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

function App() {
  return (
    <>
      <Routes />
      <ToastContainer autoClose={4000} />
    </>
  );
}

export default App;
