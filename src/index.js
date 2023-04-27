import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navigation from './components/Navigation';
import Services from './components/Services.jsx';
import MountainFour from './components/Mountains/MountainFour';
import MountainOne from './components/Mountains/MountainOne';
import MountainThree from './components/Mountains/MountainThree';
import MountainTwo from './components/Mountains/MountainTwo';
import MountainZero from './components/Mountains/MountainZero';
import MountainFive from './components/Mountains/MountainFive';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Navigation />
    <MountainZero />
    <MountainTwo />
    <MountainOne />
    <MountainFive />
    <MountainThree />
    <MountainFour />
    <Services />
  </React.StrictMode>
);