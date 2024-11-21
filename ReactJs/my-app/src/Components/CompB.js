import React from "react";
import Compc from "./Compc";

export default function CompB(props) {
  return (
    <>
      <div>CompB {props.p1}</div>
      <Compc p2={props.p1} />
    </>
  );
}
