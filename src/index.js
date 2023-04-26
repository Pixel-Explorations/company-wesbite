import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navigation from './components/Navigation';
import Mountain from './components/Mountain';
import Services from './components/Services.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Navigation />
    <Mountain />
    <Services />
  </React.StrictMode>
);