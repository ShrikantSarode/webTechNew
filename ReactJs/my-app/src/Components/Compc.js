import React, { useContext } from 'react'
import contextAPI from '../contextAPI'

export default function Compc(props) {
  
  var record= useContext(contextAPI)
  return (
    <>
      <div>Compc ,{props.p2}</div>
      <p>Data from context Api: {record}</p>
    </>
  );
}
