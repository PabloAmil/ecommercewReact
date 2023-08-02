import Card from "./Card";
import products from "../products/products.js";

function DrinkCardCisplayer() {

  const drinks = products.filter((product) => product.drink === true);

  return (
    <>
    <h2 className="drink-section-title">Grab a drink!</h2>
    <div className="drink-card-displayer">
      {drinks.map((product) => (<Card key={product.id} product={product}/>))}
    </div>
    </>
  )
}

export default DrinkCardCisplayer;