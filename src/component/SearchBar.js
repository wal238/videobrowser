import React from 'react';

class SearchBar extends React.Component{

    state = {term: ''};

    OnInputChange = (e) => {
        this.setState({term: e.target.value});

    };
    onFormSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" placeholder="Search" value={this.state.term} onChange={this.OnInputChange}/>
                </div>
                </form>
                </div>
        )
    }
}

export default SearchBar