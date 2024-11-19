import React, { useEffect, useState } from "react";

export default function Register() {
  var [count, setCount] = useState(100);
  var [name, setName] = useState("Shrikant");
  // var [name1, setName1] = useState("Shrikant");
  // var name2="Shrikant"
  //when you visited the commponent useEffect hook get called
  //if we are changing state variable then useEffect hook will be recalled/ called again and again.

  // useEffect(() => {
  //   console.log("Use Effect", count, setCount);
  // });
  function f1() {
    // alert("Registered!");
    setCount(count + 100);
  }
  function f2() {
    // setName(name2 + " Registered");
    setName(" Registered");
  }
  //useEffect with conditional rendering variables i.e name 
  //it will render only the name changed
    useEffect(() => {
      console.log("UseEffect", count);

      return () => {
        console.log("Im leaving");
        
      }
    }, []);
  
  return (
    <div className="container">
      <h1>State Variable</h1>
      <p>{count}</p>
      <button className="btn btn-info" onClick={f1}>
        Count add 100
      </button>
      <p>{name}</p>
      <button className="btn btn-info" onClick={f2}>
        change Name
      </button>
    </div>
  );
}
