import React from "react";
import "./ProductList.css";
import StarRateIcon from "@material-ui/icons/StarRate";
import { Button } from "@material-ui/core";
function ProductList() {
  return (
    <div className="productlist">
      <div className="productlist__rating">
        <div style={{ display: "flex" }}>
          <p>4</p>
          <StarRateIcon />
        </div>
      </div>
      <div className="productlist__image">
        <img src="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/malt1_4_1.webp" />
      </div>
      <div className="productlist__name">
        <p>Malt - Perfume for Men - 100ml</p>
      </div>
      <div className="productlist__rate">
        <p>₹ 1499</p>
        <p style={{ color: "gray", fontSize: "13px" }}>(100ml)</p>
      </div>
      <Button
        style={{
          minWidth: "200px",
          backgroundColor: "#2bc442",
          color: "white",
        }}
      >
        {" "}
        Add To Cart
      </Button>




      <div className="productlist__rating">
        <div style={{ display: "flex" }}>
          <p>4</p>
          <StarRateIcon />
        </div>
      </div>
      <div className="productlist__image">
        <img src="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/bundle_1.webp" />
      </div>
      <div className="productlist__name">
        <p>Malt - Perfume for Men - 100ml</p>
      </div>
      <div className="productlist__rate">
        <p>₹ 1499</p>
        <p style={{ color: "gray", fontSize: "13px" }}>(100ml)</p>
      </div>
      <Button
        style={{
          minWidth: "200px",
          backgroundColor: "#2bc442",
          color: "white",
        }}
      >
        {" "}
        Add To Cart
      </Button>










    </div>
  );
}

export default ProductList;
