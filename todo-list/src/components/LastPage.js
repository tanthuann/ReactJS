import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './LastPage.css';

class LastPage extends Component {
    render() {
        const { onClickClearAll, onClickClearAllCompleted, onClickClearAllActive } = this.props;
        return (
            <div className="lastPage">
                <div onClick={onClickClearAll} className="ClearAll">Clear All</div>
                <div onClick={onClickClearAllCompleted} className="clearAllCompleted">Clear Completed</div>
                <div onClick={onClickClearAllActive} className="clearAllActive">Clear Active</div>
            </div>
        );
    }
}

LastPage.propTypes = {
    onClickClearAll: PropTypes.func, 
    onClickClearAllCompleted: PropTypes.func, 
    onClickClearAllActive: PropTypes.func
}

export default LastPage;