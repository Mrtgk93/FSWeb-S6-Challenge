import React, { useState, useEffect } from "react";
import axios from "axios";
import Karakter from "./components/Karakter";
import { response } from "msw";

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

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Star Wars Major Characters List </h1>
      <Karakter data={data[0]} />
      <Karakter data={data[1]} />
      <Karakter data={data[2]} />
      <Karakter data={data[3]} />
      <Karakter data={data[4]} />
      <Karakter data={data[5]} />
      <Karakter data={data[6]} />
      <Karakter data={data[7]} />
      <Karakter data={data[8]} />
      <Karakter data={data[9]} />
    </div>
  );
};

export default App;
