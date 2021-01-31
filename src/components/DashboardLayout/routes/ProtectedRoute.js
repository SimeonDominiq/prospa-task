import React from 'react';
import { Route, Redirect } from 'react-router';

/**
 * ProtectedRoute
 * @param {*} param0
 */
const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
            const customerToken = localStorage.getItem('customerToken');
            if (!customerToken) {
                return (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { nextPage: props.location },
                        }}
                    />
                );
            }

            // authorised so return component
            return <Component {...props} />;
        }}
    />
);

export default ProtectedRoute;
