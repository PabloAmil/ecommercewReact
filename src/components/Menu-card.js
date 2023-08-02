import { CartContext } from '../context/cartContext';
import { useContext } from "react";
import './menu-card.css';

function MenuCard ({product}){

  const { addProducts } = useContext(CartContext)

  return (
  <div className='menu-card'>
    <div className='menu-card-img'>
        <img src={product.img}/>
    </div>
    <div className='menu-card-info'>
      <div>
        <h4>{product.name}</h4>
      </div>
      <div className='menu-card-description'>
        <p>{product.description}</p>
      </div>
      <div className='menu-card-price'>
          <p>${product.price}</p>
      </div>
      <button className='menu-add-to-cart' onClick={()=> {
          addProducts(product);
        }}> Add to Cart! 
      </button>
    </div>
  </div>
  )
}

export default MenuCard