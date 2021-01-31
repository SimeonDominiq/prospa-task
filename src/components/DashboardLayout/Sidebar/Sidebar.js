import React from 'react';
// import { Link } from 'react-router-dom';
import Icon from 'components/Icons';
import './Sidebar.scss';

/**
 * Sidebar
 */
const Sidebar = () => {
    return (
        <nav className="sideBar">
            <ul className="navbar-nav bg-gradient-primary sidebar-dark">
                <li>
                    <div className="media userDetails align-items-center">
                        <div className="userAvatar mr-2">
                            <span>CE</span>
                        </div>

                        <div className="media-body">
                            <div className="float-right btnDropdown">
                                <button
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                    className="btn"
                                    data-toggle="dropdown"
                                    type="button"
                                >
                                    <Icon name="arrow-down" />
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <button
                                        className="dropdown-item"
                                        type="button"
                                    >
                                        Clayvant Inc
                                    </button>
                                    <button
                                        className="dropdown-item"
                                        type="button"
                                    >
                                        Business Name 1
                                    </button>
                                    <button
                                        className="dropdown-item"
                                        type="button"
                                    >
                                        Business Name 2
                                    </button>
                                </div>
                            </div>
                            <div>
                                <h6 className="text-truncate mb-1">Clayvant Inc</h6>
                                <span className="text-bali-hai">Manage account</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
