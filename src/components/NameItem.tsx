interface NameItemProps {
    key: number;
    name: string;
    sex: string;
    //click: string;
    handleClickName: any;
}

// click
export default function NameItem({name, handleClickName, }: NameItemProps):JSX.Element {
    return <button onClick={handleClickName}>{name} </button>
}

// (e) => console.log(e.currentTarget.innerText)

//value={click} 