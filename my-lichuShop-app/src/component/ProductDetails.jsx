import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css'; // import CSS file

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://lichushop-1.onrender.com/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.error(err));
    }, [id]);

    if (!product) return <p className="loading">Loading product...</p>;

    return (
        <div className="product-details-container">
            <div className="product-image-section">
                {product.product_image ? (
                    <img
                        className="product-image"
                        src={product.product_image}
                        alt={product.product_name}
                    />
                ) : (
                    <div className="no-image">No Image Available</div>
                )}
            </div>

            <div className="product-info-section">
                <h1 className="product-title">{product.product_name}</h1>
                <p className="product-description">{product.product_description}</p>
                <p className="product-price">৳ {product.price}</p>
                <p className={`product-stock ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
                    {product.stock > 0 ? `In Stock: ${product.stock}` : 'Out of Stock'}
                </p>
            </div>
        </div>
    );
};

export default ProductDetails;