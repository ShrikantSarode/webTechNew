import React from 'react'
import { useSelector } from 'react-redux'

export default function Cart() {

    var ans = useSelector((state) => state.cart.value)
    console.log(ans);
    

  return (
    <div className="container">
      <h1>Cart Data</h1>

      <div className="row">
        {/* Ensure that product array has data before rendering */}
        {ans && ans.length > 0 ? (
          ans.map((value, index) => (
            <div key={index} className="col-3">
              {/* Display ans image */}
              <img src={value.image} alt={value.title} className="img-fluid" />
              <h2>{value.price}</h2>
              <p>{value.title}</p>
              <button>Remove</button>
            </div>
          ))
        ) : (
          <p>No ans found</p>
        )}
      </div>
    </div>
  );
}
