import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import "./sass/index.scss";
import App from "./App";
import { ProductProvider } from "./contexts/ProductContext";
import { CartProvider } from "./contexts/CartContext";
const AppWithRouter = withRouter(App);

ReactDOM.render(
  <ProductProvider>
    <CartProvider>
      <Router>
        <AppWithRouter />
      </Router>
    </CartProvider>
  </ProductProvider>,
  document.getElementById("root")
);
