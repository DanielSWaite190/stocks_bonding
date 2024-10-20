import './Assessment.css';
import React from 'react';

function Assessment(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>

        <h1>Please fill out this questionnaire :</h1>

        <div id="top-form">
          <p>Name, Age, State you live in and status (Single, Married, Divorced, Widowed) :</p>
          <p>Email</p>
        </div>

        <p>How much non-mortgage debt do you have?</p>
        <div>

        <div class="dropdown">
        <button class="dropbtn">Dropdown</button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>

      </div>


        <p>Do you have a clear plan to pay off your debt?</p>
        <p>Do you have a written budget that you stick to monthly ?</p>
        <p>Do you have a 401k that you have left at a previous place of employment ?</p>
        <p>Do you feel you may have too much in your savings but fear or lack the knowledge to explore
        alternatives to just saving?</p>
        <p>If you have children, do you have a plan to pay for their college?</p>
        <p>Do you feel confused about the different types of life insurance policies available and how life The fact that there was a huge demand for learning about the
        insurance fits into your overall financial plan? stock market was the most exciting thing. In order to</p>
        <p>What issue concerns you the most regarding your finances ?</p>

        <button>Submit</button>
        {props.children}
        <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
      </div>
    </div>
  ): "";
}

export default Assessment; 