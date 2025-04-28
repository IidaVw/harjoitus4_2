import React from 'react';
import ReactDOM from 'react-dom/client';  // Note the 'react-dom/client' import
import './index.css';  // Optional: If you want to use styles
import App from './App';

// For React 18+, use createRoot instead of render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
