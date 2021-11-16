import AppLogo from '../app-logo/app-logo';
import AppNav from '../app-nav/app-nav';
import './app-footer.scss';

const AppFooter = () => {
    return (
        <div className="app__footer">
            <div className="app__footer__container">
                <AppNav/>
                <AppLogo/>
            </div>

        </div>
    )
};

export default AppFooter;