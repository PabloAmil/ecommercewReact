import Card from "./Card";
import products from "../products/products.js";

function DrinkCardCisplayer() {

  const mostSold = products.filter((product) => product.drink === true);

  return (
    <>
    <h2 className="drink-section-title">Grab a drink!</h2>
    <div className="card-displayer">
      {mostSold.map((product) => (<Card key={product.id} product={product}/>))}
    </div>
    </>
  )
}

export default DrinkCardCisplayer;