import Carddisplayer from './Card-displayer';
import DrinkCardCisplayer from './Drink-card-displayer';
import ImgSlider from './ImgSlider';
import './main.css';

function Main() {

  return (
    <>
      <div className='body'>
        <div className='welcome-board'>
          <h1>Welcome!</h1>
          <h4 className='subtitle'> These are our most requested pizzas: </h4>
        </div>
        <div className='img-inside-1'></div>
        <div className='img-inside-2'></div>
        <Carddisplayer />
        <ImgSlider />
        <DrinkCardCisplayer/> 
        <div className='img-inside-3'></div>
      </div>
    </>
  )
}

export default Main;