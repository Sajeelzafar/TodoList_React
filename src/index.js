import React from 'react';
import { createRoot } from 'react-dom/client';
import './functionBased/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from './functionBased/component/container';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Container />
    </Router>
  </React.StrictMode>,
);
