import React from 'react';
import '../App.css'
import '../static/css/navbar.css';
import { Link } from "react-router-dom";
import pearl from '../static/assets/pearl.png'

const Navbar= () =>{ 
    return (
        <ul className="nav">
            <div><h1><Link to="/">Flow</Link></h1>
                <div><img src={pearl} alt="Pearls"/><p>x 18</p></div>
            </div>
            <div>
                <button><Link to="/timer">Timer</Link></button>
                <button><Link to="/meditate">Meditation</Link></button>
                <button><Link to="/info">Info</Link></button>
            </div>
            <div class="wave" preserveAspectRatio="none"></div>
            <div class="wave" preserveAspectRatio="none"></div>
        </ul>
    );
}
export default Navbar;

