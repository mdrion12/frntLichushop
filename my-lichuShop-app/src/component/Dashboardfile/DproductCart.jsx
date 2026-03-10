import React from 'react';
import "./DproductCart.css";

const DproductCart = ({ data }) => {
    return (
        <div className="product-card">
            <div className="product-image">
                {data.product_image
                    ? <img src={data.product_image} alt={data.product_name} />
                    : <div className="image-placeholder">No Image</div>}
            </div>
            <div className="product-details">
                <h3 className="product-name">{data.product_name}</h3>
                <p className="product-description">{data.product_description}</p>
                <p className="product-price">Price: ${data.price}</p>
                <p className={`product-stock ${data.stock > 0 ? "in-stock" : "out-of-stock"}`}>
                    {data.stock > 0 ? `In Stock: ${data.stock}` : "Out of Stock"}
                </p>
                <button className="add-to-cart">Add to Cart</button>
            </div>
        </div>
    );
};

export default DproductCart;