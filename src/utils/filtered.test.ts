import {filtered} from "./filtered";

test("filtered returns a string, greeting the passed name", () => {
  expect(filtered(foods, 'sush')).toEqual("Hello, World!");
  expect(filtered()).toBe("Hello, Richard!");
  expect(filtered()).toBe("Hello, Academy Scholars!");
});




