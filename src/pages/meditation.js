import React from 'react';
//import { useState } from "react";
import '../App.css'
import '../static/css/meditation.css';

const  Meditation = () => {
  const audio = new Audio(require('../static/assets/ocean.mp3'));
  let isPlaying = false;

  const player = () => {
    if(isPlaying){
      audio.pause();
      isPlaying = false;
    } else{
      audio.play();
      isPlaying = true;
    }
  }

  return (
    <div class="music">
      <div class="music-selection" id="rain"><h2>Rain</h2>
        <button class="play" onClick={player}>&#9654;</button>
      </div>
      <div class="music-selection" id="waves"><h2>Waves</h2>
        <button class="play" onClick={player}>&#9654;</button>
      </div>
      <div class="music-selection" id="under"><h2>Underwater</h2>
        <button class="play" onClick={player}>&#9654;</button>
      </div>
    </div>
  );
}
export default Meditation;