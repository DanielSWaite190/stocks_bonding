import React from "react";
import Nav from "./components/nav";
import Home from "./pages/Home";

import "./App.css"

// import test from '../public/media/mountains.jpg'
function App() {
  return (
    <React.Fragment>
      <Nav/>
      <Home/>
    </React.Fragment>
  );
}

export default App;