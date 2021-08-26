import NamesList from "./NamesList";
import { useState } from "react";
import SearchBar from "./SearchBar";

 export default function MainBody():JSX.Element {

    const [search, updateSearch] = useState('')
    function handleSearchChange(e:any){
        updateSearch(e.target.value)
    }



    return <> 

    <SearchBar search={search} onSearchChange={handleSearchChange} />
    <NamesList/>
    </>
}