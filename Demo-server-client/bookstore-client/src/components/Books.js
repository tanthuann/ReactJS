import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button, Col
} from 'reactstrap';

import { CartContext } from '../contexts/Cart.js';

const Products = (props) => {
  const { bookName, author, content, img, soldAmount } = props.books;
  const demoContent = content.split(' ').slice(0, 10).join(' ') + "...";
  return (
    <Col sm="6" xl="4">
      <Card>
        <CardImg top width="100%" src={img} alt="Card image cap" />
        <CardBody>
          <CardTitle><b>Book name:</b> {bookName}</CardTitle>
          <CardText><b>Author:</b> { author }</CardText>
          <CardText><b>Sold:</b> { soldAmount }</CardText>
          <CardText>{demoContent}</CardText>
          <CartContext.Consumer>
            {({ addToCart }) => <Button onClick={() => addToCart(props.products)}>Add to Cart</Button>}
          </CartContext.Consumer>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Products;