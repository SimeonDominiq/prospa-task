/* eslint-disable indent */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../AuthLayout';
import CustomRadioReveal from 'utils/CustomRadioReveal';
import { isNotEmptyArray } from 'libs/utils';
import Button from 'utils/Button';

const AccountTypes = [
    {
        id: 1,
        label: 'I have a registered business / charity with CAC',
        span: 'As a registered business you’ll get:',
        benefits: [
            {
                id: 2,
                text: 'Account in your business name',
            },
            {
                id: 3,
                text: 'Send to and receive transfers from all Nigerian banks',
            },
            {
                id: 4,
                text: 'Tools for business management',
            },
        ],
    },
    {
        id: 2,
        label: 'My business is not yet registered, I would like to register',
        span: 'Everything you need to start your business:',
        benefits: [
            {
                id: 12,
                text: 'Registered business name with the CAC',
            },
            {
                id: 13,
                text: 'Tax identification number',
            },
            {
                id: 14,
                text: 'Your account will be automatically opened on completion',
            },
        ],
    },
    {
        id: 3,
        label: 'I’m a freelancer I do business in my personal name',
        span: 'As a registered business you’ll get:',
        benefits: [
            {
                id: 22,
                text: 'Account in your business name',
            },
            {
                id: 23,
                text: 'Send to and receive transfers from all Nigerian banks',
            },
            {
                id: 24,
                text: 'Tools for business management',
            },
        ],
    },
];

/**
 * CompleteSignup class
 */
class CompleteSignup extends Component {
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
                    <div className="col-lg-5">
                        <h4>Create your account</h4>
                        <p>A short description about account types</p>

                        <div className="AuthFormWrapper mt-5">
                            {isNotEmptyArray(AccountTypes) &&
                                AccountTypes.map((type, _i) => {
                                    return <CustomRadioReveal
account={type}
key={_i}
                                           />;
                                })}

                            <div className="form-group mt-5">
                                <Button
className="btn btn-block btnLarge btnPrimaryViolet"
type="submit"
                                >
                                    Next
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthLayout>
        );
    }
}

export default CompleteSignup;
