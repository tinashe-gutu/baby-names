import "./SearchBar.css";

type onChangeFunction = (e: React.ChangeEvent<HTMLInputElement>) => void;

interface Search {
  onChange: onChangeFunction;
  text: string;
}

export function SearchBar({ onChange, text }: Search): JSX.Element {
  return (
    <div className="search-container">
      <input
        value={text}
        onChange={(e) => onChange(e)}
        type="text"
        placeholder="Search for a name"
        className="search-box"
      />
    </div>
  );
}
