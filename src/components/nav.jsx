import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import './nav.css'


function nav() {
  return (
    <React.Fragment>
      <div id="s_b_box">
          <Image src="media/s_b_box.webp"/>
      </div>

      <Navbar class="one" data-bs-theme="light">
        <div id="nav-container">
          <Nav>
            <Nav.Link href="/home" active>Home</Nav.Link>
            
            <Nav.Link href="/team">Meet our Team</Nav.Link>

            <Nav.Link href="/chat">Chat Room</Nav.Link>

            <Nav.Link href="/enroll">Enroll</Nav.Link>

            <Nav.Link href="/assessment">Need Assessment</Nav.Link>
          
            <Nav.Link href="/thinkific">Thinkific</Nav.Link>
          </Nav>
          <Nav.Link href="/login">Log In</Nav.Link>
        </div>
      </Navbar>
    </React.Fragment>
  );
}

export default nav;