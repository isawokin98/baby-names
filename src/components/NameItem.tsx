interface NameItemProps {
    key: number;
    name: string;
    sex: string;
}


export default function NameItem({name, sex}: NameItemProps):JSX.Element {
    return <p>{name} {sex}</p>
}