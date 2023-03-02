import React from "react";
import ProductContext from "../state/ProductContext";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Productdetail() {
  const { products, setProducts } = useContext(ProductContext);
  const { id } = useParams();
  const detailedProduct = getProductId(id, products);
  const [show, setShow] = useState(false);
  const [inputName, setInputName] = useState(detailedProduct.name);
  const [inputPrice, setInputPrice] = useState(detailedProduct.price);
  const [inputDescription, setInputDescription] = useState(
    detailedProduct.description
  );

  const handleSubmit = () => {
    setShow(false);
    updateProduct(detailedProduct.id);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);

  // deze functies kunnen ook al in de productContext provider meegegeven worden.
  function updateProduct(id) {
    const updatedProducts = products.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          name: inputName,
          description: inputDescription,
          price: inputPrice,
        };
      }
      return item;
    });
    setProducts(updatedProducts);
  }

  return (
    <>
      <>
        <Card style={{ width: "50rem" }}>
          <Card.Body>
            <Card.Title>{detailedProduct.name}</Card.Title>
            <Card.Text>{detailedProduct.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{detailedProduct.price}</ListGroup.Item>
          </ListGroup>
        </Card>
      </>
      <>
        <Button variant="primary" onClick={handleShow}>
          Update
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Product name</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={detailedProduct.name}
                  onChange={(e) => setInputName(e.target.value)}
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Product price</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={detailedProduct.price}
                  onChange={(e) => setInputPrice(e.target.value)}
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Product Description</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={detailedProduct.description}
                  onChange={(e) => setInputDescription(e.target.value)}
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      <Link to="/" relative="path">
        Back to Home
      </Link>
    </>
  );
}

export default Productdetail;

const getProductId = (id, products) => {
  const parsedId = parseInt(id);
  return products.find((product) => product.id === parsedId);
};
