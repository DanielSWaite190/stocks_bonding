import React from "react";
import Nav from "./components/navi/Navi";
import Home from "./pages/home/Home";
import Team from "./pages/team/Team"
import Footer from "./components/footer/Footer";
import Calendar from "./pages/calendar/Calendar"
import Enroll from "./pages/enroll/Enroll";
import LogIn from "./components/logIn/LogIn";
import Chat from "./pages/chat/Chat";
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
        <Route path='/Chat' element={<Chat/>} />
        <Route path='/enroll' element={<Enroll/>} />
        <Route path='/login' element={<LogIn/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;