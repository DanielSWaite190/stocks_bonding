import React from "react";
import "./Calendar.css"

function calendar() {
  return (
  <React.Fragment>
  <div class="purple_block" id="calendar"><h1>CALENDAR</h1></div>
  <div id="body">
    <div id="top" class="dates">
      <div>
        <h4>Workshop #1 (January 17, 2025)</h4>
        <h6>Available Online</h6>
      </div>
      <button class="enroll">Enroll</button>
    </div>

    <div id="bottom" class="dates">
      <div>
        <h4>Workshop #1 (January 31, 2025)</h4>
        <h6>Available Online</h6>
      </div>
      <p>Free</p>
      <button class="enroll">Enroll</button>
    </div>

    <div id="calendar_block">
      <p style={{marginBottom: "50px"}}>December 29 - January 4</p>

      <div id="days">
        <div class="day">
          <p>SUN</p>
          <p class="number">29</p>
        </div>

        <div class="day">
          <p>MON</p>
          <p class="number">30</p>
        </div>

        <div class="day">
          <p>TUE</p>
          <p class="number">31</p>
        </div>

        <div class="day">
          <p>WED</p>
          <p class="number">1</p>
        </div>

        <div class="day">
          <p>THU</p>
          <p class="number">2</p>
        </div>

        <div class="day" >
          <p>FRI</p>
          <p class="number" style={{border: '2px solid purple'}}>3</p>
        </div>
        
        <div class="day">
          <p>SAT</p>
          <p class="number">4</p>
        </div>
      </div>

      <div id="current" > 
        <div>
          <p>8:00 am</p>
          <p>1 hr</p>
        </div>  

        <div>
          <p>Workshop #1 (January 17, 2025)</p>
          <p>Melissa Waite</p>
        </div>

        <div>
          <div id="empty"/>
          <p>500 spots available</p>
        </div>
        <button class="enroll">Enroll</button>
      </div>
    </div>
  </div>
  </React.Fragment>
  );
}

export default calendar;