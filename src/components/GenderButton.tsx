
type handleFuntion = (sex:string)=>void

interface Genders{
    onClick:handleFuntion
    gender: string
}

export function GenderButton({onClick, gender}:Genders):JSX.Element{
    switch(gender){
        case 'boys':
            return <button onClick={()=>onClick(gender)}>Boys</button>
        case 'girls': 
            return <button onClick={()=>onClick(gender)}>Girls</button>
        default:
            return <button onClick={()=>onClick(gender)}>All</button>
    }
}

