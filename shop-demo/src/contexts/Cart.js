import React, {Component} from 'react';

export const CartContext = React.createContext();

export class Cart extends Component {
    constructor(props){
        super(props);

        this.state = {
            cartItem: []
        }

        this.addToCart = this.addToCart.bind(this);
    }

    addToCart(product) {
        console.log(product);
        this.setState({
            cartItem: this.state.cartItem.concat(product)
        })
    }

    render() {
        return <CartContext.Provider value={{
            addToCart: this.addToCart,
            cartItem: this.state.cartItem
        }}>
            {this.props.children}
        </CartContext.Provider>
    }
}