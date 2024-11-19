import React, { useState, useEffect } from "react"; // Import useState

export default function Home() {
  const [data, setData] = useState([]); // Correctly use useState

  useEffect(() => {
    fetch("http://localhost:9000/users")
      .then((res) => res.json())
      .then((value) => {
        console.log(value);
        setData(value);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []); // Empty dependency array, runs once when component mounts

  return (
    <div className="container text-center">
      <h1>Show Users</h1>
      <table className="table">
        <thead>
          <tr>
           
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Place</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((record, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{record.name}</td>
                <td>{record.age}</td>
                <td>{record.place}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No users found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
