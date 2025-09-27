import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <h1>Ritwik Kumar Mondal</h1>
      <p>JOKES: {jokes.length}</p>
      {jokes.map((joke, index) => (
        <div key={index}>
          <p>{joke}</p>
        </div>
      ))}
    </>
  );
}

export default App;
