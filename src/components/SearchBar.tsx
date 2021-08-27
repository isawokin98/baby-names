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
        <form>
            <input type='radio' value='f' name='gender' onChange={handleFemaleClick}></input>
            <input type='radio' value='m' name='gender' onChange={handleMaleClick}></input>
            <input type='radio' value='all' name='gender' onChange={handleAllClick}></input>

        </form>
        
        
    </>
}