import CloseButton from 'react-bootstrap/CloseButton';
import React from 'react';
import './LogIn.css'

function LogIn(props) {
  return (props.accountPopup === "LogIn") ? (
    <div id="signUpPage" className='popup'>
      <CloseButton id="x" onClick={() => props.setAccountPopup(false)}/>
      <div id="content">

      <h1>Log In</h1>

      <div class="link-text">
        <p>New to this site?</p>
        {/* <a onClick={() => props.setAccountPopup("SignUp")} style={{color: "purple"}}>
          Sign Up
        </a> */}

        <button id="textButton" onClick={() => props.setAccountPopup("SignUp")} style={{color: "purple"}}>
          Sign Up
        </button>
      </div>

      <div class="option">
        <div id="logo" >
          <img alt="Google logo" src="/media/google.jpg" width="25" height="25" />
        </div>
        <p>Log In with Google</p>
      </div>

      <p>or</p>

      <div class="option" style={{justifyContent: "center"}}>
        <p>Log In with email</p>
      </div>
    </div>
  </div>
  ) : "";
}

export default LogIn;