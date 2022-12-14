import React from "react";

import logo from '../imagenes/logo.png'
import touch from '../imagenes/touch.png'
import cerveza from '../imagenes/cerveza.png'
import hamburguesa from '../imagenes/hamburguesas.png'
import papas from '../imagenes/papas fritas.png'
import pizza from '../imagenes/pizza.png'
import fondo from '../imagenes/fondo.png'
import { Link } from "react-router-dom";

export function Splashscreen() {
  return (
    
    <div>
     <img className="" src={fondo} alt=""/>
      <img className="logo" src={logo} alt="" />
      <Link id="touch" className="" to="/menuDisplay">
        <img className="touch" src={touch} alt="" />
      </Link>
      <img className="cerveza" src={cerveza} alt="" />
      <img className="hamburguesa" src={hamburguesa} alt="" />
      <img className="papas" src={papas} alt="" />
      <img className="pizza" src={pizza} alt="" />
      </div>
      
    

  
  );
}
