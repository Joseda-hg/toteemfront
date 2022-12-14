import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MenuDisplay } from "./menuDisplay"
import { Pedidopreview } from "./Pedidopreview"
import { Splashscreen } from "./splashscreen"
import { AgregarObservacion } from "./agregarObservacion"
import { VistaDetalle } from "./vistaDetalle";
import { ConfirmacionCompra } from "./confirmacionCompra";
import { Navbar } from "./navbar";
export function AppRouter() {
  return (
    <>
      <Router>
        <Navbar />
        <div id="Content">
          <Switch>
            <Route exact path="/menuDisplay">
              <MenuDisplay />
            </Route>
            <Route exact path="/Pedidopreview">
              <Pedidopreview />
            </Route>
            <Route exact path="/">
              <Splashscreen />
            </Route>
            <Route exact path="/agregar">
              <AgregarObservacion />
            </Route>
            <Route exact path="/vista">
              <VistaDetalle />
            </Route>
            <Route exact path="/confirmacion">
              <ConfirmacionCompra />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}