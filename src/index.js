import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BoardContext } from './contexts/BoardContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <BoardContext>
          <App />
        </BoardContext>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);

reportWebVitals();
