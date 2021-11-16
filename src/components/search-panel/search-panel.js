import { Component } from 'react';
import './search-panel.scss';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateValue = (evt) => {
        this.setState({
            term: evt.target.value
        });

        this.props.onUpdateTerm(evt.target.value);
    }

    render () {
        return (
            <label>
                Looking for
                <input 
                    type="text" 
                    placeholder="start typing here..."
                    onChange={this.onUpdateValue}/>
            </label>
        )
    }
}

export default SearchPanel;