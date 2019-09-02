import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import TrafficLight from './components/TrafficLight';

const RED = 0;
const YELLOW = 1;
const GREEN = 2;

class App extends Component{
  constructor(){
      super();
      this.state = {
          currentLight: RED
      }

      setInterval( () => {
          console.log(this.state.currentLight)
          this.setState({
              currentLight: this.getCurrentLight(this.state.currentLight)
          });
      },1000);
  }

  getCurrentLight(color){
      switch(color){
          case RED:
              return GREEN;
          case GREEN:
              return YELLOW;
          case YELLOW:
              return RED;
          default:
              return;
      }
  }
  render() {
    return (
    <div className="App App-header">
      <TrafficLight currentLight={this.state.currentLight}/>
    </div>
    );
  }
}

export default App;
