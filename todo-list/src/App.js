import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import TodoItems from './components/TodoItems';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todoItems: [
        { title: 'Mua Cá', isComplete: true},
        { title: 'Mua Tôm', isComplete: true},
        { title: 'Mua Thịt', isComplete: true}
      ]
    }
    this.onItemClick = this.onItemClick.bind(this);
  }

  onItemClick(key) {
    this.setState( state => {
      //console.log(state.todoItems)
      const listTodo = state.todoItems.map( (item, index) => {
        if(index === key) {
          return item.isComplete = !item.isComplete;
        }
        else return item;
      });
      return {
        listTodo
      };
    });
    // this.todoItems[1].isComplete = !this.todoItems[1].isComplete;
  };

  render() {
    return (
      <div className="App App-header">
        { this.state.todoItems.length === 0 && 'Nothing here'}
        { this.state.todoItems.length > 0 && this.state.todoItems.map((item, index) => <TodoItems key={index} item={item} onClick={ () => this.onItemClick(index)}/>) }
      </div>
    );
  }
}

export default App;
