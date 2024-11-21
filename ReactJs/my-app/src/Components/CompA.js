import React, { useRef, useState } from "react";
import CompB from "./CompB";
import contextAPI from "../contextAPI";

export default function CompA() {
  const [data, setData] = useState();
  const x1 = useRef();

  function f1() {
    console.log(x1.current.value);
    setData(x1.current.value);
  }

  return (
    <div className="container">
      <h1>Search</h1>
      <input
        className="p-2 m-2"
        type="text"
        name=""
        id=""
        placeholder="Enter Category"
        ref={x1}
      />
      <button className="btn btn-info" onClick={f1}>
        Search
      </button>
      {data}
      <contextAPI.Provider value={data}>
        <CompB p1={data} />
      </contextAPI.Provider>
    </div>
  );
}
