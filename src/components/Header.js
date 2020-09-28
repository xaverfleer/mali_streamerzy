import React, {useEffect, useState} from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import logo from '../assets/images/logo.svg';
import NavMobile from "./Navigation/NavMobile";
import NavDesktop from "./Navigation/NavDesktop";
import {useWindowDimensions} from "../hooks";

function Header({ siteTitle}) {
    const { width } = useWindowDimensions();
    const [mobileMenuEnabled, setMobileMenuEnabled] = useState(false);

    function toggleMobileNavModal() {
        setMobileMenuEnabled(prev => !prev);
    }

    useEffect(() => {
        if (mobileMenuEnabled && width > 992) {
            setMobileMenuEnabled(false);
        }
    }, [width, mobileMenuEnabled]);

    return <header className="header sticky-top">
        <div className="container">
            <div className="row justify-content-between">
                <Link
                    to="/"
                >
                    <img src={logo} alt="mali streamerzy logo"/>
                </Link>
                <div className="d-lg-none">
                    <NavMobile mobileMenuEnabled={mobileMenuEnabled} toggleMobileNavModal={toggleMobileNavModal} />
                </div>
                <div className="d-none d-lg-flex flex-grow-1">
                    <NavDesktop />
                </div>
            </div>
        </div>
    </header>
}

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
