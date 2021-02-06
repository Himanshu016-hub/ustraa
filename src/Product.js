import React from "react";
import "./Product.css";
import ProductList from "./ProductList";
function Product() {
  return (
    <div className="product">
      <div className="product__title">
        <h5>Sales</h5>
        <p
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Awesome Products. Lot Of Savings.
        </p>
      </div>
      <div className="product__row">
        <ProductList />
        <ProductList />
        <ProductList />
      </div>
      <div className="product__row">
        <ProductList />
        <ProductList />
        <ProductList />
      </div>
      <div className="product__row">
        <ProductList />
        <ProductList />
        <ProductList />
      </div>
    </div>
  );
}
export default Product;
