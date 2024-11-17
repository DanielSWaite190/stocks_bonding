import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import React, { useState } from "react";
import Assessment from '../assessment/Assessment';
import SignUp from '../signUp/SignUp';
import LogIn from '../logIn/LogIn';


import './Navi.css'

function Navi() {
  const [assessmentPopup, setAssessmentPopup] = useState(false);
  const [accountPopup, setAccountPopup] = useState(false);

  return (
    <React.Fragment>
      <div id="pageTitel">
        <div id="s_b_box">
          <Image src="media/s_b_box.webp"/>
        </div>

        <div id="logIn">
          <img src="/media/profile-user_green.jpg" height={30} width={30} />
          <Nav.Link onClick={() => setAccountPopup("SignUp")}>Log In</Nav.Link>
        </div>
      </div>

      <Navbar class="one" data-bs-theme="light">
        <div id="nav-container">
          <Nav>
            <NavLink to="/" active>Home</NavLink>
            
            <NavLink to="/team" id="navOp">Meet our Team</NavLink>

            <NavLink to="/calendar" id="navOp">Calendar</NavLink>

            <NavLink to="/chat" id="navOp">Chat Room</NavLink>

            <NavLink to="/enroll" id="navOp">Enroll</NavLink>
            
            <Nav.Link id="fire" onClick={() => setAssessmentPopup(!assessmentPopup)}>Need Assessment</Nav.Link>

            <Nav.Link id="fire" onClick={() => setAccountPopup("SignUp")}>Thinkific</Nav.Link>
          </Nav>
        </div>
      </Navbar>
      
      <Assessment trigger={assessmentPopup} setTrigger={setAssessmentPopup}/>
      <SignUp accountPopup={accountPopup} setAccountPopup={setAccountPopup}/>
      <LogIn accountPopup={accountPopup} setAccountPopup={setAccountPopup}/>

    </React.Fragment>
  );
}

export default Navi;