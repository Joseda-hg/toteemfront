import React from "react";
import { Sidebar } from "./sidebar";
import { GridItem } from "./gridItem";
import logo from '../imagenes/logo.png'
import bandeja from "../imagenes/bandeja.png"
// hols
export function MenuDisplay() {
  return (
    <>
      <h1 className="title">Menu Display</h1>
      <Sidebar></Sidebar>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <img className="logo" src={logo} alt="" />
      <img className="logo" src={bandeja} alt="" />
    </>
  );
}
