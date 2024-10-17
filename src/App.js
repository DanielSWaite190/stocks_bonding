import React from "react";
import Nav from "./components/nav";
import Home from "./pages/Home/Home";
import Team from "./pages/team/Team"
import Footer from "./components/footer";
import Calendar from "./pages/Calendar/Calendar"
import Chat from "./pages/chat/chat";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/calendar' element={<Calendar/>} />
        <Route path='/chat' element={<Chat/>} />
        {/* <Route path='/enroll' element={<Enroll/>} /> */}
        {/* <Route path='/assessment' element={<Assessment/>} /> */}
        {/* <Route path='/thinkific' element={<Thinkific/>} /> */}
        {/* <Route path='/login' element={<Login/>} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;