import React, { Component } from 'react';
import classNames from 'classnames';
import './SortItem.css';

class SortItem extends Component {
    render() {
        const { onClickDisplayAll, onClickDisplayComplete, onClickDisplayInComplete, isFocus } = this.props;
        return (
            <div className="Footer">
                <div onClick={onClickDisplayAll} className={classNames('all', { active: isFocus[0] === 1 })}><p>All</p></div>
                <div onClick={onClickDisplayComplete} className={classNames('complete', { active: isFocus[1] === 1 })}><p>Completed</p></div>
                <div onClick={onClickDisplayInComplete} className={classNames('incomplete', { active: isFocus[2] === 1 })}><p>Active</p></div>
            </div>
        )
    }
}

export default SortItem;