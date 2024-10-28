import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav';
// import React from 'react';
import React, { useState } from "react";
import Assessment from '../assessment/Assessment';

import './Navi.css'


function Navi() {

  const [buttonPopup, setButtonPopup] = useState(false)

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
            
            <button onClick={() => setButtonPopup(!buttonPopup)}>Need Assessment</button>

            {/* <Nav.Link href="/assessment">Need Assessment</Nav.Link> */}
            
            <Nav.Link href="/thinkific">Thinkific</Nav.Link>
          </Nav>

          {/* <Assessment trigger={buttonPopup} setTrigger={setButtonPopup}></Assessment> */}

          <Nav.Link href="/login">Log In</Nav.Link>
        </div>
      </Navbar>
      <Assessment trigger={buttonPopup} setTrigger={setButtonPopup}></Assessment>

    </React.Fragment>
  );
}

export default Navi;