// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// React Router
import { BrowserRouter } from "react-router-dom";

// App
import App from './App';

// Styles
import './index.css';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
