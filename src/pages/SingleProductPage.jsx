import { useParams } from "react-router-dom"
import { products } from "../data"

export default function SingleProductPage() {

    const { id } = useParams()

    const product = products.find(product => product.id === parseInt(id))

    // if(!product) {
    //     return <h2>Данные товар не был найден!</h2>
    // }

    return (
        <>
            <div className="product-container">
                <div className="product__img">
                    <img src={product.photo} alt="" />
                </div>
                <div className="product__content">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <span>{product.price} ₽</span>
                </div>
            </div>
          
        
        </>
    )
}