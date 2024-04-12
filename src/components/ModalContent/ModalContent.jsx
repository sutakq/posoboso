import "./ModalContent.css"
import { useState } from 'react';
export default function ModalContent({ closeModal }) {
    const [cartItems, setCartItems] = useState([
        // Здесь можете передать начальные товары в корзину
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 15 },
        { id: 3, name: 'Product 3', price: 20 },
    ]);

    const removeItem = (index) => {
        // Создаем копию массива товаров в корзине
        const updatedCartItems = [...cartItems];
        // Удаляем товар из массива по индексу
        updatedCartItems.splice(index, 1);
        // Обновляем состояние корзины
        setCartItems(updatedCartItems);
    };
    return (
        <>

            <div className="ReactModal__Content">
                <div class="wrap cf">
                    <h1 class="projTitle">Корзина</h1>
                    <div class="heading cf">
                        <h1>Товары</h1>
                       
                    </div>
                    <div class="cart">

                        <ul class="cartWrap">
                        {cartItems.map((item, index) => (
                                
                          
                        <li class="items odd" key={item.id}>

                        <div class="infoWrap">
                            <div class="cartSection">
                                <img src="../../public/products/product.jpg" alt="" class="itemImg" />
                                <p class="itemNumber">#QUE-007544-002</p>
                                <h3>{item.name}</h3>

                               

                                <p class="stockStatus"> In Stock</p>
                            </div>


                            <div class="prodTotal cartSection">
                                <p>{item.price}.00 ₽</p>
                            </div>
                            <div class="cartSection removeWrap">
                                <button onClick={() => removeItem(index)} class="remove">Удалить</button>
                            </div>
                        </div>
                        </li>
                            ))}
                           
                          

                        </ul>
                    </div>

                    
                    <div class="subtotal cf">
                        <ul>
                            <li class="totalRow"><span class="label">Subtotal</span><span class="value">35.00 ₽</span></li>

                            <li class="totalRow"><span class="label">Shipping</span><span class="value">5.00 ₽</span></li>

                            <li class="totalRow"><span class="label">Tax</span><span class="value">4.00 ₽</span></li>
                            <li class="totalRow final"><span class="label">Total</span><span class="value">44.00 ₽</span></li>
                            <li class="totalRow"><a href="#" class="btn continue">Checkout</a></li>
                        </ul>
                    </div>
                </div>
                <button onClick={closeModal}>Закрыть</button>

            </div>

        </>
    )
}