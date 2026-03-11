import React, { useState } from "react";
import './ProductCreate.css'

const ProductCreate = () => {
    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const accessToken = localStorage.getItem("access");
        const formData = new FormData();
        formData.append("product_name", productName);
        formData.append("product_description", description);
        formData.append("price", price);
        formData.append("stock", stock);
        if (image) formData.append("product_image", image);

        try {
            const res = await fetch("https://lichushop-1.onrender.com/productCreate/", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                },
                body: formData,
            });

            if (res.ok) {
                alert("Product created successfully!");
                setProductName("");
                setDescription("");
                setPrice("");
                setStock("");
                setImage(null);
            } else {
                const err = await res.json();
                console.log(err);
                alert("Failed to create product");
            }
        } catch (error) {
            console.log(error);
            alert("Error creating product");
        }
    };

    return (
        <div className="product-create-container">
            <h2>Create Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Product Name:</label>
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Stock:</label>
                    <input
                        type="number"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Product Image:</label>
                    <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                        accept="image/*"
                    />
                </div>

                <button type="submit">Create Product</button>
            </form>
        </div>
    );
};

export default ProductCreate;