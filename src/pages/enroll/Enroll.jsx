import React from "react";
import './Enroll.css'

function Enroll () {
  return (
    <div id="body-en">
      <div class="purple_block" id="enroll"><h1>Enroll</h1></div>
        <h1>Choose your pricing <br/> plan</h1>

        <div id="price_plan">
          <p>11/person per month</p>
          <h1>$11</h1>
          <p>Every month</p>
          <p>+$3,000 Training workshops</p>
          <button class="enroll" id="select_button">Select</button>
        </div>
    </div>
      
  );
}

export default Enroll;