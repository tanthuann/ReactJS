import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Accordion from './Components/Accordion.js';

class App extends Component {
  render() {
    console.log('App render');
    return (
      <div className="Appaa">
        <Accordion ></Accordion>
      </div>
    );
  }
  
}

export default App;
