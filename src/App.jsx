import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import TitleCards from './components/TitleCards/TitleCards';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login'; // ✅ Add this
import Player from './pages/Player/Player'; // ✅ Add this

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
        <Route path="*" element={<h2 style={{ color: 'white' }}>404 - Page Not Found</h2>} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;