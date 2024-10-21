import React, { useState } from "react";
import Nav from "./components/navi/Navi";
import Home from "./pages/home/Home";
import Team from "./pages/team/Team"
import Footer from "./components/footer/Footer";
import Calendar from "./pages/calendar/Calendar"
import Enroll from "./pages/enroll/Enroll";
import Assessment from './components/assessment/Assessment';
import Chat from "./pages/chat/Chat";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./App.css"

function App() {
  const [buttonPopup, setButtonPopup] = useState(false)

  return (
    <BrowserRouter>
      <Nav/>
      {/* <Assessment trigger={buttonPopup} setTrigger={setButtonPopup}></Assessment> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/calendar' element={<Calendar/>} />
        <Route path='/Chat' element={<Chat/>} />
        <Route path='/enroll' element={<Enroll/>} />
        {/* <Route path='/assessment' element={<Assessment trigger={buttonPopup}></Assessment>} /> */}
        {/* <Route path='/thinkific' element={<Thinkific/>} /> */}
        {/* <Route path='/login' element={<Login/>} /> */}
      </Routes>
      {/* <button onClick={() => setButtonPopup(!buttonPopup)}>Need Assessment</button> */}
      <Footer/>
    </BrowserRouter>
  );
}

export default App;