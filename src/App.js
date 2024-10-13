import React from "react";
import Nav from "./components/nav";
// import Home from "./pages/Home/Home";
import Team from "./pages/team/Team"
import Footer from "./components/footer";

import "./App.css"

function App() {
  return (
    <React.Fragment>
      <Nav/>
      {/* <Home/> */}
      <Team/>
      <Footer/>



    </React.Fragment>
  );
}

export default App;