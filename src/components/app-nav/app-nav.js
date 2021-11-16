import './app-nav.scss';
import Logo from '../../resources/img/nav-logo.svg';

const AppNav = () => {
    return (
        <nav className="app__nav">
            <ul className="app__nav-list">
                <li className="app__nav-list-item"><a href="#">Coffee house</a></li>
                <li className="app__nav-list-item"><a href="#">Our coffee</a></li>
                <li className="app__nav-list-item"><a href="#">For your pleasure</a></li>
            </ul>             
        </nav>
    )
}

export default AppNav;