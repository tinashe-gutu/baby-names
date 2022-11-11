import data from "../babyNamesData.json";
import "./BabyNames.css";

type onChangeFunction = (key: number, isFavrourite: boolean) => void;

interface Names {
  id: number;
  name: string;
  sex: string;
}
interface Props {
  babyNames: number[];
  onClick: onChangeFunction;
}

export function Favourites({ babyNames, onClick }: Props): JSX.Element {
  const FavouriteData = data.filter((item: Names) =>
    babyNames.some((el) => item.id === el)
  );
  console.log(FavouriteData);
  FavouriteData.sort((a, b) => a.name.localeCompare(b.name));
  const namesList = FavouriteData.map((el) => {
    if (el.sex === "f") {
      return (
        <li key={el.id} className="girl">
          <button onClick={() => onClick(el.id, true)}>{el.name}</button>
        </li>
      );
    } else {
      return (
        <li key={el.id} className="boy">
          <button onClick={() => onClick(el.id, true)}>{el.name}</button>
        </li>
      );
    }
  });
  return (
    <div className="favourites-container">
      <p className="favourite-p">Favourites: </p>
      {namesList.length === 0 ? (
        <p>Click some names below to add to your shortlist...</p>
      ) : (
        <ul>{namesList}</ul>
      )}
    </div>
  );
}
