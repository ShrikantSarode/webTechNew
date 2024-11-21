import React, { useState } from "react";
import Left from "./Left";
import Right from "./Right";

export default function Parent() {


    var [category, setCategory] = useState();
  function parentfun(data) {
      console.log("Parent fun Called!", data);
      setCategory(data);
  }

  return (
    <div className="container">
          <h1>State Lift Example,{category}</h1>
      <div className="row">
        <div className="col-3">
          <Left p1={parentfun} />
        </div>
        <div className="col-9">
          <Right  p2={category} />
        </div>
      </div>
    </div>
  );
}
