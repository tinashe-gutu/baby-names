import { BabyNames } from "./components/BabyNames";
import { SearchBar } from "./components/SearchBar";
import React, { useState } from "react";
import data from "./babyNamesData.json";
import { filtered } from "./utils/filtered";
import { GenderButton } from "./components/GenderButton";
import "./App.css";

interface Active {
  active: string;
}
function App(): JSX.Element {
  const [searchText, setSearchText] = useState("");
  const filteredNames = filtered(data, searchText);
  const [isActive, setIsActive] = useState<Active>({ active: "all" });

  function handleActiveClick(gender: string) {
    setIsActive(
      (currentActive): Active => ({ ...currentActive, active: gender })
    );
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setSearchText(e.target.value);
  }

  return (
    <div className="container">
      <div className="header">
        <SearchBar onChange={handleChange} text={searchText} />
        <GenderButton
          isActive={isActive.active}
          onClick={() => handleActiveClick("all")}
          gender="all"
        />
        <GenderButton
          onClick={() => handleActiveClick("girls")}
          gender="girls"
          isActive={isActive.active}
        />
        <GenderButton
          isActive={isActive.active}
          onClick={() => handleActiveClick("boys")}
          gender="boys"
        />
      </div>
      <BabyNames data={filteredNames} isActive={isActive} />;
    </div>
  );
}

export default App;
