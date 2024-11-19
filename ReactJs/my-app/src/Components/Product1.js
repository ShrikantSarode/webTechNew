import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Product1() {
  var [record, setrecord] = useState([]);
  useEffect(() => {
    var result = axios.get("https://fakestoreapi.com/products/");
    console.log(result);
    result.then((value) => {
      console.log(value.data);
      setrecord(value.data);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {record &&
          record.length > 0 &&
          record.map((val) => (
            <div className="col-3">
              <img src={val.image} alt="" className="img-fluid" />
              <h2>{val.price}</h2>
              <h2>{val.title}</h2>
            </div>
          ))}
      </div>
    </div>
  );
}
