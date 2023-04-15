// create a login & registration form using Bootstrap 5

import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card">
                        <div className="card-header">
                            <h1 className="h3 mb-0">Login</h1>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="email">Email address</label>
                                    <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="password">Password</label>
                                    <input type="password" className="form-control" name="password" id="password" />
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                        </div>
                        <div className="card-footer">
                            <p className="text-muted">
                                Don't have an account? <Link to="/register" className="text-decoration-none">Register</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;