import React, { useRef } from "react";

export default function Login() {
  let x1 = useRef(); // it is like getElementById
  let x2 = useRef(); // it is like getElementById
  let x3 = useRef(); // it is like getElementById

  function f1() {
    alert("Clicked login");
    // console.log(x1.current.value, x2.current.value);

    var data = {
      name: x1.current.value,
      age: x2.current.value,
      place: x3.current.value,
    };
    console.log(data);
    data = JSON.stringify(data);
    // console.log(data);

    fetch("http://localhost:9000/users", {
      method: "POST",
      body: data,
      headers: { "content-type": "application/json" },
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <div className="container">
      <h1>Login Form</h1>
      <input type="text" name="" id="" placeholder="name" ref={x1} />
      <br />
      <input type="text" name="" id="" placeholder="age" ref={x2} />
      <br />
      <input type="text" name="" id="" placeholder="place" ref={x3} />
      <br />
      <button className="btn btn-warning mt-2" onClick={f1}>
        Login
      </button>
      <p></p>
      <p></p>
    </div>
  );
}
