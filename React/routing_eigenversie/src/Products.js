import React from "react";
import { products } from "./productdatabase";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

function Products() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => {
        return (
          <Card key={product.id}>
            <Card.Title onClick={() => navigate(`/Products/${product.id}`)}>
              {product.name}
            </Card.Title>
          </Card>
        );
      })}
    </div>
  );
}

export default Products;
