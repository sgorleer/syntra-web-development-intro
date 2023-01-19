import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home page</h1>
      <h2 onClick={() => navigate(`/Products`)}>Products</h2>
    </div>
  );
}

export default Home;
