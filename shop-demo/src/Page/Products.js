import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button, Col
} from 'reactstrap';

import { CartContext } from '../contexts/Cart.js';

const Products = (props) => {
  const { img, product, description } = props.products;
  return (
    <Col sm="6" xl="4">
      <Card>
        <CardImg top width="100%" src={img} alt="Card image cap" />
        <CardBody>
          <CardTitle>{product}</CardTitle>
          <CardText>{description}</CardText>
          <CartContext.Consumer>
            {({ addToCart }) => <Button onClick={() => addToCart(props.products)}>Add to Cart</Button>}
          </CartContext.Consumer>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Products;