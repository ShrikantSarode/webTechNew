import React from "react";

class Class2 extends React.Component {
  constructor() {
    super();
    this.x1 = React.createRef(); //x1 is a reference variable becoz of this keyword it is global variable
    this.x2 = React.createRef();
    this.x3 = React.createRef();
  }

  f1() {
    console.log(this.x1);
    console.log(this.x1.current.value);
    var data = {
      name: this.x1.current.value,
      age: this.x2.current.value,
      place: this.x3.current.value,
    };

    data = JSON.stringify(data);

    console.log(data);

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
  render() {
    return (
      <div className="container">
        <h1>Reference Variable</h1>
        <input
          type="text"
          placeholder="Name"
          name=""
          id=""
          ref={this.x1}
          className="mt-2 p-2"
        />
        <br />
        <input
          type="text"
          placeholder="Age"
          name=""
          id=""
          ref={this.x2}
          className="mt-2 p-2"
        />
        <br />
        <input
          type="text"
          placeholder="Place"
          name=""
          id=""
          ref={this.x3}
          className="mt-2 p-2"
        />
        <br />
        <button
          onClick={() => {
            this.f1();
          }}
          className="btn btn-warning mt-2"
        >
          Submit
        </button>
      </div>
    );
  }
}
export default Class2;
//this is current class object
