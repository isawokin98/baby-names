import NamesList from "./NamesList";
import { useState } from "react";
import SearchBar from "./SearchBar";
import FavouritesList from "./FavouritesList";

 export default function MainBody():JSX.Element {

    const [search, updateSearch] = useState('')
    const [favourites, setFavourites] = useState<string[]>([])
  //  const [click, updateClick] = useState('')

    function handleSearchChange(e:any){
        updateSearch(e.target.value)
    }

    function handleNameClick(e: any){
       // updateClick(e.currentTarget.innerText)
        setFavourites([...favourites, e.currentTarget.innerText])
    }

    function handleFavouriteClick(e: any){
        setFavourites(favourites.filter(favourite => favourite !== e.currentTarget.innerText))
    }

    return <> 

    <SearchBar search={search} onSearchChange={handleSearchChange} />
    <p>favourites:</p>
    <FavouritesList favourites={favourites} handleFavouriteClick={handleFavouriteClick}/>
    <p>names list:</p>
    <NamesList search={search}  handleClickName={handleNameClick} favourites={favourites}/>
    </>
}
//click={click}