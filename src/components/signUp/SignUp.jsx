import CloseButton from 'react-bootstrap/CloseButton';
import React from 'react';
import './SignUp.css'

function SignUp(props) {
  return (props.trigger) ? (
    <div id="signUpPage" className='popup'>
      <CloseButton id="x" onClick={() => props.setTrigger(false)}/>
      <div id="content">

      <h1>Sign Up</h1>

      <div class="link-text">
        <p>Already a member?&nbsp;</p>
        <p style={{color: "purple"}}>Log In</p>
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
        <input style={{marginTop: "55px"}} type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
        <p style={{marginTop: "50px"}}>&nbsp;Sign up to this site with a public profile.&nbsp;</p>
        <a href="/" style={{marginTop: "50px", color: "purple"}}>Read more</a>
      </div>

      <p hidden>
        Your profile will be set to public automatically when you sign up.
        You can change this later in your profile settings.
      </p>
    </div>
  </div>
  ) : "";
}

export default SignUp;