import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button, Col
} from 'reactstrap';

const Products = (props) => {
    const{img, product, description} = props.product;
  return (
    <Col sm="6" xl="4">
      <Card>
        <CardImg top width="100%" src={img} alt="Card image cap" />
        <CardBody>
          <CardTitle>{product}</CardTitle>
          <CardText>{description}</CardText>
          <Button>Add to Cart</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Products;