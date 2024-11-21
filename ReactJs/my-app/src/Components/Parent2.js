import React from "react";
import Child2 from "./Child2";
import ErrorBoundary from "../ErrorBoundary";

export default function Parent2() {
  return (
    <div className="container">
      <h1>Error Boundary</h1>
      <div className="row">
        <div className="col-4">
          <Child2 p1="https://levi.in/cdn/shop/files/A83580003_02_StyleShot_360x.jpg?v=1720614500" />
        </div>
        <div className="col-4">
          <Child2 p1="https://levi.in/cdn/shop/files/A13230081_01_Style_Shot_a08c7f90-c8a5-4f11-b886-4c34615d9851_360x.jpg?v=1712743097" />
        </div>
        <div className="col-4">
          <ErrorBoundary>
          <Child2 p1="" />
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}
