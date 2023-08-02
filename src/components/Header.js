import './header.css';
import { useContext, useState } from 'react';
import { CartContext } from '../context/cartContext';
import { useEffect } from 'react';
import { LuShoppingCart } from 'react-icons/lu';
import { FaListAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import ResponsiveMenu from './Responsive-menu';

function Header() {

  const { productsInCart, getProductsQuantity } = useContext(CartContext);
  const [visible, setVisible] = useState(false);

  useEffect(()=> {
    getProductsQuantity(productsInCart);
  },[productsInCart])
  

  const displayMenu = () => {
    if (visible === true) {
      setVisible(false)
  } else {
    setVisible(true)
  }};
  
  return (
    <>
    <div className='header'>
      <ul>
        <Link to='/'>
          <li>HOME</li>
        </Link>
        <Link to='/menu'>
          <li>MENU</li>
        </Link>
      </ul>
      <div className='list-icon-container'>
        <FaListAlt className='list-icon' onClick={displayMenu}/>
      </div>
      <div className='cart-icon-container'>
        <Link to='/cart'>
          <LuShoppingCart className='cart-icon'/>
        </Link>
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
    <div>
      {
        visible ? <ResponsiveMenu display={displayMenu}/> : <></>
      }
    </div>
    </>
  )
}

export default Header;