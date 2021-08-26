interface SearchBarProps {
    search: string;
    onSearchChange: any;
}

export default function SearchBar({search, onSearchChange}: SearchBarProps):JSX.Element {
    return <>
        <input value={search} onChange={onSearchChange}></input>
    </>
}