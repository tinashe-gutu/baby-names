import { BabyName } from "./components/BabyName";
import { SearchBar } from "./components/SearchBar";
import { useState } from "react";
function App(): JSX.Element {
  const [searchText, setSearchText] = useState("");

  function handleChange(e:any){
    setSearchText(e.target.value)
  }

  return (
    <>
      <SearchBar onChange={handleChange} text={searchText}/>
      <BabyName />;
    </>
  );
}

export default App;
