interface SearchBarProps {
    search: string;
    onSearchChange: any;
    handleFemaleClick: any;
    handleMaleClick: any;
    handleAllClick: any;
}

export default function SearchBar({search, onSearchChange, handleAllClick, handleFemaleClick, handleMaleClick}: SearchBarProps):JSX.Element {
    return <>
        <input value={search} onChange={onSearchChange}></input>
        <button onClick={handleFemaleClick}>Female</button>
        <button onClick={handleMaleClick}>Male</button>
        <button onClick={handleAllClick}>Any gender</button>
    </>
}