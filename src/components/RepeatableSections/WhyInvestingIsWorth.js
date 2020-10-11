import React from 'react';

import handshake from '../../assets/images/handshake.svg';
import badge from '../../assets/images/badge.svg';
import hand_heart from '../../assets/images/hand_heart.svg';
import group_of_viewers_small from '../../assets/images/group_of_viewers_small.svg';

function WhyInvestingIsWorth() {
    return <div className="dark-blue-section">
        <div className="container text-center">
            <h2>DLACZEGO <span className="font-weight-bold">WARTO INWESTOWAĆ W NASZE</span> MAŁE SPOŁECZNOŚCI</h2>
            <div className="row my-5">
                <WhyInvestingIsWorthPoint
                    imgSrc={handshake}
                    imgAlt="zaufanie"
                    title="Większe zaufanie wśród społeczności"
                    description={<>
                        Społeczności małych streamerów są bardziej zżyte. Często znają się w realnym życiu i <span className="font-weight-bold">sobie ufają jak przyjaciele.</span>
                    </>}
                />
                <WhyInvestingIsWorthPoint
                    imgSrc={badge}
                    imgAlt="nagrody"
                    title="Większa szansa na nagrody dla widzów"
                    description={<>
                        Widzowie mają większą szanse na zdobycie nagród na mniejszych streamach więc <span className="font-weight-bold">chętniej biorą w nich udział.</span>
                    </>}
                />
                <WhyInvestingIsWorthPoint
                    imgSrc={hand_heart}
                    imgAlt="kontakt"
                    title="Bezpośredni kontakt streamera z widzami"
                    description={<>
                        Na mniejszych streamach każda wiadomość jest czytana przez streamera i często streamer ma <span className="font-weight-bold">więcej czasu żeby skupić się na swoich widzach.</span>
                    </>}
                />
                <WhyInvestingIsWorthPoint
                    imgSrc={group_of_viewers_small}
                    imgAlt="zasięg"
                    title="Zasięg wielu społeczności"
                    description={<>
                        Nasz system reklam pozwala wyświetlić Twoją reklamę na wielu streamach jednocześnie co <span className="font-weight-bold">pozwala dostać się finalnie do wielu małych społeczności.</span>
                    </>}
                />
            </div>
        </div>
    </div>;
}

function WhyInvestingIsWorthPoint({ imgSrc, imgAlt, title, description }) {
    return <div className="col-12 col-md-6 col-lg-3">
        <img className="mb-3" src={imgSrc} alt={imgAlt} />
        <h4 className="mb-3 font-weight-bold">{title}</h4>
        <p>{description}</p>
    </div>
}

export default WhyInvestingIsWorth;
