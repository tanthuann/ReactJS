import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItems.css';
import checkImg from '../img/check.svg';
import checkedImg from '../img/checked.svg';
import deleteIcon from '../img/delete.svg';

class TodoItems extends Component {  
    render() {
        const { item, onClickCheck, onClickDel, index } = this.props;  // item = this.props.item
        let url = checkImg;
        if (item.isComplete === true)
            url = checkedImg;
        return (
            <div className={classNames('TodoItems',{
                'TodoItems-complete': item.isComplete === true
            })}>
                <div className="item">
                    <img alt="sgv file" onClick={onClickCheck} src={url}/>
                    <p> {index+1}. {item.title}</p>
                    <span>
                        <img onClick={onClickDel} alt="svg" src={deleteIcon} width={16}/>
                    </span>
                </div>
            </div> 
        );
    }
}

export default TodoItems;