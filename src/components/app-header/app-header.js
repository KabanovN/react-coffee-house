import './app-header.scss';
import AppNav from '../app-nav/app-nav';

const AppHeader = () => {
    return (
        <div className="app__header">
            <AppNav/>
            <h1 className="app__header-title">Our Coffee</h1>
        </div>
    )
}

export default AppHeader;