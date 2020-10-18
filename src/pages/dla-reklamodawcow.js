import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from "../components/layout";

import WhyInvestingIsWorth from '../components/RepeatableSections/WhyInvestingIsWorth';

function ForAdvertisersPage() {
    const data = useStaticQuery(graphql`
      query{
        megaphone: file(relativePath: { eq: "megaphone.png" }) {
          childImageSharp {
              fluid(quality: 90, maxWidth: 500) {
                  ...GatsbyImageSharpFluid
              }
          }
        },
        group_of_viewers: file(relativePath: { eq: "group_of_viewers.png" }) {
          childImageSharp {
              fluid(quality: 90, maxWidth: 500) {
                  ...GatsbyImageSharpFluid
              }
          }
        },
        game_screen1: file(relativePath: { eq: "game_screen1.png" }) {
          childImageSharp {
              fluid(quality: 90, maxWidth: 500) {
                  ...GatsbyImageSharpFluid
              }
          }
        },
        game_screen2: file(relativePath: { eq: "game_screen2.png" }) {
          childImageSharp {
              fluid(quality: 90, maxWidth: 500) {
                  ...GatsbyImageSharpFluid
              }
          }
        },
        game_screen3: file(relativePath: { eq: "game_screen3.png" }) {
          childImageSharp {
              fluid(quality: 90, maxWidth: 500) {
                  ...GatsbyImageSharpFluid
              }
          }
        },
      }
    `);

    return <Layout pageClassName="dla-reklamodawcow">
        <div className="splash-screen d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                        <h1>
                            <span className="font-weight-bold">PRZEMYŚLANY </span>
                            SYSTEM REKLAM
                        </h1>
                        <p className="my-3">Dysponujemy własnym systemem reklam na streamach naszych partnerów. <span className="font-weight-bold">Bądz widoczny tam gdzie ludzie sobie ufają.</span></p>
                        <div>
                            <button type="button" className="btn btn-primary mt-3">SKONTAKTUJ SIĘ</button>
                            <button type="button" className="btn btn-outline-primary mt-3">POBIERZ DISCORD</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-4 mt-md-0">
                        <Img fluid={data.megaphone.childImageSharp.fluid} alt="przemyślany system reklam" placeholderStyle={{ visibility: "hidden" }} />
                    </div>
                </div>
            </div>
        </div>
        <div className="content-separator container" />
        <div className="container">
            <div className="row my-5 py-5">
                <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                    <h3 className="font-weight-bold">JEDNA REKLAMA NA WSZYSTKICH STREAMACH</h3>
                    <p className="mb-0">Każdy z naszych streamerów posiada zaprogramowaną przestrzeń reklamową zsynchronizowaną ze sobą. Dzięki czemu Twoja reklama <span className="font-weight-bold">wyświetla się na wszystkich streamach jednocześnie.</span></p>
                </div>
                <div className="col-12 col-md-6 mt-4 mt-md-0">
                    <Img fluid={data.group_of_viewers.childImageSharp.fluid} alt="jednorodna reklama na wszystkich streamach" />
                    {/*<img className="w-100" src={group_of_viewers} alt="przemyślany system reklam"/>*/}
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row my-5 py-5 flex-md-row-reverse">
                <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                    <h3><span className="font-weight-bold">CZASOWA REKLAMA</span> PODCZAS GRY</h3>
                    <p>Podczas rozgrywki każdy streamer ma wydzieloną przestrzeń na której co jakiś czas wyświetla się Twoja reklama.</p>
                </div>
                <div className="col-12 col-md-6 mt-md-0">
                    <Img fluid={data.game_screen1.childImageSharp.fluid} alt="czasowa reklama podczas gry" />
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row my-5 py-5">
                <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                    <h3><span className="font-weight-bold">STAŁA REKLAMA</span> NA SCENACH ROZMÓW</h3>
                    <p>Za każdym razem kiedy nasz streamer rozmawia z czatem ma stałe miejsce na Twoją reklamę.</p>
                </div>
                <div className="col-12 col-md-6 mt-md-0">
                    <Img fluid={data.game_screen2.childImageSharp.fluid} alt="stała reklama na scenach rozmów" />
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row my-5 py-5 flex-md-row-reverse">
                <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                    <h3><span className="font-weight-bold">STAŁA REKLAMA</span> POD STREAMEM</h3>
                    <p>Każdy streamer ma możliwość zamieszczenia reklamy pod streamem, dzięki czemu grafika może wyświetlać się <span className="font-weight-bold">nawet gdy aktualnie nie streamuje.</span></p>
                </div>
                <div className="col-12 col-md-6 mt-4 mt-md-0">
                    <Img fluid={data.game_screen3.childImageSharp.fluid} alt="stała reklama pod streamem" />
                </div>
            </div>
        </div>

        <WhyInvestingIsWorth />

        {/* <ContactForm /> */}
    </Layout>
}

export default ForAdvertisersPage;
