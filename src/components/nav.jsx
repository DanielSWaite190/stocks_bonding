import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image'
import Navbar from 'react-bootstrap/Navbar';

function nav() {
  return (
    <React.Fragment>
      <Navbar>
        <Nav>
          <Image src={require("../media/s_b_box.webp")} fluid/>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#team">Meet our Team</Nav.Link>
          <Nav.Link href="#chat">Chat Room</Nav.Link>
          <Nav.Link href="#enroll">Enroll</Nav.Link>
          <Nav.Link href="#assessment">Need Assessment</Nav.Link>
          <Nav.Link href="#thinkific">Thinkific</Nav.Link>
          <Nav.Link href="#login">Log In</Nav.Link>
        </Nav>
      </Navbar>
    </React.Fragment>
  );
}
export default nav;