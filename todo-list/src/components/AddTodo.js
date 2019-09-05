import React, { Component } from 'react';
import './AddTodo.css';

class AddTodo extends Component {
    render() {
        const { onClickCheckAll, onKeyUpAdd, onChange, onClickSubmit, onClickClearItem } = this.props;
        const { url, newItem, addIcon, deleteIcon } = this.props.var;
        return (
            <div className="Header">
                <img alt="svg" src={url} onClick={onClickCheckAll} />
                <input value={newItem}
                    type="text"
                    placeholder="Add new todo..."
                    onKeyUp={onKeyUpAdd}
                    onChange={onChange} />
                <button onClick={onClickSubmit} type="submit" name="aaa"><img alt="svg" src={addIcon} /></button>

                <div className="ClearItem" onClick={onClickClearItem}>
                    <img alt="svg" src={deleteIcon} />
                </div>
            </div>
        )
    }
}

export default AddTodo;