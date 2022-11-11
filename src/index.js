/* eslint-disable */
import React from 'react';
import { createRoot } from 'react-dom/client';
import './functionBased/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from './functionBased/component/container';
import About from './functionBased/component/About';
import NotMatch from './functionBased/component/NotMatch';


const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Container />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<NotMatch />} />
    </Routes>
  
    </BrowserRouter>
  </React.StrictMode>,
);
