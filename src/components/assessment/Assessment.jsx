import './Assessment.css';
import React from 'react';

function Assessment(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
        <form id="form">
          <h1>Please fill out this questionnaire :</h1>
          <div id="top-form">
            <div style={{width: "50%"}}>
              <p>Full name</p>
              {/* <p>
                Name, Age, State you live in and status
                (Single, Married, Divorced, Widowed) :
              </p> */}
              <input type="text" id="fname" name="fname" style={{width: "100%"}}/>
            </div>
            
            <div style={{width: "50%"}}>
              <p>Email*</p>
              <input type="text" id="email" name="email" style={{width: "100%"}}/>
            </div>
          </div>
        
          <div>
            <p>How much non-mortgage debt do you have?</p>
            <input type="text" id="debt" style={{width: "100%"}}/>
          </div>

          <div>
            <p>Do you have a clear plan to pay off your debt?</p>
            <select style={{width:"100%"}}>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <div>
            <p>Do you have a written budget that you stick to monthly ?</p>
            <select style={{width:"100%"}}>
              <option>Yes</option>
              <option>No</option>
            </select>      
          </div>

          <div>
            <p>Do you have a 401k that you have left at a previous place of employment ?</p>
            <select style={{width:"100%"}}>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          
          <div>
            <p>
              Do you feel you may have too much in your savings but fear or lack the knowledge to explore
              alternatives to just saving?
            </p>
            <select style={{width:"100%"}}>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <div>
            <p>If you have children, do you have a plan to pay for their college?</p>
            <select style={{width:"100%"}}>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <div>
            <p>
              Do you feel confused about the different types of life insurance policies available and how life The fact that there was a huge demand for learning about the
              insurance fits into your overall financial plan? stock market was the most exciting thing. In order to
            </p>
            <select style={{width:"100%"}}>
              <option>Yes</option>
              <option>No</option>
            </select>       
          </div>

          <div>
            <p>What issue concerns you the most regarding your finances ?</p>
            <input type="text" id="issue" style={{width: "100%"}}/>
          </div>

          <button>Submit</button>
          {props.children}

          <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
        </form>
      </div>
    </div>
  ): "";
}

export default Assessment;