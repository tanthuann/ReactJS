import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import TodoItems from './components/TodoItems';
import checkImgAllOff from './img/check-blue.svg'
//import checkImgAllOn from './img/checked-dark.svg'
import deleteIcon from './img/delete.svg';

class App extends Component {
  constructor(){
    super();
    let list;
    let storageKey = 'todoList';
		let dataString = localStorage.getItem(storageKey);
		if(dataString){
			list = JSON.parse(dataString);
		}
		else{
      list = [
        { title: 'Mua Cá', isComplete: false},
        { title: 'Mua Tôm', isComplete: false},
        { title: 'Mua Thịt', isComplete: false},
        { title: 'Mua Gà', isComplete: false}
      ]
    }
    this.state = {
      storageKey: storageKey,
      newItem: '',
      currentFilter: 'all',
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
      // this.setState( state => {
      //   let list = state.todoItems.map( (item, key) => {
      //     if(key === index)
      //       return item.isComplete= !item.isComplete
      //     else{
      //       return {...item}
      //     }
      //   });

      //   return {
      //     list
      //   };
      // });
    };
  }

  onKeyUp(event) {
    if(event.keyCode === 13) {
      let text = event.target.value;
      if(!text)
        return;
      text = text.trim();
      if(!text)
        return;
      this.setState({
        newItem: '',
        todoItems: [
          ...this.state.todoItems,
          {title: text, isComplete: false}
        ]
      });
    }
  }

  onCheckAll(event) {
    const length = this.state.todoItems.length;
    const trueAll = this.state.todoItems.reduce( ( count, item ) => {
      if(item.isComplete === true)
        return count+1;
      return count;
    },0);
    if(length === trueAll){
      off(this);
    }
    else {
      on(this);
    }
    function on(that) {
      that.setState({
        todoItems: [...that.state.todoItems].map( item => {
          return { ...item, isComplete: true}
        })
      })
    };

    function off(that){
      that.setState({
        todoItems: [...that.state.todoItems].map( item => {
          return { ...item, isComplete: false}
        })
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
    this.setState({
      newItem: ''
    })
  }

  onClearAll(){
    this.setState({
      todoItems: []
    })
  }

  onDisplayAll() {
    this.setState({
      currentFilter: 'all'
    })
  }

  onDisplayComplete() {
    this.setState({
      currentFilter: 'complete'
    })
  }

  onDisplayInComplete() {
    this.setState({
      currentFilter: 'incomplete'
    })
  }

  render() {
    let list = [];
    const { todoItems, newItem, currentFilter } = this.state;
    if(currentFilter === 'complete')
      list = todoItems.filter( item => item.isComplete === true)
    if(currentFilter === 'incomplete')
      list = todoItems.filter( item => item.isComplete === false )
    if(currentFilter === 'all')
      list = todoItems;
      localStorage.setItem(this.state.storageKey,JSON.stringify(todoItems));
    console.log(list);
    return (
      <div className="App">
        <h1 className="Title">Todo List</h1>
        <div className="Header">
          <img alt="svg" src={checkImgAllOff} width={64} onClick={this.onCheckAll}/>
          <input value={newItem}
                 type="text" 
                 placeholder="Add new todo" 
                 onKeyUp={this.onKeyUp} 
                 onChange={this.onChange}/>

          <div className="ClearItem" onClick={this.onClearItem}>
            <img alt="svg" src={deleteIcon} width={12} height={12}/>
          </div>
        </div>
        <div className="Footer">
          <div onClick={this.onDisplayAll} className="all">All</div>
          <div onClick={this.onDisplayComplete} className="complete">Complete</div>
          <div onClick={this.onDisplayInComplete} className="incomplete">Incomplete</div>
        </div>
        { list.length === 0 && <p className="p">Nothing</p>}
        { list.length > 0 && list.map((item, index) => 
           <TodoItems key={index} item={item} onClickCheck={this.onItemClick(item)} onClickDel={this.deteleItem(index)}/>)
        }
        <div onClick={this.onClearAll} className="ClearAll">Clear All</div>
      </div>
    );
  }
}

export default App;
