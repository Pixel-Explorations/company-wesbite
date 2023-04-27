import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navigation from './components/Navigation';
import Services from './components/Services.jsx';
import AllMountains from './components/Mountains/AllMountains';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Navigation />
    <AllMountains />
    <Services />
  </React.StrictMode>
);