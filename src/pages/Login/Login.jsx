import React from 'react';
import './Login.css';
import logo from '../../assets/logo.png';

const Login = () => {
  return (
    <div className="login">
      {/* Logo */}
      <img src={logo} alt="Bestflix Logo" className="login-logo" />

      {/* Login Form */}
      <div className="login-form">
        <h1>Sign In</h1>
        <form>
          <input type="email" placeholder="Email or phone number" required />
          <input type="password" placeholder="Password" required />
          
          <button type="submit">Sign In</button>

          <div className="login-remember">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>
        </form>

        {/* Options */}
        <div className="login-options">
          <p>
            New to Bestflix? <a href="/signup">Sign up now</a>
          </p>
          <p>
            <a href="/help">Need help?</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
