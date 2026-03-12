import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart(prevCart => {
            const existing = prevCart.find(p => p.id === product.id);
            if (existing) {
                return prevCart.map(p =>
                    p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    const decreaseQuantity = (id) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
                    : item
            )
        );
    };

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            decreaseQuantity
        }}>
            {children}
        </CartContext.Provider>
    );
};