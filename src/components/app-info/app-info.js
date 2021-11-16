import AppLogo from '../app-logo/app-logo';

import './app-info.scss';
import AboutImg from '../../resources/img/about-img.jpg';


const AppInfo = () => {
    return (
        <div className="container">
            <section className="app__info">
                <div className="app__info-img">
                    <img src={AboutImg} alt="morning coffee" />
                </div>
                <div className="app__info-about">
                    <h2 className="app__info-about__title">About our beans</h2>
                    <AppLogo/>
                    <p className="app__info-about__descr">
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    <br /> <br />
                    Afraid at highly months do things on at. Situation recommend objection do intention <br />
                    so questions. <br />
                    As greatly removed calling pleased improve an. Last ask him cold feel <br />
                    met spot shy want. Children me laughing we prospect answered followed. At it went <br />
                    is song that held help face.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default AppInfo;