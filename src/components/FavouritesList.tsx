import "./buttons.css";
import { Name } from "./MainBody";

interface FavouritesListProps {
  favourites: Name[];
  handleFavouriteClick: React.MouseEventHandler<HTMLButtonElement>;
}
export default function FavouritesList({
  favourites,
  handleFavouriteClick,
}: FavouritesListProps): JSX.Element {
  return (
    <>
      {favourites.map((favourite, idx) => (
        <button
          key={idx}
          onClick={handleFavouriteClick}
          className={favourite.sex === "f" ? "buttonFemale" : "buttonMale"}
        >
          {favourite.name}
        </button>
      ))}
    </>
  );
}
