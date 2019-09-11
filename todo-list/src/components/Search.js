import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Search.css';

class Search extends Component {
    render() {
        const { onKeyUpSearchItem} = this.props;
        return (
            <div className="search">
                <input onKeyUp={onKeyUpSearchItem} type="text" placeholder="Search..." />
            </div>
        );
    }   
}

Search.propTypes = {
    onKeyUpSearchItem: PropTypes.func
}

export default Search;