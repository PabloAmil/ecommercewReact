import slides from '../utils/slides';
import { useState } from 'react';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';
import '../components/imgSlider.css';

function ImgSlider() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length -1 ? 0 : currentSlide + 1);
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length -1 : currentSlide - 1);
  }

  return (
    <div className='slider'>
      <BsArrowLeftSquareFill className='left-arrow' onClick={prevSlide}/>
      <BsArrowRightSquareFill  className='right-arrow' onClick={nextSlide}/>
      {
        slides.map((slide, index)=> {
          return (
            <div className={index === currentSlide ? 'slide-active' : 'slide'} key={index}>
              {index === currentSlide && <img src={slide.image} alt='' className='image' />}
            </div>
          )
        })
      }
    </div>
  )
}

export default ImgSlider;