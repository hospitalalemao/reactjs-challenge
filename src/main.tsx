import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BrazilPage from './pages/BrazilPage';
import HomePage from './pages/HomePage';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/brazil" element={<BrazilPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
