import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { menuDisplay } from "./menuDisplay"
import { Pedidopreview } from "./Pedidopreview"
import { Splashscreen } from "./splashscreen"

export function AppRouter() {
  return (
    <>
      <Router>
        <div id="Content">
          <Switch>
            <Route exact path="/menuDisplay">
              <menuDisplay />
            </Route>
            <Route exact path="/">
              <Pedidopreview />
            </Route>
            <Route exact path="/clicker">
              <Splashscreen />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}





// import React from "react";
// import ReactDOM from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
// } from "react-router-dom";
// import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
