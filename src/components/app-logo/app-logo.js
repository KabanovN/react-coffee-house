import './app-logo.scss';
import MainLogo from '../../resources/img/main-logo.png';

const AppLogo = () => {
    return (
        <div className="main-logo">
            <img src={MainLogo} alt="logo" />
        </div>
    )
};

export default AppLogo;