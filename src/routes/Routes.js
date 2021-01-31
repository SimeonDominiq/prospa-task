import Login from 'components/auth/Login';
import Signup from 'components/auth/Signup';
import CompleteSignup from 'components/auth/CompleteSignup';

const Routes = [
    {
        path: '/signin',
        exact: true,
        auth: false,
        component: Login,
    },
    {
        path: '/signup',
        exact: true,
        auth: false,
        component: Signup,
    },
    {
        path: '/complete-signup',
        exact: true,
        auth: false,
        component: CompleteSignup,
    },
];

export default Routes;
