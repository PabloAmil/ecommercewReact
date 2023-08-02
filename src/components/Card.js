import './card.css';
import { CartContext } from '../context/cartContext';
import { useContext, useState } from "react";

function Card({product}) {

  const  { addProducts } = useContext(CartContext);

  return (
    <div className='card'>
      <div className='card-img'>
        <img src={product.img}/>
      </div>
      <div>
        <h4>{product.name}</h4>
      </div>
      <div className='card-data'>
        <div className='price'>
          <p>${product.price}</p>
        </div>
      </div>
      <div>
        <button className='add-to-cart' onClick={()=> {
          addProducts(product);
        }}> Add to Cart! </button>
      </div>
    </div>
  )
}

export default Card;  