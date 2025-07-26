import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import logo from '../../assets/logo.png';
import { user_auth, google_auth } from '../../firebase'; // ✅ Correct import

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await user_auth(email, password);
      console.log("User signed in:", user);
      navigate('/home');
    } catch (error) {
      console.error("Authentication error:", error.message);
      alert(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const user = await google_auth();
      console.log("Google user:", user);
      navigate('/home');
    } catch (error) {
      console.error("Google sign-in error:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="login">
      {/* Logo */}
      <img src={logo} alt="Bestflix Logo" className="login-logo" />

      {/* Login Form */}
      <div className="login-form">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email or phone number"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign In</button>

          <div className="login-remember">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>
        </form>

        {/* Google Sign-In Button */}
        <button className="google-signin" onClick={handleGoogleSignIn}>
          Sign in with Google
        </button>

        {/* Options */}
        <div className="login-options">
          <p>
            New to Bestflix? <Link to="/signup">Sign up now</Link>
          </p>
          <p>
            <Link to="/help">Need help?</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
