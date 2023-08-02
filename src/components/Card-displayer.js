import Card from "./Card";
import products from "../products/products.js";

function Carddisplayer() {

  const mostSold = products.filter((product) => product.mostPurchased === true);

  return (
    <div className="card-displayer">
      {mostSold.map((product) => (<Card key={product.id} product={product}/>))}
    </div>
  )
}

export default Carddisplayer;