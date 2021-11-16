import './app-list.scss';
import AppListItem from '../app-list-item/app-list-item';

const AppList = ({data}) => {
    const cards = data.map(card => {
        const {id, ...itemProps} = card;
        return (
            <AppListItem key={id} {...itemProps}/>
        )
    });

    return (
        <section className="app__list">
            {cards}
        </section>
    )
}

export default AppList;