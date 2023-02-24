import React, { useState, useEffect } from "react";
import axios from "axios";
import Karakter from "./components/Karakter";
import "./App.css";

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  function aramaYap(e) {
    setData(e.target.value);
  }

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Star Wars Major Characters List </h1>
      <input type="text" placeholder="Arama" onChange={aramaYap}></input>

      {data && data.map(item=>{
        return <Karakter data={item}/>
      })} 
    </div>
  );
};

export default App;
