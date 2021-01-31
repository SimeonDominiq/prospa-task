import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import routes from './routes';
import { history } from 'libs/history';
import './DashboardLayout.scss';

const NotFound = () => 'Not Found';

/**
 * DashboardLayout class
 */
class DashboardLayout extends Component {
    /**
     * React Render
     * @returns {Component} React component
     */
    render() {
        return (
            <div id="wrapper">
                <Sidebar />
                <div
                    className="d-flex flex-column"
                    id="contentWrapper"
                >
                    <Header />

                    <div className="container-fluid my-4 px-4">
                        <Router history={history}>
                            <Switch>
                                {routes()}
                                <Route
                                    exact
                                    path="*"
                                    render={() => <NotFound />}
                                />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardLayout;
