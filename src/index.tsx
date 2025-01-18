// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// React Router
import { BrowserRouter } from "react-router-dom";

// Redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

// App
import App from './App';

// Styles
import './index.css';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
