import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItems.css';

class TodoItems extends Component {  
    render() {
        const { item, onClick } = this.props;  // item = this.props.item
        return (
            <div onClick={onClick} className={classNames('TodoItems',{
                'TodoItems-complete': item.isComplete === true
            })}>
                <p>{item.title}</p>
            </div> 
        );
    }
}

export default TodoItems;