import data from "../babyNamesData.json";
import "./BabyName.css"

export function BabyName(): JSX.Element {
  const namesList = data.map((el, i) => {
    if (el.sex === "f") {
      return (
        <li key={el.id} className="girl">
          {el.name}
        </li>
      );
    } else {
      return (
        <li key={el.id} className="boy">
          {el.name}
        </li>
      );
    }
  });

  return <ul>{namesList}</ul>;
}
