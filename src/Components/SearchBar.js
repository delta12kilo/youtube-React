import React from 'react';

class SearchBar extends React.Component {

    state = { searchTerm: '' };

    onInput = e => {
        this.setState({ searchTerm: e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();

        this.props.onFormSubmit(this.state.searchTerm);
    }

    render(){
        return (
            <div className="searchTerm-bar ui segment">
                <form 
                    onSubmit={this.onSubmit}
                    className="ui form">
                    <div className="field">
                    <input 
                        placeholder="searchTerm"
                        type="text"
                        value={this.state.searchTerm}
                        onChange={this.onInput}
                        required
                    />
                    </div>
                </form>
                
            </div>
        )
    }
}

export default SearchBar;