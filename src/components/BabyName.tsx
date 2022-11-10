import "./BabyName.css";
interface Names {
  id: number;
  name: string;
  sex: string;
}
interface Props {
  data: Names[];
}

export function BabyName({ data }: Props): JSX.Element {
  data.sort((a, b) => a.name.localeCompare(b.name));
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

  return (
    <div className="names-container">
      <ul>{namesList}</ul>
    </div>
  );
}
