import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignIn } from "../firebase";
import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await SignIn(name, email, password);
      navigate("/home");
    } catch (error) {
      console.error("Signup failed:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="signup">
      <div className="signup-form">
        <h1>Create your Bestflix account</h1>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
