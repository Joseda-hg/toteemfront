import React from "react";

import logo from '../imagenes/logo.png'
import touch from '../imagenes/touch.png'
import cerveza from '../imagenes/cerveza.png'
import hamburguesa from '../imagenes/hamburguesas.png'
import papas from '../imagenes/papas fritas.png'
import pizza from '../imagenes/pizza.png'
import cachaña from '../imagenes/cachaña.png'
import { Link } from "react-router-dom";

export function Splashscreen() {
  return (
    
    <div>
     <div id="tap"  >
      <Link className="" to="/menuDisplay">
        <img class="foreground" className="touch" src={touch} alt="" />
        <img class="background" className="cachaña" src={cachaña} alt="" />
      </Link>
      </div>
      <div  id="productos">
      <img className="logo" src={logo} alt="" />
      <img className="cerveza" src={cerveza} alt="" />
      <img className="hamburguesa" src={hamburguesa} alt="" />
      <img className="papas" src={papas} alt="" />
      <img className="pizza" src={pizza} alt="" />
      </div>
      
      </div>
      
      
    

  
  );
}
