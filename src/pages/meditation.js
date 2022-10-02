import React from 'react';
import '../App.css'
import '../static/css/meditation.css';
const  Meditation = () =>{
  return (
    <div class="music">
      <div class="music-selection" id="ocean"><h2>Ocean</h2><button>Play</button></div>
      <div class="music-selection" id="rain"><h2>Rain</h2></div>
      <div class="music-selection" id="under"><h2>Underwater</h2></div>
    </div>
  );
}
export default Meditation;