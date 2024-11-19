import React from "react";
import Product from "./Product";

function Content() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-3">
          <Product name="Nike" price="5369" />
        </div>
        <div className="col-xl-3">
          <Product name="Puma" price="6269" />
        </div>
        <div className="col-xl-3">
          <Product name="Adidas" price="2269" />
        </div>
        <div className="col-xl-3">
          <Product name="Spark" price="700" />
        </div>
      </div>
    </div>
  );
}
export default Content;
