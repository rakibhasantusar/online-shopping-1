import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {

    const [cart, setCart] = useState([])
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const handleAddToCart = (p) => {
        const newCart = [...cart, p]
        setCart(newCart)
    }

    return (
        <div className='shop-container'>
            <div >
                <h3>product acey {product.length}</h3>
                <div className="products-container">
                    {
                        product.map(p => <Product
                            key={p.id}
                            product={p}
                            handleAddToCart={handleAddToCart} // aikhan a mainly function pathaia dilam call kora jabe na just name send
                        ></Product>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;