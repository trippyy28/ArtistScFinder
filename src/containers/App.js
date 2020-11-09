import React, { Component } from "react";
import CardList from "../components/CardList";
import { names } from "./names";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: names,
      searchfield: "",
    };
  }
  /*changing the state to the input value*/
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    /*destructring*/
    const { names, searchfield } = this.state;
    /*filtering the dj׳s names*/
    const filterNames = names.filter((name) => {
      return name.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return (
      <div className="tc">
        <h1>Dj׳s Monsters</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList names={filterNames} />
        </Scroll>
      </div>
    );
  }
}

export default App;
