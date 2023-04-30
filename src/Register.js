import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Register() {
  return (
    <div className="container">
      <Navbar />
      <div className="row">
        <div className="col-md-6 mx-auto mt-5">
          <div className="card">
            <div className="card-header">
              <h1 className="h3 mb-0">Register</h1>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input type="text" className="form-control" name="name" id="name" />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="email">Email address</label>
                  <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="password">Password</label>
                  <input type="password" className="form-control" name="password" id="password" />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="occupation">Occupation</label>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Choose Occupation</option>
                    <option value="1">Student</option>
                    <option value="2">Professional</option>
                  </select>
                </div>
                <Link to="/login" className="btn btn-primary">Register</Link>
              </form>
            </div>
            <div className="card-footer">
              <p className="text-muted">
                Already have an account? <Link to="/login" className="text-decoration-none">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
