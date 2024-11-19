import React from "react";

export default function Product(props) {
  console.log(props);

    function f1() {
        alert("Product")
        // props.price = 2000;
    }
  return (
    <div>
      <h2>{props.price}</h2>
      <p>{props.name}</p>
      <button onClick={f1} className="btn btn-dark">Add To Cart</button>
    </div>
  );
}
