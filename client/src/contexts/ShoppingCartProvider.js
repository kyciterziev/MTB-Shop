import ShoppingCartContext from "./ShoppingCartContext";
import { useState } from "react";

export const ShoppingCartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
        const exist = cartItems.find((x) => x._id === product._id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
            alert("Already added. You have increased the quantity by 1.");
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
            alert("Product is added in cart.");

        }
    };
    const onRemove = (product) => {
        const exist = cartItems.find((x) => x._id === product._id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x._id !== product._id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };

    return (
        <ShoppingCartContext.Provider value={{ cartItems, onAdd, onRemove }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}