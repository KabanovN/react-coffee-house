import './app-list-item.scss';
import CoffeeImg from '../../resources/img/coffee-img-card.png';

const AppListItem = (props) => {
    const {title, country, price} = props;
    return (
        <div className="app__card card">
            <div className="card__img">
                <img src={CoffeeImg} alt="coffee" />
            </div>
            <span className="card__title">{title}</span>
            <span className="card__country">{country}</span>
            <span className="card__price">{price}</span>
        </div>
    )
}

export default AppListItem;