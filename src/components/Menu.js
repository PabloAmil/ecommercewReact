import products from "../products/products.js";
import MenuCard from "./Menu-card.js";
import './menu.css';

function Menu() {

  return (
    <> 
    <h1 className="menu-title">Menu</h1>
    <div className="menu-container">
      <div className="menu-card-displayer">
          {products.map((product) => (<MenuCard key={product.id} product={product}/>))}
      </div>
    </div>
    </>
  )
}

export default Menu;



