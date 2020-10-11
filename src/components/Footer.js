import React from 'react';
import Img from 'gatsby-image';
import {useStaticQuery} from 'gatsby';

function Footer() {

  const data = useStaticQuery(graphql`
    query{
      logo: file(relativePath: { eq: "footer-logo.png" }) {
        childImageSharp {
            fixed(width: 157, height: 26) {
                ...GatsbyImageSharpFixed
            }
        }
      }
    }
  `);

  return <footer className="footer">
      <div className="container">
        <div className="row justify-content-between">
          <div>
            <Img fixed={data.logo.childImageSharp.fixed} />
          </div>
          <div>
            2020 Wszelkie prawa zastrzeżone.
          </div>
        </div>
      </div>
  </footer>
}

export default Footer;
