import './cart.css';
import { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from '../context/cartContext';
import CartItem from './Cart-item';
import { Link } from 'react-router-dom';
import BuyCompleteBanner from './Buy-complete-banner';

function Cart () {  

  const  { productsInCart, clearCart, getProductsQuantity } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [buyMade, setBuyMade] = useState(false);

  const calculateTotal = (productsInCart) => {
    let total = 0
    productsInCart.forEach((product) => {
      total += product.price * product.quantity;
    });
    setTotal(total);
  }
  
  const clickManager = () => {
    clearCart();
    setBuyMade(true);
  }

  const hideBanner = () => {
    setBuyMade(false)
  }
  
  useEffect(()=> {
    calculateTotal(productsInCart);
    getProductsQuantity(productsInCart); 
  },[productsInCart]);


  return (
    <>
    {
      productsInCart.length < 1 && 
      <div className='conditional-banner'>
        <h1>Not hungry? Go and pick something!</h1>
        <Link to='/menu'>
          <h4>Go to Menu</h4>
        </Link>
      </div>
    }
    {
      productsInCart.length >= 1 && 
    <div className="cart-container">
      <div>
        {
        productsInCart.map((product) => (<CartItem key={product.id} product={product}/>))
        }
      </div>
      <div className='purchase-display'>
        <div>
          <h1>Total: ${total}</h1>
        </div>
        <button className='buy' onClick={clickManager}>
            Order now!
        </button>
      </div>
    </div>
    }
    {
      buyMade === true && <BuyCompleteBanner hideBanner={hideBanner}/>
    }      
    </>
  )
}

export default Cart;