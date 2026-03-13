import React from 'react';
import './ProductCart.css';
import { Link } from 'react-router-dom';

const ProductCart = ({ data, addToCart }) => {
    return (
        <div className="product-card">
            <div className="product-image">
                {data.product_image ? (
                    <img src={data.product_image} alt={data.product_name} />
                ) : (
                    <div className="no-image">No Image</div>
                )}
            </div>

            <div className="product-info">
                <h3>{data.product_name}</h3>
                <p>{data.product_description}</p>
                <p>৳ {data.price}</p>
                <p>{data.stock > 0 ? `In Stock: ${data.stock}` : 'Out of Stock'}</p>

                <button
                    className="add-to-cart"
                    disabled={data.stock === 0}
                    onClick={() => addToCart(data)}
                >
                    {data.stock > 0 ? 'Add to Cart' : 'Unavailable'}
                </button>
                <button className="add-to-cart">
                    <Link to={`/product/${data.id}`}>details</Link> </button>
            </div>
        </div >
    );
};

export default ProductCart;