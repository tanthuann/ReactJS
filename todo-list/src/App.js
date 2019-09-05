import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import TodoItems from './components/TodoItems.js';
import AddTodo from './components/AddTodo.js';
import Search from './components/Search.js';
import SortItem from './components/SortItem.js';
import LastPage from './components/LastPage.js';

import checkImg from './img/check.svg'
import checkImgAllOn from './img/checked-dark.svg'
import deleteIcon from './img/delete.svg';
// import classNames from 'classnames';
import addIcon from './img/plus.svg';
import searchIcon from './img/search.svg';

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
      searchItem: '',
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
    this.onSearchItem = this.onSearchItem.bind(this);
    this.onClearAllCompleted = this.onClearAllCompleted.bind(this);
    this.onClearAllActive = this.onClearAllActive.bind(this);
    this.onClickSubmit = this.onClickSubmit.bind(this);
    this.onClickSearch = this.onClickSearch.bind(this);
  }

  onItemClick(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state; // this.state.todoItems
      const index = todoItems.indexOf(item);
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
    };
  }

  onClickSubmit(event) {
    console.log(event.target.value);
    // sessionStorage.setItem('draft', event.target.value);
    let text = sessionStorage.getItem('draft');
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

  onClickSearch() {
    let strSearch = sessionStorage.getItem('search');
    this.setState({
      searchItem: strSearch
    })
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

  onSearchItem(event) {
    let strSearch = event.target.value;
    sessionStorage.setItem('search', strSearch);
    if (event.keyCode === 13) {
      this.setState({
        searchItem: strSearch
      })
    }
    // let listSearch = this.state.todoItems.filter( (item) => {
    //   return item.title.toLowerCase().indexOf(strSearch) > -1;
    // });
    // console.log(listSearch);
    //   this.setState({
    //     todoItems: listSearch
    //   })
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

  onClearAllCompleted() {
    let check = window.confirm('Do you want detele all todo completed ? ');
    if (check === true) {
      let list = this.state.todoItems.filter((item) => {
        return item.isComplete === false;
      })
      this.setState({
        todoItems: list
      })
    }
    else return;
  }

  onClearAllActive() {
    let check = window.confirm('Do you want detele all todo active ? ');
    if (check === true) {
      let list = this.state.todoItems.filter((item) => {
        return item.isComplete === true;
      })
      this.setState({
        todoItems: list
      })
    }
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
    const { todoItems, currentFilter, isCheckAll, searchItem } = this.state;
    let list = todoItems;
    console.log(searchItem);
    console.log(list);
    let url;

    list = list.filter((item) => {
      return item.title.toLowerCase().indexOf(searchItem) > -1;
    });

    let c = list.reduce((count, i) => {
      if (i.isComplete === true)
        return count + 1;
      return count;
    }, 0);
    if (c === todoItems.length) {
      c = true;
    } else c = false;
    if (currentFilter === 'complete')
      list = list.filter(item => item.isComplete === true)
    if (currentFilter === 'incomplete')
      list = list.filter(item => item.isComplete === false)
    // if (currentFilter === 'all')
    //   list = list;
    if (isCheckAll === true || c === true)
      url = checkImgAllOn;
    else url = checkImg;
    return {
      list, url
    }
  }
  render() {
    const { todoItems, newItem, isFocus } = this.state;
    let { list, url } = this.FunctionCheck();
    console.log(list);
    localStorage.setItem(this.state.storageKey, JSON.stringify(todoItems));
    return (
      <div className="App">
        <h1 className="Title">~Todo List~ <span>{todoItems.length}</span></h1>
        <AddTodo  onClickCheckAll={this.onCheckAll}
                  onKeyUpAdd={this.onKeyUp}
                  onChange={this.onChange}
                  onClickSubmit={this.onClickSubmit}
                  onClickClearItem={this.onClearItem}
                  var={{ url, newItem, addIcon, deleteIcon }}
        />
        <Search onKeyUpSearchItem={this.onSearchItem} onClickSearch={this.onClickSearch} src={searchIcon} />
        <SortItem onClickDisplayAll={this.onDisplayAll}
                  onClickDisplayComplete={this.onDisplayComplete}
                  onClickDisplayInComplete={this.onDisplayInComplete}
                  isFocus={isFocus}
        />
        {list.length === 0 && <p className="p">Nothing...</p>}
        {list.length > 0 && list.map((item, index) =>
          <TodoItems key={index} index={index} item={item} onClickCheck={this.onItemClick(item)} onClickDel={this.deteleItem(index)} />)}
        <LastPage onClickClearAll={this.onClearAll}
                  onClickClearAllCompleted={this.onClearAllCompleted}
                  onClickClearAllActive={this.onClearAllActive} 
        />
      </div>
    );
  }
}

export default App;
