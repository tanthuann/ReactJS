import React from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem, Row
} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css'

import Products from './Page/Products.js';

function Index() {
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
            Web is built by Bootstrap. This just demo reactstrap
          </p>
          <Link
            className="btn btn-danger btn-xl badge-pill js-scroll-trigger text-white px-4 py-3 text-uppercase font-weight-bolder"
            to=""
          >
            Find Out More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      data: []
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
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
      <div className="container">
        <Router>
          <Navbar color="light" light expand="md">
            <NavbarBrand to="/">reactstrap</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/">Home</Link>
                </NavItem>
                <NavItem>
                  <Link to="/Products" className="ml-2">Products</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Route path="/" exact component={Index} />
          
          <Route path="/Products" exact component={() =>
            (<div className="container">
              <h2>Products</h2>
              <Row>
                {data.map((product, index) => (
                  <Products key={index} product={product} />
                ))}
              </Row>
            </div>)
          } />

        </Router>
      </div>
    );
  }
}