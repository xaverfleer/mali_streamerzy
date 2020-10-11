import React from 'react';
import Layout from "../components/layout";
import {useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';

function ContactPage(props) {
    const data = useStaticQuery(graphql`
      query{
        logo: file(relativePath: { eq: "logotype.png" }) {
          childImageSharp {
              fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
              }
          }
        }
      }
    `);

    return <Layout>
        <div className="splash-screen d-flex align-items-center container">
            <div className="row w-100">
                <div className="col">
                    <h1>MASZ JESZCZE JAKIEŚ PYTANIA?</h1>
                    <p>Masz pytanie? Skorzystaj z formularza kontaktowego lub złap nas na discordzie.</p>
                    <p>
                        <button type="button" className="btn btn-primary">SKONTAKTUJ SIĘ</button>
                        <button type="button" className="btn btn-outline-primary">POBIERZ DISCORD</button>
                    </p>
                </div>
                <div className="col">
                    <Img fluid={data.logo.childImageSharp.fluid} />
                </div>
            </div>
        </div>
        <div className="splash-screen d-flex align-items-center container">
            <div className="w-100">
                <h2 className="text-center mb-5">MASZ PYTANIE? <b>SKONTAKTUJ SIĘ Z NAMI</b></h2>
                <form>
                    <div className="d-flex">
                        <div className="form-group col">
                            <label>Imię Nazwisko</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group col">
                            <label>Firma lub organizacja</label>
                            <input
                                type="text"
                                name="company"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="form-group col">
                            <label>Temat</label>
                            <input
                                type="text"
                                name="subject"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group col">
                            <label>Numer kontaktowy</label>
                            <input
                                type="text"
                                name="phonenumber"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="form-group col">
                            <label>Wiadomość</label>
                            <textarea className="form-control" rows="3"></textarea>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="col">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label">Klikając tutaj zgadzasz się z naszą <a>polityką prywatności</a>.</label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </Layout>
}

export default ContactPage;
