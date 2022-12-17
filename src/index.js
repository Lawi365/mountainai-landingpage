import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Start from './components/Start';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Start/>
<Footer/>
  </React.StrictMode>
);
