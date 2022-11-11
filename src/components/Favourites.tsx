import data from "../babyNamesData.json";

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
          <a onClick={() => onClick(el.id, true)}>{el.name}</a>
        </li>
      );
    } else {
      return (
        <li key={el.id} className="boy">
          <a onClick={() => onClick(el.id, true)}>{el.name}</a>
        </li>
      );
    }
  });
  return (
    <p>
      Favourite Names: <ul>{namesList}</ul>
    </p>
  );
}
