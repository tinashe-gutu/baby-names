import "./BabyName.css";
import { useState } from "react";
import { Favourites } from "./Favourites";

interface Names {
  id: number;
  name: string;
  sex: string;
}
interface Props {
  data: Names[];
}
interface Active{
  active:string
}

export function BabyName({ data }: Props): JSX.Element {
  const [favouriteNames, setFavouriteNames] = useState<number[]>([]);
  const [isActive, setIsActive] = useState<Active>({active:'all'})

  function handleActiveClick(gender:string){
    setIsActive((currentActive):Active=>({...currentActive, active:gender}))
  }


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
    if (el.sex === "f" && !favouriteNames.some((nums) => nums === el.id) && isActive.active===('girls'||'all')) {
      return (
        <li key={el.id} className="girl">
          <button onClick={() => handleClick(el.id)}>{el.name}</button>
        </li>
      );
    } else if (
      el.sex === "m" &&
      !favouriteNames.some((nums) => nums === el.id)
      && isActive.active===('boys'||'all')
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
        <Button onClick={()=>handleActiveClick('all') gender='all'} />
        <Button onClick={()=>handleActiveClick('girls') gender='girls'} />
        <Button onClick={()=>handleActiveClick('boys') gender='boys'} />
      </div>
      <div className="names-container">
        <ul>{namesList}</ul>
      </div>
    </>
  );
}
