import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './AddTodo.css';

import deleteIcon from '../img/delete.svg';
import addIcon from '../img/plus.svg';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
    }
    componentDidMount() {
        this.inputElement.current.focus();
    }
    render() {
        const { onClickCheckAll, onKeyUpAdd, onChange, onClickSubmit, onClickClearItem } = this.props;
        const { url, newItem } = this.props.var;
        return (
            <div className="Header">
                <img alt="svg" src={url} onClick={onClickCheckAll} />
                <input value={newItem}
                    type="text"
                    placeholder="Add new todo..."
                    onKeyUp={onKeyUpAdd}
                    onChange={onChange}
                    ref={this.inputElement}
                />
                <button onClick={onClickSubmit} type="submit" name="aaa"><img alt="svg" src={addIcon} /></button>
                <div className="ClearItem" onClick={onClickClearItem}>
                    <img alt="svg" src={deleteIcon} />
                </div>
            </div>
        )
    }
}

AddTodo.propTypes = {
    onClickCheckAll: PropTypes.func.isRequired,
    onKeyUpAdd: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onClickSubmit: PropTypes.func.isRequired,
    onClickClearItem: PropTypes.func.isRequired,
    var: PropTypes.shape({
        url: PropTypes.string.isRequired,
        newItem: PropTypes.string.isRequired
    })
}



export default AddTodo;