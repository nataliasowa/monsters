import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState(""); //[value, setValue]
  const [monsters, setMonsters] = useState([]);

  console.log('render')

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const filteredMonsters = monsters.filter((monster) => {
          return monster.name.toLowerCase().includes(searchField);
        });

  return (
    <div className="App">
      <h1 className="app-title">Monsters Search</h1>
      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search-monsters"
      />
      <CardList monsters={filteredMonsters}/>
    </div>
  );
};

export default App;
