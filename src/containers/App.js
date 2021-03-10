import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import { names } from "../containers/names";
import "./App.css";

function App() {
  const [djs, setDjs] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  //fetching users from api
  //useEffect(() => {
  //fetch("https://jsonplaceholder.typicode.com/users")
  //.then((response) => response.json())
  //.then((users) => {
  // setDjs(users);
  // });
  //}, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };
  //filtering the Djs
  const filteredDjs = names.filter((dj) => {
    return dj.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return !names.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">Dj׳S</h1>
      <SearchBox searchChange={onSearchChange} />

      <CardList djs={filteredDjs} />
    </div>
  );
}

export default App;
