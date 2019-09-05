import React, { Component } from 'react';
import './LastPage.css';

class LastPage extends Component {
    render() {
        const { onClickClearAll, onClickClearAllCompleted, onClickClearAllActive} = this.props;
        return(
            <div className="lastPage">
          <div onClick={onClickClearAll} className="ClearAll">Clear All</div>
          <div onClick={onClickClearAllCompleted} className="clearAllCompleted">Clear Completed</div>
          <div onClick={onClickClearAllActive} className="clearAllActive">Clear Active</div>
        </div>
        );
    }
}

export default LastPage;