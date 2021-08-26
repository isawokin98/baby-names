import data from '../data.json'
import NameItem from './NameItem'

interface NamesListProps {
    search: string;
    //click: string;
    handleClickName: any;
}
//click
export default function NamesList({search,  handleClickName}: NamesListProps):JSX.Element {
    
    data.sort(function(a,b){
        if(a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
    })

    const filteredData = data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    
    
    return <>
{filteredData.map(item => <NameItem key={item.id} name={item.name} sex={item.sex} handleClickName={handleClickName}/>)}

    </>
}
//click={click} 