import data from '../data.json'
import NameItem from './NameItem'

export default function NamesList():JSX.Element {
    
    data.sort(function(a,b){
        if(a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
    })
    
    
    return <>
{data.map(item => <NameItem key={item.id} name={item.name} sex={item.sex}/>)}

    </>
}
