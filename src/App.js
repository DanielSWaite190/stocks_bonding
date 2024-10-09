import React from "react";
import Nav from "./components/nav";
import Home from "./pages/Home";

import "./App.css"

function App() {
  return (
    <React.Fragment>
      <Nav/>
      <Home/>
    </React.Fragment>
  );
}

export default App;