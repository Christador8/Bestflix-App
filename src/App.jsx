import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import TitleCards from './components/TitleCards/TitleCards';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import Player from './pages/Player/Player';
import Signup from './pages/Signup.jsx';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

const navigate = useNavigate();

function App() {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is signed in:", user);
        navigate('/');
      } else {
        console.log("No user is signed in.");
        navigate('/login');
      }
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
        <Route path="*" element={<h2 style={{ color: 'white' }}>404 - Page Not Found</h2>} />
      </Routes>
      {/* <Footer /> — uncomment this if you want the footer always visible */}
    </Router>
  );
}

export default App;
