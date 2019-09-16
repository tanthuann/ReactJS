import React from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import {
   Row
} from 'reactstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css'

import Products from './Page/Products.js';
import Index from './Page/Index.js';
import TopMenu from './Page/TopMenu.js';
import { Cart } from './contexts/Cart.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    //this.toggle = this.toggle.bind(this);
    this.state = {
      data: []
    };
  }

  componentDidMount(){
    axios.get('https://dcsfq.sse.codesandbox.io/products').then((res) => {
      this.setState({
        data: res.data
      })
    })
  }

  render() {
    const { data } = this.state;
    return (
      <Cart>
      <div className="container">
        <Router>
          <TopMenu/>
          <Route path="/" exact component={Index} />
          <Route path="/Products" exact component={() =>
            (<div className="container">
              <h2>Products</h2>
              <Row>
                {data.map((products, index) => (
                  <Products key={index} products={products} />
                ))}
              </Row>
            </div>)
          } />
        </Router>
      </div>
      </Cart>
    );
  }
}