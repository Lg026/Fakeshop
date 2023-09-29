import React, {useState, useEffect, createContext} from 'react'
import axios from 'axios'

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(res => setProducts(res.data))
        .catch(err => console.log(err))
    }, []) 

    const updateCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
            let newCart;
            if (existingItem) {
                newCart = prevCart.map((cartItem) =>
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                );
            } else {
                newCart = [...prevCart, { ...item, quantity: 1 }];
            }
            localStorage.setItem('cart', JSON.stringify(newCart));
            return newCart;
        });
    };

    const subtractCart = (productId) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === productId);
            let newCart;
            if (existingItem && existingItem.quantity > 1) {
                newCart = prevCart.map((cartItem) =>
                    cartItem.id === productId ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
                );
            } else {
                newCart = prevCart.filter((cartItem) => cartItem.id !== productId);
            }
            localStorage.setItem('cart', JSON.stringify(newCart));
            return newCart;
        });
    };

    const clearCart = (productId) => {
        setCart((prevCart) => {
            const newCart = prevCart.filter((product) => product.id !== productId);
            localStorage.setItem('cart', JSON.stringify(newCart));
            return newCart;
        });
    };

    return (
        <AppContext.Provider value={{products, cart, updateCart, subtractCart, clearCart}}>
            {props.children}
        </AppContext.Provider>
    )
}
