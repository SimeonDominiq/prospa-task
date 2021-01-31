import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { history } from 'libs/history';
import routes from './routes';
import ScrollTop from 'hoc/ScrollTop';
import DashboardLayout from 'components/DashboardLayout';
import './App.scss';

const NotFound = () => 'Not Found';

/**
 * App
 */
function App() {
    return (
        <Router history={history}>
            <ScrollTop>
                <Switch>
                    <Route
                        component={() => <Redirect to="/signin" />}
                        exact
                        path="/"
                    />
                    {routes()}
                    <Route
                        component={DashboardLayout}
                        path="/*"
                    />
                    <Route
                        exact
                        path="*"
                        render={() => <NotFound />}
                    />
                </Switch>
            </ScrollTop>
        </Router>
    );
}

export default App;
