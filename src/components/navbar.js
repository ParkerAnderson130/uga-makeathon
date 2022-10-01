import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
const Navbar= () =>{ 
    return (
        <ul>
            <h1><Link to="/">Flow</Link></h1>
            <button><Link to="/timer">Timer</Link></button>
            <button><Link to="/meditate">Meditation</Link></button>
            <button><Link to="/info">Info</Link></button>
        </ul>
    );
}
export default Navbar;

