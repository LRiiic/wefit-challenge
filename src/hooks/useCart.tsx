import { Product } from "../types/index.types";
import { useEffect, useState } from "react";
export const useCart = (handleStorage: () => void) => {
    const [cartItemsCount, setCartItemsCount] = useState<number>(getCart().length);
    
    function addToCart(product: Product) {
        const cart = localStorage.getItem('cart') || '[]';

        const parsedCart = JSON.parse(cart);

        const filteredProduct = parsedCart.filter((item: Product) => item.id === product.id);
        
        if (filteredProduct.length) {
            changeQuantity(product.id, filteredProduct[0].quantity + 1);
            return;
        }

        product.quantity = 1;
        parsedCart.push(product);
        localStorage.setItem('cart', JSON.stringify(parsedCart));

        window.dispatchEvent(new Event('storage'));
    }

    function removeFromCart(productId: number) {
        const cart = getCart();
        const newCart = cart.filter((product: Product) => product.id !== productId);
        localStorage.setItem('cart', JSON.stringify(newCart));
        window.dispatchEvent(new Event('storage'));
    }

    function getCart() {
        const cart = localStorage.getItem('cart') || '[]';
        return JSON.parse(cart);
    }

    function getProductQuantity(productId: number) {
        const cart = getCart();
        return cart.find((product: Product) => product.id === productId)?.quantity || 0;
    }

    function changeQuantity(productId: number, quantity: number) {
        const cart = getCart();
        cart.find((product: Product) => product.id === productId).quantity = quantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        window.dispatchEvent(new Event('storage'));
    }


    function getTotal() {
        const cart = getCart();
        return cart.reduce((total: number, product: Product) => total + product.price * product.quantity, 0);
    }

    useEffect(() => {
        window.addEventListener('storage', handleStorage);

        return () => window.removeEventListener('storage', handleStorage);
    }, []);

    return {
        addToCart,
        getCart,
        cartItemsCount,
        setCartItemsCount,
        getProductQuantity,
        removeFromCart,
        getTotal,
        changeQuantity
    }
}