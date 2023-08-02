import { useEffect } from "react";
import { Link } from "react-router-dom"; 
import './responsive-menu.css';
import { CartContext } from '../context/cartContext';
import { useContext } from "react";


function ResponsiveMenu(props) {

  const  { productsInCart, getProductsQuantity } = useContext(CartContext);

  useEffect(()=> {
    getProductsQuantity(productsInCart);
  },[productsInCart]);

  

  return (
      <div className='menu-options'>
      <ul>
        <Link to='/' onClick={props.display}>
          <li>HOME</li>
        </Link>
        <Link to='/menu' onClick={props.display}>
          <li>MENU</li>
        </Link>
        <div className="menu-cart-content" onClick={props.display}>
          <Link to='/cart' >
            <li>CART</li>
          </Link>
            <div>
              {
                getProductsQuantity(productsInCart) > 0 &&
                <div className='counter'>
                  <div className='number'>
                    {
                      getProductsQuantity(productsInCart)
                    }
                  </div>
                </div>
              }
            </div>
        </div>
      </ul>

    </div>
  )
}

export default ResponsiveMenu;