import { useState } from "react"; 
import Card from "../components/Card/Card"; 
import Filter from "../components/Filter/Filter"; 
import Search from "../components/Search/Search"; 
import { products } from "../data"; 
 
export default function CatalogPage() { 
 
    const [query, setQuery] = useState("") 
    const [sorting, setSorting] = useState('default') 
 
    const onSortingChange = (event) => { 
        setSorting(event.target.value) 
    } 
 
    const onChangeQuery = (event) => { 
        setQuery(event.target.value) 
    } 
 
    const filteredProducts = products.filter((item) => 
 
        item.name.toLowerCase().includes(query.toLocaleLowerCase()) 
 
    ) 
 
    const sortProducts = (sorting, products) => {
        switch (sorting) {
            case 'priceAscending':
                return [...products].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            case 'priceDescending':
                return [...products].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            case 'nameA':
                return [...products].sort((a, b) => a.name.localeCompare(b.name));
            case 'nameZ':
                return [...products].sort((a, b) => b.name.localeCompare(a.name));
            default:
                return products;
        }
    };
 
    const fullSorting = sortProducts(sorting, filteredProducts) 
 
 
 
    return ( 
        <> 
 
            <h1>Каталог</h1> 
 
            <div className="filtered"> 
 
                <Filter sorting={sorting} onSortingChange={onSortingChange} /> 
 
                <Search query={query} onChangeQuery={onChangeQuery} /> 
 
            </div> 
 
            <div className="cards"> 
 
                { 
                    fullSorting.length ? ( 
                        fullSorting.map((product, index) => ( 
                            <Card key={index} {...product} /> 
                        )) 
                    ) : ( 
                        <h2>По вашему запросу {query} ничего не найдено!</h2> 
                    )} 
 
            </div> 
 
        </> 
    ) 
}