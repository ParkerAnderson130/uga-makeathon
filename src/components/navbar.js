import React from 'react';
import '../App.css'
import './navbar.css';
import { Link } from "react-router-dom";

const Navbar= () =>{ 
    return (
        <ul className="nav">
            <h1><Link to="/">Flow</Link></h1>
            <div>
                <button><Link to="/timer">Timer</Link></button>
                <button><Link to="/meditate">Meditation</Link></button>
                <button><Link to="/info">Info</Link></button>
            </div>
        </ul>
    );
}
export default Navbar;

