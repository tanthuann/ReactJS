import React, { Component } from 'react';
import './Search.css'

class Search extends Component {
    render() {
        const { onKeyUpSearchItem, onClickSearch, src } = this.props;
        return (
            <div className="search">
                <input onKeyUp={onKeyUpSearchItem} type="text" placeholder="Search..." />
                <button type="submit" onClick={onClickSearch}><img alt="svg" src={src} /></button>
            </div>
        );
    }
}

export default Search;