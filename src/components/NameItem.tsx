import './buttons.css'

interface NameItemProps {
    key: number;
    name: string;
    sex: string;
    //click: string;
    handleClickName: any;
}

// click
export default function NameItem({name, handleClickName, sex}: NameItemProps):JSX.Element {
    return <button onClick={handleClickName} className={sex === 'f'? 'buttonFemale': 'buttonMale'}>{name} </button>
}

// (e) => console.log(e.currentTarget.innerText)

//value={click} 