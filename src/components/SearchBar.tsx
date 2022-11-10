import { useState } from "react";

export function SearchBar(): JSX.Element {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="search-bar">
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        type="text"
        placeholder="Search for a name"
      />
      ;
    </div>
  );
}
