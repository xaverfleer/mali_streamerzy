import React from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';

import { MENU_ELEMENTS } from './config';

function NavMobile({ mobileMenuEnabled, toggleMobileNavModal }) {
    return <div className={classnames("nav-container-mobile", {
        'is-enabled': mobileMenuEnabled,
    })}>
        <nav className="main-nav">
            <ul className="navbar">
                {MENU_ELEMENTS.map((element) => <li>
                    <Link
                        to={element.link}
                        activeClassName="active"
                        className="text-uppercase"
                    >
                        {element.title}
                    </Link>
                </li>)}
            </ul>
        </nav>
        <button
            onClick={toggleMobileNavModal}
            id="burger"
            className="open-main-nav"
        >
            <span className="burger" />
            <span className="burger-text">Menu</span>
        </button>
    </div>
}

export default NavMobile;
