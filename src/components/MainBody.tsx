import NamesList from "./NamesList";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import FavouritesList from "./FavouritesList";
import data from "../data.json";

export interface Name {
  id: number;
  name: string;
  sex: string;
}

export default function MainBody(): JSX.Element {
  const [search, updateSearch] = useState("");
  const [favourites, setFavourites] = useState<Name[]>([]);
  //  const [click, updateClick] = useState('')
  const [genderedData, setGenderedData] = useState<Name[]>(data);

  function handleGenderClick(e: React.ChangeEvent<HTMLInputElement>) {
    setGenderedData(data.filter((element) => element.sex === e.target.value));
  }

  function handleAllClick() {
    setGenderedData(data);
  }

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    updateSearch(e.target.value);
  }

  function handleNameClick(e: React.MouseEvent<HTMLButtonElement>) {
    setFavourites([
      ...favourites,
      ...data.filter((el) => el.name === e.currentTarget.innerText),
    ]);
  }

  function handleFavouriteClick(e: React.MouseEvent<HTMLButtonElement>) {
    setFavourites(
      favourites.filter(
        (favourite) => favourite.name !== e.currentTarget.innerText
      )
    );
  }

  return (
    <>
      <SearchBar
        search={search}
        onSearchChange={handleSearchChange}
        handleGenderClick={handleGenderClick}
        handleAllClick={handleAllClick}
      />
      <p>favourites:</p>
      <FavouritesList
        favourites={favourites}
        handleFavouriteClick={handleFavouriteClick}
      />
      <p>names list:</p>
      <NamesList
        search={search}
        handleClickName={handleNameClick}
        favourites={favourites}
        genderedData={genderedData}
      />
    </>
  );
}
