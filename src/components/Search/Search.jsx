import search from "../../../public/icons/search.svg"
import "./Search.css"

export default function Search({ query, onChangeQuery }) {
    return (
        <>
        
            <div className="search">

                <label htmlFor="search"></label>
                <input 
                    value={query} 
                    type="text" 
                    name="search" 
                    placeholder="Поиск"
                    onChange={(e) => onChangeQuery(e)} 
                />


                <img src={search} alt="search" />

            </div>
        
        </>
    )
}