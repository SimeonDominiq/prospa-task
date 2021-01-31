import Dashboard from 'components/Dashboard';

const Routes = [
    {
        path: '/dashboard',
        exact: true,
        auth: false,
        component: Dashboard,
    },
];

export default Routes;
