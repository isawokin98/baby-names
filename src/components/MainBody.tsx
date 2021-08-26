import NamesList from "./NamesList";
import { useState } from "react";
import SearchBar from "./SearchBar";
import FavouritesList from "./FavouritesList";

 export default function MainBody():JSX.Element {

    const [search, updateSearch] = useState('')
    const [favourites, setFavourites] = useState([''])
    const [click, updateClick] = useState('')

    function handleSearchChange(e:any){
        updateSearch(e.target.value)
    }

    function handleNameClick(e: any){
        updateClick(e.currentTarget.innerText)
        setFavourites(favourites => [...favourites, click])
    }

    return <> 

    <SearchBar search={search} onSearchChange={handleSearchChange} />
    <FavouritesList favourites={favourites}/>
    <NamesList search={search} click={click} handleClickName={handleNameClick}/>
    </>
}