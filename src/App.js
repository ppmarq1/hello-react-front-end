import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Greeting from './components/greeting';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <Link to="/" />
      </nav>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>

    </div>
  );
}
export default App;
