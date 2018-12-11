import React from 'react';

class Search extends React.Component {
    state = {
        searchInput: 0
    }

    handleInputChange = () => {
        this.state.onSearch(
            this.search.value,
        );
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-6">
                    <div className="input-group searchBar">
                        <input
                            type="text" className="form-control"
                            placeholder="Search by order number..."
                            ref={input => this.search = input}
                            onChange={this.handleInputChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;