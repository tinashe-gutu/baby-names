import {
  BsGenderMale,
  BsGenderFemale,
  BsGenderAmbiguous,
} from "react-icons/bs";
type handleFuntion = (sex: string) => void;

interface Genders {
  onClick: handleFuntion;
  gender: string;
  isActive: string;
}

export function GenderButton({
  onClick,
  gender,
  isActive,
}: Genders): JSX.Element {
  switch (gender) {
    case "boys":
      return (
        <button
          className={isActive === "boys" ? "active boy " : "inActive boy"}
          onClick={() => onClick(gender)}
        >
          <BsGenderMale />
        </button>
      );
    case "girls":
      return (
        <button
          className={isActive === "girls" ? "active girl" : "inActive girl"}
          onClick={() => onClick(gender)}
        >
          <BsGenderFemale />
        </button>
      );
    default:
      return (
        <button
          className={isActive === "all" ? "active" : "inActive"}
          onClick={() => onClick(gender)}
        >
          <BsGenderAmbiguous />
        </button>
      );
  }
}
