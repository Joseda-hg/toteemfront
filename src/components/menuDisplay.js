import React from "react";
import './menuDisplay.css';
import { Sidebar } from "./sidebar";
import { GridItem } from "./gridItem";
import logo_2 from '../imagenes/logo_2.png'
import bandeja from "../imagenes/bandeja.png"
// import fondo from '../imagenes/fondo.png'
// import cerveza from '../imagenes/cerveza.png'

export function MenuDisplay() {
  return (
    <>
      <h1 className="title"></h1>
      <Sidebar></Sidebar>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <img className="logo_2" src={logo_2} alt="" />
      <img className="bandeja" src={bandeja} alt="" />
      {/* <img className="fondo" src={fondo} alt="" /> */}
      {/* <img className="cerveza" src={cerveza} alt="" /> */}
    </>
  );
}
