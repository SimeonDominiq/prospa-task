/* eslint-disable max-len */
import React, { Component } from 'react';
import './AuthLayout.scss';

/**
 * AuthLayout class
 */
class AuthLayout extends Component {
    /**
     * React Render
     * @returns {Component} React component
     */
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 d-none d-lg-block px-0 position-relative">
                        <div className="AuthSidebar p-lg-5">
                            <h1 className="logo">prospa</h1>

                            <div className="brokenLines">
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                            </div>

                            <h2>Create multiple sub-account</h2>
                            <h6>Organise your business finances easily with multiple accounts. No limits!</h6>

                            <div className="py-5">
                                <img
                                    className="img-fluid"
                                    src="https://res.cloudinary.com/dl6g3t9xf/image/upload/v1612128294/propsa_mvoms4.png"
                                />
                            </div>

                            <div className="copyWright">
                                <h6 className="mb-0 text-white font-weight-medium">&copy; 2020 Prospa Inc</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-9 px-lg-0 py-lg-5">{this.props.children}</div>
                </div>
            </div>
        );
    }
}

export default AuthLayout;
