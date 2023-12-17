import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../page/login.css';
import '../page/responsive.css';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Menggunakan useNavigate

  const containerStyle = {
    backgroundColor: '#E1EAF2',
    position: 'relative',
    width: '100%',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#ABC1E2',
  };

  const navLinkStyle = {
    color: '#000000',
    fontSize: '25px',
    lineHeight: '70px',
    textDecoration: 'none',
    padding: '0 20px',
  };

  const handleLogin = () => {
    if (!email || !password) {
      setErrorMessage('Please fill in both email and password.');
      return;
    }

    // Handle login logic here
    // For now, let's just simulate a successful login
    setErrorMessage('');

    // Simulate a successful login and navigate to /order
    navigate('/order');
  };

  return (
    <div style={containerStyle}>
      <div style={navStyle}>
        <Link to="/" style={navLinkStyle}>
          Home
        </Link>
        <Link to="/order" style={navLinkStyle}>
          Order
        </Link>
        <Link to="/blog" style={navLinkStyle}>
          Blog
        </Link>
      </div>
      <section className="contact-section background">
        <div className="text-wrapper">WELCOME TO LOGIN!</div>
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-left">
              <form>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </form>
              {errorMessage && <div className="error-message">{errorMessage}</div>}
            </div>
            <div className="contact-right">
              <button className="btn style1 w-100 d-block" onClick={handleLogin}>
                LOGIN
              </button>
            </div>
            <div>
              <p className="mb-0">
                Don't have an Account? <Link className="link to" to="/reg">Create One</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
