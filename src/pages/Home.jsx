import './Home.css'
import React from 'react';
import HeroImage from '../components/heroImage';
import ParallaxImg from '../components/ParallaxImg'

// import { Button } from 'react-bootstrap';


function home () {
  let display_board = "/media/display_board.jpg"

  return (
    <React.Fragment>
      <HeroImage/>

      <div id="mountains" style={{backgroundImage: `url(media/mountains.jpg)`}}>
        <div id="overlay">
          <section id="s_one">
            <h1 class="purple bold" >THE STOCKS AND BONDING ACADEMY</h1>
            <h2 class="purple bold">A CORPORATE FINANCIAL WELLNESS SOLUTIO</h2>
          </section> 
                  
          <section id="s_two">
            <p id="our_team">
              Our team of highly professional and very compassionate, 
              licensed financial coaches and advisors, provide engaging virtual workshops, 
              one on one goal setting sessions and UNLIMITED FINANCIAL COACHING appointments.
              Our ultimate goal is, through education, to increase the financial health of your team.
            </p>

            <h2 class="purple bold">72% OF EMPLOYEES ARE FINANCIALLY STRESSED</h2>

          </section>
              
          <p style={{textAlign: "center"}} class="bold">Healing your team's financial stress will impact:</p>

          <section id="s_three" class="bold">
            <ul>
              <li><u>Increase Employer Retention</u>: Financially stressed individuals are 2x more likely to look for a new job</li>
              <li><u>Improve Productivity</u>:  Financially Stressed employees lose an average of 11.4 hours of productivity a week</li>
              <li><u>Reduce Absenteeism</u>: Money struggles often necessitate needing time off to handle.</li>
              <li><u>
                Boost Company Culture and Morale</u>: Providing a service that will add to the overall health and happiness of their family, 
                let's your team members know that they are cared for by their company.
              </li>
            </ul>
          </section>

          <section class="buttons">
            <button style={{borderStyle: "solid", borderColor: "purple"}}>Enroll</button>
            <button style={{borderStyle: "solid", borderColor: "purple"}}>Quizzes, Transcripts</button>
            {/* <Button variant="light" size="lg">Enroll</Button> */}
            {/* <Button variant="light" size="lg">Quizzes, Transcripts</Button> */}
          </section>
        </div>
      </div>

      <div id="purple_block">
        <h1>What will your employees learn?</h1>

        <ul id="learn">
          <div class="item">
            <img src="./media/rose.jpg" height="100px" width="100px" alt=""/>
            <p>How to address unhealthy spending habits</p>
          </div>

          <div class="item">
            <img src="./media/rose.jpg" height="100px" width="100px" alt=""/>
            <p>How to create a budget and stick to it</p>
          </div>

          <div class="item">
            <img src="./media/rose.jpg" height="100px" width="100px" alt=""/>
            <p>How to reduce debt</p>
          </div>

          <div class="item">
            <img src="./media/rose.jpg" height="100px" width="100px" alt=""/>
            <p>All about the STOCK MARKET and INVESTING</p>
          </div>

          <div class="item">
            <img src="./media/rose.jpg" height="100px" width="100px" alt=""/>
            <p>And More !!</p>
          </div>
        </ul>
      </div>

      <div id="course">
        <div id="new_investors" class="dark_purple">
          <h1 class="bold">STOCK MARKET COURSE</h1>
          <h1 class="bold">For New Investors</h1>
        </div>

        <p id="Employees">
          Employees will learn the mechanics of the stock market, 
          the products related to the stock market and how those 
          products will benefit them as investors.
        </p>

        <div id="img_list">
          <img src="./media/laptop.jpg.webp" width="450px" height="400px" alt=""/>

          <ul class="bold">
            <li>How does the stock market work?</li>
            <li>How do you make money from investing in the stock market?</li>
            <li>What is stock?</li>
            <li>How to read a stock quote?</li>
            <li>Individual stock vs. Mutual funds</li>
            <li>Mutual Funds, ETF’s and Index Funds</li>
            <li>Bonds Part 1</li>
            <li>Bonds Part 2</li>
            <li>Traditional 401(k) vs. Roth 401(k) and IRA’s</li>
          </ul>
        </div>
        <button> + Enroll</button>
      </div>
        
      <ParallaxImg img={display_board} size={"400px"}/>

      <h1>One</h1>
      <h1>One</h1>
      <h1>One</h1>
      <h1>One</h1>
      <h1>One</h1>
      <h1>One</h1>

      <h1>Two</h1>
      <h1>Two</h1>
      <h1>Two</h1>
      <h1>Two</h1>
      <h1>Two</h1>

      <h1>Three</h1>
      <h1>Three</h1>
      <h1>Three</h1>
      <h1>Three</h1>
      <h1>Three</h1>

    </React.Fragment>
  );
}

export default home;