interface Names {
  id: number;
  name: string;
  sex: string;
}

export function filtered(data: Names[], query: string): Names[] {
  query = query.toLowerCase();
  return data.filter((item) => {
    return item.name.split(" ").some((letter) => {
      return letter.toLowerCase().startsWith(query);
    });
  });
}
