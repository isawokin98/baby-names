
interface FavouritesListProps {
    favourites: string[]
    handleFavouriteClick: any;
}
export default function FavouritesList({favourites, handleFavouriteClick}:FavouritesListProps):JSX.Element {
    return <>
   {favourites.map((favourite,idx) => <button key ={idx} onClick={handleFavouriteClick}>{favourite}</button>)} 
    </>
}

{/* <div>{favourites.join(' ')}</div> */}