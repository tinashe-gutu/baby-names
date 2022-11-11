import "./BabyName.css";
import {useState} from 'react'
interface Names {
  id: number;
  name: string;
  sex: string;
}
interface Props {
  data: Names[];
}

export function BabyName({ data }: Props): JSX.Element {
  const[favouriteNames, setFavouriteNames] = useState<number[]>([])

  function handleClick(e:React.ChangeEvent<HTMLInputElement>, key:number){
    setFavouriteNames(():number[]=>{
      if(favouriteNames.indexOf(key)){
        const firstHalf = favouriteNames.splice(0,favouriteNames.indexOf(key))
        const secondHalf = favouriteNames.splice(favouriteNames.indexOf(key, favouriteNames.length))
        return [...firstHalf, ...secondHalf]
      }else{
        return [...favouriteNames, key]
      }
    })
  }

  data.sort((a, b) => a.name.localeCompare(b.name));
  const namesList = data.map((el) => {
    if (el.sex === "f") {
      return (
        <a key={el.id} className="girl" onClick={hand}>
          {el.name}
        </a>
      );
    } else {
      return (
        <a key={el.id} className="boy">
          {el.name}
        </a>
      );
    }
  });

  return (
    <>
      <div>
        <Favourites babyName={favouriteNames} onClick={handleClick}/>
      </div>
      <div className="names-container">
        <ul>{namesList}</ul>
      </div>
    </>
  );
}
