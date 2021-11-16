import './filter.scss';

const Filter = (props) => {
    const btnsData = [
        {name: 'Brazil', label: 'Brazil'},
        {name: 'Kenya', label: 'Kenya'},
        {name: 'Columbia', label: 'Columbia'}
    ];

    const btns = btnsData.map(({name, label}) => {
        return (
            <button 
                className="app__filter-btn"
                key={name}
                onClick={() => props.onFilterSelect(name)}>
            {label}
            </button>
        )
    });

    return (
        <div className="app__filter">
            <span>Or filter</span>
            {btns}
        </div>
    )
}

export default Filter;