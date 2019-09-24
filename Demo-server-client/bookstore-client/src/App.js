import React, { Component } from 'react';

//import logo from './logo.svg';
import {Redirect, BrowserRouter as Router, Route, Link } from "react-router-dom";
//import { withRouter } from 'react-router-dom';
//import axios from 'axios';

//BOOTSTRAP
import {
  Row
} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

//CONTEXT
//import CartContext from './contexts/Cart.js';
import { CartContext, Cart } from './contexts/Cart.js';

import './App.css';
//COMPONENTS
import Login from './components/Login.js';
import Register from './components/Register.js';
import CardBooks from './components/CardBooks.js';
import Index from './components/Index.js';
import TopMenu from './components/TopMenu.js';

function redirect(){
  alert('Login ?');
   return <Redirect to="/user/login"/>
}

function App() {
  return <div className="container">
      <Cart>
    <Router>
      <TopMenu />
      <Link to="/"></Link>
      <Route path="/" exact component={Index} />

        <CartContext.Consumer>
          {({ data, denied }) =>
            <Route path="/books" exact component={() =>
              (<div className="container">
                <h2>Books</h2>
                <Row>
                  {!denied && data.map((books, index) => (
                    <CardBooks key={index} books={books} />
                  ))}
                  <h1>Please Login to see this Page</h1>
                  {denied && redirect()}
                </Row>
              </div>)
            } />
          }
        </CartContext.Consumer>

        <Route path="/user/register" exact component={Register} />
        <Route path="/user/login" exact component={Login} />
    </Router>
      </Cart>
  </div>
}

export default App;
