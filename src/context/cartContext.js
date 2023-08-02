import { createContext, useEffect, useState} from "react";
export const CartContext = createContext();

export function CartProvider ({children}) {

  const [productsInCart, setProductsInCart] = useState(()=> {
  const productsInStorage = localStorage.getItem('cart');
  return productsInStorage ? JSON.parse(productsInStorage) : []
  });
  
  const addProducts = (product) => {
  setProductsInCart([...productsInCart, product]);
  const checkCart = (product) => {
  const indexInCart = productsInCart.findIndex((prod) => prod.id === product.id);
      
    if (indexInCart >= 0) {
      const newCart = [...productsInCart];
      newCart[indexInCart].quantity += 1;
      return setProductsInCart(newCart);
    }
    setProductsInCart([...productsInCart, product]);
  }
  checkCart(product);
  } 

  const removeSingleProduct = (product) => {
  const indexInCart = productsInCart.findIndex((prod) => prod.id === product.id);
  const newCart = [...productsInCart];
    if (indexInCart >= 0) {
      if (newCart[indexInCart].quantity > 1) {
        newCart[indexInCart].quantity -= 1;
      } 
    }
    setProductsInCart(newCart);
  }
  
  const removeProducts = (productToRemove) => {
    productToRemove.quantity = 1;
    const updatedCart = productsInCart.filter((product) => product.id !== productToRemove.id);
    setProductsInCart(updatedCart); 
  }
  
  const clearCart = () => {
    productsInCart.forEach((product) => product.quantity = 1);
    setProductsInCart([]);
  }

  const getProductsQuantity = (productsInCart) => {
    let totalQuantity = 0;
    productsInCart.forEach((product) => {
      totalQuantity += product.quantity;
    })
    return totalQuantity;
  }

  useEffect(()=> {
    localStorage.setItem('cart', JSON.stringify(productsInCart));
  }, [productsInCart]);

  return (
    <CartContext.Provider value={{
        addProducts,
        removeProducts,
        clearCart,
        removeSingleProduct,
        getProductsQuantity,
        productsInCart
      }}> {children}
    </CartContext.Provider>
  )
}