import "./SearchBar.css";

type onChangeFunction = (e: React.ChangeEvent<HTMLInputElement>) => void;

interface TextProps {
  onChange: onChangeFunction;
  text: string;
}

export function SearchBar({ onChange, text }: TextProps): JSX.Element {
  return (
    <div className="search-container">
      <input
        value={text}
        onChange={(e) => onChange(e)}
        type="text"
        placeholder="TextProps for a name"
        className="search-box"
      />
    </div>
  );
}
