import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Navbar from './landing_page/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <h1>Hello</h1>
      < Navbar />
    </div>
  </React.StrictMode>
);