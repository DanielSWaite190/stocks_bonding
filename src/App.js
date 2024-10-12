import React from "react";
import Nav from "./components/nav";
import Home from "./pages/Home";
import Footer from "./components/footer";

import "./App.css"

function App() {
  return (
    <React.Fragment>
      <Nav/>
      <Home/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;