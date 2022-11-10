import { useState } from "react";
type onChangeFunction = (e:React.ChangeEvent<HTMLInputElement>)=>void

interface Search{
  onChange: onChangeFunction
  text: string
}

export function SearchBar({onChange, text}:Search): JSX.Element {
  return (
    <div className="search-bar">
      <input
        value={text}
        onChange={(e) =>onChange(e)}
        type="text"
        placeholder="Search for a name"
      />
    </div>
  );
}
