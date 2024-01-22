import {useState} from 'react'
import data from '../resources/countryData.json'
import './search.css'
function Search() {
   const [search, setSearch] = useState("")
   const [show,setShow]=useState(false)
   const handleKeyDown=(event)=>{
    if(event.key=='Escape'){
        setShow(false)
    }
    if(event.key=='Enter'){
        setShow(true)
    }
   }

  return (
    <>
        <div id="Search-container">
            <h2>Search : </h2>
            <input type="text" 
            placeholder="type anything here..."
            onChange={(e)=>{setSearch(e.target.value),setShow(true)}}
            onKeyDown={handleKeyDown}
            />  
            <button><img src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png" alt="search-icon" /></button>      
        </div>
        <div>
        
            {show && data.filter(country=>country.name.toLowerCase().startsWith(search.toLowerCase())).map((country,index)=>(
                <div key={index}>
                    <h3>{country.name}</h3>
                </div>
            ))}
        </div>
    </>
  )
}

export default Search
