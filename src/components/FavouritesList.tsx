import './buttons.css'
import {Name} from './MainBody'

interface FavouritesListProps {
    favourites: Name[] ;
    handleFavouriteClick: any;
}
export default function FavouritesList({favourites, handleFavouriteClick}:FavouritesListProps):JSX.Element {
    return <>
   {favourites.map((favourite,idx) => <button key ={idx} onClick={handleFavouriteClick} className={favourite.sex === 'f'? 'buttonFemale': 'buttonMale'}>{favourite.name}</button>)} 
    </>
}

{/* <div>{favourites.join(' ')}</div> */}