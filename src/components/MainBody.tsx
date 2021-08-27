import NamesList from "./NamesList";
import { useState } from "react";
import SearchBar from "./SearchBar";
import FavouritesList from "./FavouritesList";
import data from '../data.json'

export interface Name {
    id: number;
    name: string;
    sex: string
}

 export default function MainBody():JSX.Element {

    const [search, updateSearch] = useState('')
    const [favourites, setFavourites] = useState<Name[]>([])
  //  const [click, updateClick] = useState('')
    const [genderedData, setGenderedData] = useState<Name[]>(data)

    function handleFemaleClick(e: any){
        setGenderedData(data.filter(element => element.sex === 'f'))
    }
    function handleMaleClick(e: any){
        setGenderedData(data.filter(element => element.sex === 'm'))
    }
    function handleAllClick(e: any){
        setGenderedData(data)
    }

    function handleSearchChange(e:any){
        updateSearch(e.target.value)
    }

    function handleNameClick(e: any){
       // updateClick(e.currentTarget.innerText)
        setFavourites([...favourites, ...data.filter(el => el.name === e.currentTarget.innerText)])
    }

    function handleFavouriteClick(e: any){
        setFavourites(favourites.filter(favourite => favourite.name !== e.currentTarget.innerText))
    }

    return <> 

    <SearchBar search={search} onSearchChange={handleSearchChange} handleFemaleClick={handleFemaleClick} handleMaleClick={handleMaleClick} handleAllClick={handleAllClick}/>
    <p>favourites:</p>
    <FavouritesList favourites={favourites} handleFavouriteClick={handleFavouriteClick}/>
    <p>names list:</p>
    <NamesList search={search}  handleClickName={handleNameClick} favourites={favourites} genderedData={genderedData}/>
    </>
}
//click={click}