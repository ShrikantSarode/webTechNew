import React from "react";

class Class1 extends React.Component {
  constructor() {
    super(); // it is mandatory to give
    console.log(this);
    }
    
    f1() {
        this.props.age = 24;
    }
  render() {
    return (
      <div className="container">
        <h1>Props Example</h1>
        <p>Name:{this.props.name}</p>
        <p>Age:{this.props.age}</p>
        <button
          onClick={() => {
            this.f1();
          }}
        >
          Submit
        </button>
      </div>
    );
  }
}
export default Class1;
//to show something we use render() method.
//constructor is used for initialization perpose and it overrides parent class (React.Component)properties.
//and to override parent class super() method is must.

//in class to access properties we have to use this

//we cannot change props it is only decoration purpose
//if we try to change it will give error
