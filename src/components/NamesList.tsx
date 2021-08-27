import data from '../data.json'
import { Name } from './MainBody'
import NameItem from './NameItem'

interface NamesListProps {
    search: string;
    //click: string;
    handleClickName: any;
    favourites: Name[];
    genderedData: Name[];

}
//click
export default function NamesList({search,  handleClickName, favourites, genderedData}: NamesListProps):JSX.Element {
    
    genderedData.sort(function(a: Name,b: Name){
        if(a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
    })

    const filteredData = genderedData.filter(item => item.name.toLowerCase().includes(search.toLowerCase()) && !favourites.includes(item))
    
    
    return <>
{filteredData.map(item => <NameItem key={item.id} name={item.name} sex={item.sex} handleClickName={handleClickName}/>)}

    </>
}
//click={click} 