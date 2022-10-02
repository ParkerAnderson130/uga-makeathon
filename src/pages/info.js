import React from 'react';
import '../static/css/slider.css';
import { SliderData } from '../components/SliderData';
import Slider from '../components/Slider';


const  Info = () =>{
  return (
    <div>
        <Slider slides={SliderData}/>;
    </div>
  );
}
export default Info;
