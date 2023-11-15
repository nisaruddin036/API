"use client"
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setMyData(res.data));
  }, []);

  return (
    <>
      <h1>Axios</h1>
      <div className="grid">
      {myData.map((post) => {
        const { id, title, body } = post;
        return (
          <div className="card" key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        );
      })}
      </div>
    </>
  );
}

export default App;
