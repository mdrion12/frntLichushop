import React from 'react';
import "./DproductCart.css";
import { Link } from 'react-router-dom';

const DproductCart = ({ data }) => {
    const accessToken = localStorage.getItem("access");
    const handleDelete = async () => {
        if (!window.confirm("Are you sure you want to delete this product?")) return;
        try {
            const res = await fetch(`https://lichushop-1.onrender.com/productUpdate/${data.id}/`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                },
            });

            if (res.ok) {
                alert("Product deleted successfully!");
                // optionally reload page or update state
                // window.location.reload();
            } else {
                const err = await res.json();
                console.log(err);
                alert("Failed to delete product");
            }
        } catch (error) {
            console.log(error);
            alert("Error deleting product");
        }
    };

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
                <button className="update">
                    <Link to={`/dashboard/productUpdate/${data.id}`}>update</Link>
                </button>
                <button onClick={handleDelete} className="update">delete</button>
            </div>
        </div>
    );
};

export default DproductCart;