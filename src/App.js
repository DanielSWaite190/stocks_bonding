import React from "react";
import Nav from "./components/nav";
import Home from "./pages/Home/Home";
import Team from "./pages/team/Team"
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/team' element={<Team/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;