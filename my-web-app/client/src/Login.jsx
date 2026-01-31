import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './assets/image/logo.webp'; 
import './assets/css/login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@neoera.com" && password === "admin123") {
      navigate('/dashboard');
    } else {
      alert("Invalid credentials. Try admin@neoera.com / admin123");
    }
  };

  return (
    <div className="login-wrapper">
      {/* Left Column: Graphical Branding */}
      <div className="login-brand-side">
        <div className="graphics-overlay">
          <div className="shape circle-lg"></div>
          <div className="shape circle-sm"></div>
        </div>
        <div className="brand-content">
          <h1>Empowering people through seamless HR management.</h1>
          <p>Efficiently manage your workforce, streamline operations effortlessly.</p>
        </div>
      </div>

      {/* Right Column: Clean Form */}
      <div className="login-form-side">
        <div className="login-form-container">
          <div className="logo-center">
            <img src={logo} alt="Workack" className="logo-premium" />
          </div>
          
          <div className="login-header">
            <h2>Sign In</h2>
            <p>Please enter your details to sign in</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email Address</label>
              <div className="input-box">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  required 
                />
                <span className="icon">✉</span>
              </div>
            </div>

            <div className="form-group">
              <div className="label-split">
                <label>Password</label>
                <a href="#" className="forgot-pass">Forgot Password?</a>
              </div>
              <div className="input-box">
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password" 
                  required 
                />
                <span className="icon">👁</span>
              </div>
            </div>

            <div className="form-extra">
              <label className="remember-me-label">
                <input type="checkbox" />
                <span className="checkmark"></span>
                <span className="text-visible">Remember Me</span>
              </label>
            </div>

            <button type="submit" className="btn-orange-full">Sign In</button>
          </form>

          <div className="form-footer-new">
            <p>Don't have an account? <a href="#" className="orange-text">Create Account</a></p>
            <p className="copyright-bottom">Copyright © 2026 - SmartHR</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;