interface SearchBarProps {
    search: string;
    onSearchChange: any;
    handleGenderClick: any;
   handleAllClick: any;
}

export default function SearchBar({search, onSearchChange, handleGenderClick, handleAllClick}: SearchBarProps):JSX.Element {
    return <>
        <input value={search} onChange={onSearchChange}></input>
        <form>
            <input type='radio' value='f' name='gender' onChange={handleGenderClick}></input>
            <input type='radio' value='m' name='gender' onChange={handleGenderClick}></input>
            <input type='radio' value='all' name='gender' onChange={handleAllClick}></input>

        </form>
        
        
    </>
}