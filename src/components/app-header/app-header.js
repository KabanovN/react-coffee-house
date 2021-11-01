import './app-header.scss';

const AppHeader = () => {
    return (
        <div className="app__header">
            <nav className="app__nav">
                <ul className="app__list">
                    <li className="app__list-item"><a href="#">Coffee house</a></li>
                    <li className="app__list-item"><a href="#">Our coffee</a></li>
                    <li className="app__list-item"><a href="#">For your pleasure</a></li>
                </ul>             
            </nav>
            <h1 className="app__header-title">Our Coffee</h1>
        </div>
    )
}

export default AppHeader;