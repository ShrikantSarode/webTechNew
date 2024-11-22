import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInCart } from "../Redux/Slices/cartSlice";

export default function Right(props) {
  // Getting the category value from Redux store
  let ans = useSelector((state) => state.category.value);

  // Initialize state for products as an empty array
  const [product, setProduct] = useState([]);

  // Fetch products whenever the category changes
  useEffect(() => {
    // Fetch products based on the category selected in Redux store
    fetch("https://fakestoreapi.com/products/category/" + ans)
      .then((res) => res.json())
      .then((json) => setProduct(json))
      .catch((error) => {
        console.error("Error fetching products:", error);
        setProduct([]); // Optionally set an empty array on error
      });
  }, [ans]); // Re-run the effect when the category changes

  let dispatch = useDispatch();

  function addtocart(value) {
    console.log(value);
    dispatch(addInCart(value));
  }
  return (
    <div>
      <h1>Right(props.p2)</h1>
      <p>Data from Redux: {ans}</p>

      <div className="row">
        {/* Ensure that product array has data before rendering */}
        {product && product.length > 0 ? (
          product.map((value, index) => (
            <div key={index} className="col-3">
              {/* Display product image */}
              <img src={value.image} alt={value.title} className="img-fluid" />
              <h2>{value.price}</h2>
              <p>{value.title}</p>
              <button onClick={() => addtocart(value)}>Add To Cart</button>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}
