import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Profile from './Profile';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setEmail(e.target.email.value);
    navigate('/profile', { state: { email: e.target.email.value } });
  };

  return (
    <div className="container">
      <Navbar />
      <div className="row">
        <div className="col-md-6 mx-auto mt-5">
          <div className="card">
            <div className="card-header">
              <h1 className="h3 mb-0">Login</h1>
            </div>
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="email">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    aria-describedby="emailHelp"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
            </div>
            <div className="card-footer">
              <p className="text-muted">
                Don't have an account?{' '}
                <Link to="/register" className="text-decoration-none">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {email && <Profile email={email} />}
    </div>
  );
}

export default Login;
