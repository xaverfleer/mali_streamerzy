import React from 'react';
import { Link } from 'gatsby';

import { MENU_ELEMENTS } from './config';

function NavDesktop() {
    return <div className="nav-container-desktop">
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
    </div>;
}

export default NavDesktop;
