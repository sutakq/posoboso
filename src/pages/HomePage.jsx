import Banner from "../components/Banner/Banner"
import Button from "../components/Button/Button"
import Card from "../components/Card/Card"

import Slider from "../components/Slider/Slider"

import { partners, products } from "../data"

export default function HomePage() {
    return (
        <>

        <main>

        <Banner />

        <h2>Каталог</h2>

        <div className="cards">

            {products.map((product, index) =>  (
            <Card key={index} {...product} />
            ))}

        </div>

        <div className="card-button">
            <Button backgroundColor="#333" color="#f3f3f3">Каталог</Button>
        </div>

        <h2>Популярные товары</h2>

        <div className="favorites">

            <Slider />

        </div>

       

        </main>

        
        </>
    )
}