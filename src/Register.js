// create a registration page using bootstrap 5

import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto">
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
                                <button type="submit" className="btn btn-primary">Register</button>
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
    )
}

export default Register;