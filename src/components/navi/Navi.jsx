import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav';
import React, { useState } from "react";
import Assessment from '../assessment/Assessment';
import SignUp from '../signUp/SignUp';

import './Navi.css'


function Navi() {
  const [assessmentPopup, setAssessmentPopup] = useState(false)
  const [signUpPopup, setSignUpButtonPopup] = useState(false)

  return (
    <React.Fragment>
      
      <div id="s_b_box">
          <Image src="media/s_b_box.webp"/>
      </div>

      <Navbar class="one" data-bs-theme="light">
        <div id="nav-container">
          <Nav>
            <Nav.Link href="/" active>Home</Nav.Link>
            
            <Nav.Link href="/team">Meet our Team</Nav.Link>

            <Nav.Link href="/calendar">Calendar</Nav.Link>

            <Nav.Link href="/chat">Chat Room</Nav.Link>

            <Nav.Link href="/enroll">Enroll</Nav.Link>
            
            <Nav.Link onClick={() => setAssessmentPopup(!assessmentPopup)}>Need Assessment</Nav.Link>

            <Nav.Link onClick={() => setSignUpButtonPopup(!signUpPopup)}>Thinkific</Nav.Link>
          </Nav>

          <Nav.Link href="/login">Log In</Nav.Link>

        </div>
      </Navbar>
      <Assessment trigger={assessmentPopup} setTrigger={setAssessmentPopup}></Assessment>
      <SignUp trigger={signUpPopup} setTrigger={setSignUpButtonPopup}></SignUp>

    </React.Fragment>
  );
}

export default Navi;