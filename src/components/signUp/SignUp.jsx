import CloseButton from 'react-bootstrap/CloseButton';
import React, { useState } from "react";
import './SignUp.css'

function SignUp(props) {
  const [isHidden, setIsHidden] = useState(true);

  const handleToggle = () => {
    setIsHidden(!isHidden);
  };

  return (props.accountPopup === "SignUp") ? (
    <div id="signUpPage" className='popup'>
      <CloseButton id="x" onClick={() => props.setAccountPopup(false)}/>
      <div id="content">

      <h1>Sign Up</h1>

      <div class="link-text">
        <p>Already a member?</p>
        <button 
          id="textButton"
          onClick={() => props.setAccountPopup("LogIn")}
          style={{color: "purple"}}>Log In
        </button>
      </div>

      <div class="option">
        <div id="logo" >
          <img alt="Google logo" src="/media/google.jpg" width="25" height="25" />
        </div>
        <p>Sign up with Google</p>
      </div>

      <p>or</p>

      <div class="option" style={{justifyContent: "center"}}>
        <p>Sign up with email</p>
      </div>

      <div class="link-text">
        <input id="readMore" style={{marginTop: "55px"}} type="checkbox" checked/>
        <p style={{marginTop: "50px"}}>&nbsp;Sign up to this site with a public profile.&nbsp;</p>
        <p 
          onClick={handleToggle}
          style={{marginTop: "50px", textDecoration: "underline"}}>{!isHidden ? "Read Less" : "Read More"}
        </p>
      </div>

      {!isHidden && <p> Your profile will be set to public automatically when you sign up.
      You can change this later in your profile settings.</p>}
    </div>
  </div>
  ) : "";
}

export default SignUp;