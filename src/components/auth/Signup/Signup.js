import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../AuthLayout';
import Button from 'utils/Button';
import { history } from 'libs/history';

/**
 * Signup
 */
class Signup extends Component {
    handleFormSubmit = (e) => {
        e.preventDefault();

        history.push('/complete-signup');
    };

    /**
     * React Render
     * @returns {Component} React component
     */
    render() {
        return (
            <AuthLayout>
                <div className="text-right px-lg-5 topLink">
                    <h6>
                        Already a member? <Link to="/signin">Signin</Link>
                    </h6>
                </div>

                <div className="row justify-content-center AuthContentWrapper">
                    <div className="col-lg-4">
                        <h4>Create your account</h4>
                        <p>A short description about account types</p>

                        <div className="AuthFormWrapper mt-5">
                            <form onSubmit={(e) => this.handleFormSubmit(e)}>
                                <div className="form-group">
                                    <div className="group">
                                        <input
                                            className="form-control"
                                            required
                                            type="text"
                                        />
                                        <span className="highlight" />
                                        <span className="bar" />
                                        <label>First name</label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="group">
                                        <input
                                            className="form-control"
                                            required
                                            type="text"
                                        />
                                        <span className="highlight" />
                                        <span className="bar" />
                                        <label>Last name</label>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <div className="group">
                                                <select className="form-control">
                                                    <option value="+233">+233</option>
                                                    <option value="+234">+234</option>
                                                </select>
                                                <span className="highlight" />
                                                <span className="bar" />
                                                <label>Country</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="form-group">
                                            <div className="group">
                                                <input
                                                    className="form-control"
                                                    required
                                                    type="tel"
                                                />
                                                <span className="highlight" />
                                                <span className="bar" />
                                                <label>Mobile number</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="group">
                                        <input
                                            className="form-control"
                                            required
                                            type="email"
                                        />
                                        <span className="highlight" />
                                        <span className="bar" />
                                        <label>Email Address</label>
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

export default Signup;
