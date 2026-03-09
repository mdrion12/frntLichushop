import React, { useEffect, useState, useContext } from 'react';
import ProductCart from './ProductCart';
import { CartContext } from './CartContext';
import './Products.css';

const Products = () => {
    const [data, setData] = useState([]);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        fetch('https://lichushop-1.onrender.com/productList/')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="products-container">
            {data.map(item => (
                <ProductCart key={item.id} data={item} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default Products;