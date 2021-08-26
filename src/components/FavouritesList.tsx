

export default function FavouritesList({favourites}:any):JSX.Element {
    return <div>{favourites.join(' ')}</div>
}