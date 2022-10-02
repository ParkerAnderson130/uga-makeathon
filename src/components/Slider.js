import React, {useState} from 'react';
import { SliderData } from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const Slider = ({slides}) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current -1);
  }

  console.log(current);

  if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }


  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="slider-left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="slider-right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return(
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && (<img src={slide.image} alt='test' className='slider-image' />)}
            <h1 className="slide-header">{slide.title}</h1>
            <body className="slide-content">{slide.content}</body>
          </div>
        )
        
      })}
    </section>
  )
}

export default Slider