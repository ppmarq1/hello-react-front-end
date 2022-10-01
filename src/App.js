import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Greeting from './components/greeting';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  );
}
