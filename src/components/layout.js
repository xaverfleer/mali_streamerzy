/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from "./Header";
import '../assets/styles/styles.scss';

function Layout({children}) {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
    `);

    return (
        <div className='site-wrapper'>
            <Header
                siteTitle={data.site.siteMetadata.title}
            />
            <div className='page-body'>
                <div className="container">
                    <main>{children}</main>
                </div>
                <footer>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
            </div>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
