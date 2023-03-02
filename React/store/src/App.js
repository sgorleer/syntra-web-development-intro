import Home from "./components/Home";
import Productdetail from "./components/Productdetail";
import { Routes, Route } from "react-router-dom";
import ProductContext from "./state/ProductContext";
import { ProductProvider } from "./state/ProductContext";

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productdetail/:id" element={<Productdetail />}></Route>
        </Routes>
      </ProductProvider>
    </div>
  );
}

export default App;
