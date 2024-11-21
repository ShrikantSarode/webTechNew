import React, { Component } from "react";

export default class Class4 extends Component {
  constructor() {
    super();
    this.state = {
      apiData: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:9000/users")
      .then((res) => res.json())
      .then((value) => {
        console.log(value);
        this.setState({ apiData: value });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  render() {
    let result = this.state.apiData;

    return (
      <div className="container">
        <h1>Fetch Data from NodeJs</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Place</th>
            </tr>
          </thead>
          {result &&
            result.length > 0 &&
                    result.map((value) => {
                        return (
                    <tr>
                <td>{value.name}</td>
                <td>{value.age}</td>
                <td>{value.place}</td>
              </tr>
                )
              
            })}
        </table>
      </div>
    );
  }
}
