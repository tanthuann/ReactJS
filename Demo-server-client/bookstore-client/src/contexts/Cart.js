import React, { Component } from 'react';
import axios from 'axios';

export const CartContext = React.createContext();

export class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cartItem: [],
            data: [],
            dataBestSeller: [],
            denied: false
        }

        this.addToCart = this.addToCart.bind(this);
    }

    callAPI() {
        axios.get('/api/books').then((res) => {
            if (res.data.denied) {
                this.setState({
                    dataBestSeller: res.data.dataBestSeller,
                    denied: res.data.denied
                })
            }
            else{
                this.setState({
                    dataBestSeller: res.data.dataBestSeller,
                    data: res.data.dataAllBooks
                })
            }
        })
    }
    componentDidMount() {
        this.callAPI();
    }

    addToCart(book) {
        this.setState({
            cartItem: this.state.cartItem.concat(book)
        })
    }

    render() {
        const { cartItem, data, denied, dataBestSeller } = this.state;
        console.log(this.state);
        return (<CartContext.Provider value={{
            addToCart: this.addToCart,
            cartItem: cartItem,
            data: data,
            denied: denied,
            dataBestSeller: dataBestSeller
        }}>
            {this.props.children}
        </CartContext.Provider>)
    }
}