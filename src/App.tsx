import { BabyName } from "./components/BabyName";
import { SearchBar } from "./components/SearchBar";
import React, { useState } from "react";
import data from "./babyNamesData.json";
import { filtered } from "./utils/filtered";

function App(): JSX.Element {
  const [searchText, setSearchText] = useState("");
  const filteredNames = filtered(data, searchText);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setSearchText(e.target.value);
  }

  return (
    <>
      <SearchBar onChange={handleChange} text={searchText} />
      <BabyName data={filteredNames} />;
    </>
  );
}

export default App;
