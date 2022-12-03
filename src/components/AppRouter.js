import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


export function AppRouter() {
  return (
    <>
      <Router>
        <div id="Content">
          <Switch>
            <Route exact path="/breakout">
              {/* <Breakout /> */}
            </Route>
            <Route exact path="/">
              {/* <Home /> */}
            </Route>
            <Route exact path="/clicker">
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
