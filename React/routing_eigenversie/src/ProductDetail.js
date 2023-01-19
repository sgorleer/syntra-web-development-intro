import React from "react";
import { useParams } from "react-router-dom";
import { products } from "./productdatabase";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function ProductDetail() {
  const { id } = useParams();
  const detailedProduct = getProductId(id);

  return (
    <>
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={detailedProduct.img} />
        <Card.Body>
          <Card.Title>{detailedProduct.name}</Card.Title>
          <Card.Text>{detailedProduct.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{detailedProduct.price}</ListGroup.Item>
          <ListGroup.Item>{detailedProduct.availability}</ListGroup.Item>
          <ListGroup.Item>{detailedProduct.release}</ListGroup.Item>
        </ListGroup>
      </Card>

      <Link to=".." relative="path">
        Back to products
      </Link>
    </>
  );
}

export default ProductDetail;

const getProductId = (id) => {
  return products.find((item) => item.id === id);
};
