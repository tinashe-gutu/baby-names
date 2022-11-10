interface Names{
  id: number
  name: String
  sex: string
}

export function filtered(data:Names[], query:string):Names[]{
  query = query.toLowerCase();
  return data.filter(item=>{
    item.name.split('').some(letter=>{
      letter.toLowerCase().startsWith(query)
    })
  })


}
