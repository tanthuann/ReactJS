import React from 'react';
//import { BrowserRouter as Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
  Row
} from 'reactstrap';

import { CartContext } from '../contexts/Cart.js';
import Books from './Books.js';


export default function () {
  return (
    <div className="container ">
      <div className=" introduction text-center row justify-content-center align-items-center start-bootstrap">
        <div className="col-lg-10 align-self-end">
          <h1 className="display-4 text-white font-weight-bolder text-primary">
            WELCOME TO Z01NN'S WEB
              </h1>
          <hr className="divider my-4" />
        </div>
        <div className="col-lg-8 align-self-baseline">
          <p className="h5 text-white font-weight-light mb-5 text-primary">
            Web is built by Bootstrap.
          </p>
          <p className="h2">Best Books of All Time</p>
        </div>
      </div>
      <CartContext.Consumer>
        {({ dataBestSeller }) =>
          <Route path="/" exact component={() =>
            (<div className="container">
              <Row>
                {dataBestSeller.map((books, index) => (
                  <Books key={index} books={books} />
                ))}
              </Row>
            </div>)
          } />
        }
      </CartContext.Consumer>
    </div>
  );
}