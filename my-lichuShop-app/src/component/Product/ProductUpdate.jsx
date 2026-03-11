import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductUpdate.css"; // CSS file

const ProductUpdate = () => {
    const { id } = useParams(); // product ID from URL

    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [loading, setLoading] = useState(true);

    const accessToken = localStorage.getItem("access");

    // Fetch product details
    useEffect(() => {
        fetch(`https://lichushop-1.onrender.com/productUpdate/${id}/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`,
            },
        })
            .then(res => {
                if (!res.ok) throw new Error("Failed to fetch product");
                return res.json();
            })
            .then(data => {
                setProductName(data.product_name || "");
                setDescription(data.product_description || "");
                setPrice(data.price || "");
                setStock(data.stock || "");
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                alert("Error fetching product details");
                setLoading(false);
            });
    }, [id, accessToken]);

    if (loading) return <div className="loading">Loading...</div>;

    // Update product
    const handleUpdate = async (e) => {
        e.preventDefault();

        const payload = {
            product_name: productName,
            product_description: description,
            price: parseInt(price),
            stock: parseInt(stock),
        };

        try {
            const res = await fetch(`https://lichushop-1.onrender.com/productUpdate/${id}/`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`,
                },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                alert("Product updated successfully!");
            } else {
                const err = await res.json();
                console.log(err);
                alert("Failed to update product");
            }
        } catch (err) {
            console.log(err);
            alert("Error updating product");
        }
    };

    return (
        <div className="product-update-container">
            <h2>Update Product</h2>
            <form onSubmit={handleUpdate}>
                <div className="form-group">
                    <label>Product Name:</label>
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Price:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Stock:</label>
                    <input
                        type="number"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">Update Product</button>
            </form>
        </div>
    );
};

export default ProductUpdate;