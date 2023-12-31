import './cart-item.css';
import { CartContext } from '../context/cartContext';
import { useContext } from 'react';


function CartItem ({product}) {
  
  const  { removeProducts, addProducts, removeSingleProduct, productsInCart } = useContext(CartContext);

  return (
  
      <div className="product-in-cart">
        <div className="product-img">
          <img src={product.img}></img>
        </div>
        <div className="product-name">
          <h4>{product.name}</h4>
        </div>
        <div className="product-quantity">
          <button onClick={()=> {
            addProducts(product)
          }}>+</button>
          <h4>{product.quantity}</h4>
          <button onClick={()=> {
              removeSingleProduct(product)
          }}>-</button>
        </div>
        <div className="product-price">
          <h4>
          ${product.price * product.quantity}
          </h4>
        </div>
        <div>
          <button className="product-erase" onClick={()=>{
            removeProducts(product);
          }}> X </button>
        </div>
      </div>
  )
}

export default CartItem;