import React, { Component } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { BrowserRouter as Link } from "react-router-dom";
import { CartContext } from '../contexts/Cart';

export default class TopMenu extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand to="/">Bookstore</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/">
                                <Link to="/">Home</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Books">
                                <Link to="/" className="ml-2">Books</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/user/login">
                                <Link to="/" className="ml-2">Login</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Products">
                                <CartContext.Consumer>
                                    {({ cartItem }) => <Link to="/Products" className="ml-2"> Cart ({cartItem.length})</Link>}
                                </CartContext.Consumer>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}