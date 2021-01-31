import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/Icons';
import './Header.scss';

const Header = () => {
    return (
        <nav className="navbar navbar-expand bgWhite topBar mb-4">
            <div className="hamburger">
                <h5 className="text-bali-hai mb-0">Dashboard</h5>
            </div>

            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link
                        className="notifications mr-3"
                        to="/settings/profile"
                    >
                        <Icon name="notification-icon" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
