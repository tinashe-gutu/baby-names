import { filtered } from "./filtered";

test("filtered returns an array of item which start with specific query", () => {
  expect(filtered(data, "z")).toEqual([
    {
      id: 0,
      name: "Zahra",
      sex: "f",
    }
  ]);
  expect(filtered(data, "a")).toEqual([
    {
      id: 2,
      name: "Avah",
      sex: "f",
    }
  ]);
});

const data = [
  {
    id: 0,
    name: "Zahra",
    sex: "f",
  },
  {
    id: 1,
    name: "Parsa",
    sex: "m",
  },
  {
    id: 2,
    name: "Avah",
    sex: "f",
  },
  {
    id: 3,
    name: "Lala",
    sex: "f",
  },
  {
    id: 4,
    name: "Jamshed",
    sex: "m",
  },
];
