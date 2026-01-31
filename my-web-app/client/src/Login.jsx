import React, { useState } from 'react';
import './assets/css/login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Later, we will connect this to your Node.js /api/login route
    console.log("Logging in with:", email, password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Peoplora Login</h2>
        <p>Enter your Neoera Infotech credentials</p>
        
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="name@neoera.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          
          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <button type="submit" className="login-btn">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;