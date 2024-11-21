import React from "react";

class Class3 extends React.Component {
  constructor() {
    super();

    console.log(this);
    this.state = {
      name: "Changu",
      age: 23,
    };
  }

  f1() {
    this.setState({
      name: "Mangu",
    });
  }

  f2() {
    this.setState({
      age: this.state.age + 5,
    });
  }

  componentDidMount() {
    console.log("did mount cycle called", this.state.name, this.state.age);// this component didMount cycle will be called only once on mounting
  }

  componentDidUpdate() {
    console.log("did update cycle called", this.state.name, this.state.age);// this component didUpdate cycle will be called after every update / change);
    
  }
  componentWillUnmount() {
    console.log("Leaving Component!");
    
    console.log(":unmount cycle called", this.state.name, this.state.age);// this component didUnmount cycle will be called
    
  }

  render() {
    return (
      <div className="container">
        <h1>Life Cycle Hook</h1>
        <p>Name: {this.state.name}</p>
        <button onClick={() => this.f1()}>Change Name</button>
        <p>Age: {this.state.age}</p>
        <button onClick={() => this.f2()}>Change Age</button>
      </div>
    );
  }
}

export default Class3;
