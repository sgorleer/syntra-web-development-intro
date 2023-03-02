import React from "react";
import { useContext, useState } from "react";
import ProductContext from "../state/ProductContext";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

function Home() {
  const navigate = useNavigate();
  const [inputName, setInputName] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  const { products, setProducts } = useContext(ProductContext);

  function addProduct() {
    setProducts([
      ...products,
      {
        id: Math.floor(Math.random() * 1000000),
        name: inputName,
        price: inputPrice,
        description: inputDescription,
      },
    ]);
    setInputName("");
    setInputPrice(0);
    setInputDescription("");
  }

  function deleteProduct(id) {
    const filteredProducts = products.filter((item) => item.id !== id);
    console.log(filteredProducts);
    setProducts(filteredProducts);
    // filter gebruiken om product te deleten: zie Todo app react file
  }

  return (
    <>
      <div>
        <input
          onChange={(e) => setInputName(e.target.value)}
          value={inputName}
        ></input>
        <input
          onChange={(e) => setInputPrice(e.target.value)}
          value={inputPrice}
        ></input>
        <input
          onChange={(e) => setInputDescription(e.target.value)}
          value={inputDescription}
        ></input>
        <input
          id="input-button"
          type="submit"
          value="Submit"
          onClick={addProduct}
        ></input>
      </div>
      <div className="cards">
        {products.map((product) => {
          return (
            <Card key={product.id}>
              <Card.Title>{product.name}</Card.Title>
              <Card.Body
                onClick={() => navigate(`/productdetail/${product.id}`)}
              >
                {product.description}
              </Card.Body>
              <Card.Footer>{product.price}</Card.Footer>
              <button id={product.id} onClick={() => deleteProduct(product.id)}>
                Delete
              </button>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default Home;
