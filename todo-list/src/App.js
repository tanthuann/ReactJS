import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import TodoItems from './components/TodoItems';
import checkImg from './img/check.svg'
import checkImgAllOn from './img/checked-dark.svg'
import deleteIcon from './img/delete.svg';
import classNames from 'classnames'

class App extends Component {
  constructor() {
    super();
    let list;
    let storageKey = 'todoList';
    let dataString = localStorage.getItem(storageKey);
    let dataSession = sessionStorage.getItem('draft');
    let dataStr = dataSession;
    if (dataString) {
      list = JSON.parse(dataString);
    }
    else {
      list = [
        { title: 'Mua Cá', isComplete: false },
        { title: 'Mua Tôm', isComplete: false },
        { title: 'Mua Thịt', isComplete: false },
        { title: 'Mua Gà', isComplete: false }
      ]
    }
    if (!dataSession)
      dataStr = '';
    this.state = {
      isThis: this,
      isCheckAll: false,
      storageKey: storageKey,
      newItem: dataStr,
      currentFilter: 'all',
      isFocus: [0, 0, 0],
      todoItems: list
    }

    this.onKeyUp = this.onKeyUp.bind(this);
    this.onCheckAll = this.onCheckAll.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClearAll = this.onClearAll.bind(this);
    this.onClearItem = this.onClearItem.bind(this);
    this.onDisplayAll = this.onDisplayAll.bind(this);
    this.onDisplayComplete = this.onDisplayComplete.bind(this);
    this.onDisplayInComplete = this.onDisplayInComplete.bind(this);
  }

  onItemClick(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state; // this.state.todoItems
      const index = todoItems.indexOf(item);
      console.log(todoItems);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      });
      console.log(todoItems);
    };
  }

  onKeyUp(event) {
    sessionStorage.setItem('draft', event.target.value);
    if (event.keyCode === 13) {   // 13 === Enter
      let text = event.target.value;
      if (!text)
        return;
      text = text.trim();
      if (!text)
        return;
      sessionStorage.setItem('draft', '');
      this.setState({
        newItem: '',
        todoItems: [
          { title: text, isComplete: false },
          ...this.state.todoItems
        ]
      });
    }
  }

  onCheckAll(event) {
    const length = this.state.todoItems.length;
    const trueAll = this.state.todoItems.reduce((count, item) => {
      if (item.isComplete === true)
        return count + 1;
      return count;
    }, 0);
    if (length === trueAll) {
      off(this);
    }
    else {
      on(this);
    }
    function on(that) {
      that.setState({
        todoItems: [...that.state.todoItems].map(item => {
          return { ...item, isComplete: true }
        }),
        isCheckAll: true
      })
    };

    function off(that) {
      that.setState({
        todoItems: [...that.state.todoItems].map(item => {
          return { ...item, isComplete: false }
        }),
        isCheckAll: false
      })
    };
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value
    })
  }

  deteleItem(index) {
    return (event) => {
      let { todoItems } = this.state
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          ...todoItems.slice(index + 1)
        ]
      });
    };
  }

  onClearItem() {
    sessionStorage.setItem('draft', '');
    this.setState({
      newItem: ''
    })
  }

  onClearAll() {
    let check = window.confirm('Do you want detele all ? ');
    if (check === true)
      this.setState({
        todoItems: []
      })
    else return;
  }

  onDisplayAll() {
    this.setState({
      currentFilter: 'all',
      isFocus: [1, 0, 0]
    })
  }

  onDisplayComplete() {
    this.setState({
      currentFilter: 'complete',
      isFocus: [0, 1, 0]
    })
  }

  onDisplayInComplete() {
    this.setState({
      currentFilter: 'incomplete',
      isFocus: [0, 0, 1]
    })
  }

  FunctionCheck() {
    const { todoItems, currentFilter, isCheckAll } = this.state;
    let list;
    let url;
    let c = this.state.todoItems.reduce((count, i) => {
      if (i.isComplete === true)
        return count + 1;
      return count;
    }, 0);
    if (c === todoItems.length) {
      c = true;
    } else c = false;
    console.log(c);
    if (currentFilter === 'complete')
      list = todoItems.filter(item => item.isComplete === true)
    if (currentFilter === 'incomplete')
      list = todoItems.filter(item => item.isComplete === false)
    if (currentFilter === 'all')
      list = todoItems;
    if (isCheckAll === true || c === true)
      url = checkImgAllOn;
    else url = checkImg;
    return {
      list, url
    }
  }
  render() {
    const { todoItems, newItem, isFocus } = this.state;
    const { list, url } = this.FunctionCheck();
    localStorage.setItem(this.state.storageKey, JSON.stringify(todoItems));
    console.log(list);
    return (
      <div className="App">
        <h1 className="Title">~Todo List~ <span>{todoItems.length}</span></h1>
        <div className="Header">
          <img alt="svg" src={url} onClick={this.onCheckAll} />
          <input value={newItem}
            type="text"
            placeholder="Add new todo..."
            onKeyUp={this.onKeyUp}
            onChange={this.onChange} />

          <div className="ClearItem" onClick={this.onClearItem}>
            <img alt="svg" src={deleteIcon} />
          </div>
        </div>
        <div className="Footer">
          <div onClick={this.onDisplayAll} className={classNames('all', { active: isFocus[0] === 1 })}><p>All</p></div>
          <div onClick={this.onDisplayComplete} className={classNames('complete', { active: isFocus[1] === 1 })}><p>Completed</p></div>
          <div onClick={this.onDisplayInComplete} className={classNames('incomplete', { active: isFocus[2] === 1 })}><p>Active</p></div>
        </div>
        {list.length === 0 && <p className="p">Nothing...</p>}
        {list.length > 0 && list.map((item, index) =>
          <TodoItems key={index} index={index} item={item} onClickCheck={this.onItemClick(item)} onClickDel={this.deteleItem(index)} />)
        }
        <div onClick={this.onClearAll} className="ClearAll">Clear All</div>
      </div>
    );
  }
}

export default App;
