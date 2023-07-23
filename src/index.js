import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import StatusProvider from './context/StatusContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StatusProvider>
        <App />
      </StatusProvider>
    </BrowserRouter>
  </React.StrictMode>
);

function emitNewThread() {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent("9999", {
        detail: Math.floor(Math.random() * 10000)
      })
    )
  }, 5 * 60 * 1000)
}

emitNewThread();