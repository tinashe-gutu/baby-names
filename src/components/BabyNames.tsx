import "./BabyNames.css";
import { useState } from "react";
import { Favourites } from "./Favourites";

interface Names {
  id: number;
  name: string;
  sex: string;
}
interface ActiveGender {
  active: string;
}

interface Props {
  data: Names[];
  isActive: ActiveGender;
}

export function BabyNames({ data, isActive }: Props): JSX.Element {
  const [favouriteNames, setFavouriteNames] = useState<number[]>([]);

  function handleClick(key: number, isFavourite = false) {
    setFavouriteNames((prev): number[] => {
      console.log(key);
      if (prev.indexOf(key) >= 0 && isFavourite) {
        console.log("already in list");
        const removedArray = prev.filter((el) => el !== key);
        return [...removedArray];
      } else {
        console.log([...favouriteNames, key]);
        return [...favouriteNames, key];
      }
    });
  }

  data.sort((a, b) => a.name.localeCompare(b.name));
  const namesList = data.map((el): JSX.Element => {
    if (
      el.sex === "f" &&
      !favouriteNames.some((nums) => nums === el.id) &&
      (isActive.active === "girls" || isActive.active === "all")
    ) {
      return (
        <li key={el.id} className="girl">
          <button onClick={() => handleClick(el.id)}>{el.name}</button>
        </li>
      );
    } else if (
      el.sex === "m" &&
      !favouriteNames.some((nums) => nums === el.id) &&
      (isActive.active === "boys" || isActive.active === "all")
    ) {
      return (
        <li key={el.id} className="boy">
          <button onClick={() => handleClick(el.id)}>{el.name}</button>
        </li>
      );
    }
    return <></>;
  });

  return (
    <>
      <div>
        <Favourites babyNames={favouriteNames} onClick={handleClick} />
      </div>
      <hr />
      <div className="names-container">
        <ul>{namesList}</ul>
      </div>
    </>
  );
}
