import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/authcontext';
import reportWebVitals from './reportWebVitals';
import { Buffer } from 'buffer';

/* ✅ AOS IMPORT (ADDED) */
import AOS from "aos";
import "aos/dist/aos.css";

/* ✅ AOS INIT (ADDED) */
AOS.init({
  duration: 900,
  easing: "ease-in-out",
  once: false,
  mirror: true,
});

// This makes the Buffer object available globally in the browser
window.Buffer = Buffer;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);

reportWebVitals();
