import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

function App() {
  const [djs, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  //fetching users from api
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
      });
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };
  //filtering the Djs
  const filteredDjs = djs.filter((dj) => {
    return dj.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return !djs.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">DjFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList djs={filteredDjs} />
      </Scroll>
    </div>
  );
}

export default App;
