import data from "../babyNamesData.json";

export function BabyName(): JSX.Element {
  return (
    <ul>
      {data.map((el, i) => (
        <li key={el.id}>{el.name}</li>
      ))}
    </ul>
  );
}
