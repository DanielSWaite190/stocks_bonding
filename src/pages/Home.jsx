import './Home.css'
import React from 'react';
import HeroImage from '../components/heroImage';
import ParallaxImg from '../components/ParallaxImg'

// import test from "../../public/media/mountains.jpg"

function home () {
  let display_board = "/media/display_board.jpg"

  return (
    <React.Fragment>
      <HeroImage/>

      {/* <div id="mountains" style={{
        backgroundImage: `url(media/mountains.jpg)`,
        height: "800px"}}> */}

      <img id="mountains_img" src="media/mountains.jpg" alt=""/>

      <div id="mountains_text">

        <section id="s_one">
          <h1>THE STOCKS AND BONDING ACADEMY</h1>
          <h2>A CORPORATE FINANCIAL WELLNESS SOLUTIO</h2>
        </section> 
                
        <section id="s_two">
          <p id="our_team">
            Our team of highly professional and very compassionate, 
            licensed financial coaches and advisors, provide engaging virtual workshops, 
            one on one goal setting sessions and UNLIMITED FINANCIAL COACHING appointments.
            Our ultimate goal is, through education, to increase the financial health of your team.
          </p>

          <h2>72% OF EMPLOYEES ARE FINANCIALLY STRESSED</h2>

        </section>
            
        <p style={{textAlign: "center"}}>Healing your team's financial stress will impact:</p>

        <section id="s_three">
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
          <button>Enroll</button>
          <button>Quizzes, Transcripts</button>
          {/* <Button variant="light" size="lg">Enroll</Button> */}
          {/* <Button variant="light" size="lg">Quizzes, Transcripts</Button> */}
        </section>

      </div>

      <div>
        <div id="purple_block">
          <h1 class="white">What will your employees learn?</h1>

          <ul id="learn">
            <div class="item">
              <img src="./media/rose.jpg" height="100px" width="100px" alt=""/>
              <p class="white">How to address unhealthy spending habits</p>
            </div>

            <div class="item">
              <img src="./media/rose.jpg" height="100px" width="100px" alt=""/>
              <p class="white">How to create a budget and stick to it</p>
            </div>

            <div class="item">
              <img src="./media/rose.jpg" height="100px" width="100px" alt=""/>
              <p class="white">How to reduce debt</p>
            </div>

            <div class="item">
              <img src="./media/rose.jpg" height="100px" width="100px" alt=""/>
              <p class="white">All about the STOCK MARKET and INVESTING</p>
            </div>

            <div class="item">
              <img src="./media/rose.jpg" height="100px" width="100px" alt=""/>
              <p class="white">And More !!</p>
            </div>
          </ul>
        </div>
      </div>

      <div id="course">

        <div id="titel">
          <h1>STOCK MARKET COURSE</h1>
          <h1>For New Investors</h1>
        </div>

        <p id="Employees">
          Employees will learn the mechanics of the stock market, 
          the products related to the stock market and how those 
          products will benefit them as investors.
        </p>

        <div id="img_list">
          <img src="./media/laptop.jpg.webp" width="450px" height="400px" alt=""/>
          <ul>
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
          <button> + Enroll</button>
        </div>
  

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