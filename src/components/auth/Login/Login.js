/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../AuthLayout';
import Button from 'utils/Button';

/**
 * Login class
 */
class Login extends Component {
    /**
     * React Render
     * @returns {Component} React component
     */
    render() {
        return (
            <AuthLayout>
                <div className="text-right px-lg-5 topLink">
                    <h6>
                        Don't have an account? <Link to="/signup">Signup</Link>
                    </h6>
                </div>

                <div className="row justify-content-center AuthContentWrapper">
                    <div className="col-lg-4">
                        <h4>Welcome back to Prospa</h4>
                        <p>An account, with powerful, personalised tools all in one place</p>

                        <div className="AuthFormWrapper mt-5">
                            <form>
                                <div className="form-group">
                                    <div className="group">
                                        <input
                                            className="form-control"
                                            required
                                            type="text"
                                        />
                                        <span className="highlight" />
                                        <span className="bar" />
                                        <label>Email address</label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="group">
                                        <input
                                            className="form-control"
                                            required
                                            type="password"
                                        />
                                        <span className="highlight" />
                                        <span className="bar" />
                                        <label>Enter password</label>
                                    </div>
                                </div>

                                <div className="form-group mt-5">
                                    <Button
                                        className="btn btn-block btnLarge btnPrimaryViolet"
                                        type="submit"
                                    >
                                        Next
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </AuthLayout>
        );
    }
}

export default Login;
