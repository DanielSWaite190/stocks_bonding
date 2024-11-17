import React, { useState } from "react";
import ParallaxImg from '../../components/ParallaxImg'
import SignUp from '../../components/signUp/SignUp';
import LogIn from '../../components/logIn/LogIn';
import './Home.css'

function Home () {
  const [accountPopup, setAccountPopup] = useState(false);

  const display_board = "/media/display_board.jpg"
  const numbers = "/media/numbers.jpeg"
  const wall_street = "/media/wall_street.jpg"

  return (
    <React.Fragment>
      <div id="citty">
        <div id="img_container">
          <img id="wall" src="./media/s_b_wall.png" alt='Stocks and Bonding logo'/>
        </div>
      </div>

      <div id="mountains" style={{backgroundImage: `url(media/mountains.jpg)`}}>
        <div id="grey_overlay">
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
            <a href="/enroll" 
              class="white_buttons"
              style={{borderRadius: '50px', padding: '20px 30px', width: "400px"}}>Enroll
            </a>
            <button
              style={{borderRadius: '50px', padding: '20px 30px', width: "400px"}}
              onClick={() => setAccountPopup("SignUp")}
              class="white_buttons">Quizzes, Transcripts
            </button>
          </section>
        </div>
      </div>

      <div class="purple_block">
        <h1 id="What_you_lear">What will your employees learn?</h1>

        <ul id="learn">
          <div class="item">
            <img src="./media/spending.png" height="100px" width="100px" alt=""/>
            <p>How to address unhealthy spending habits</p>
          </div>

          <div class="item">
            <img src="./media/planning.png" height="100px" width="100px" alt=""/>
            <p>How to create a budget and stick to it</p>
          </div>

          <div class="item">
            <img src="./media/debt.png" height="100px" width="100px" alt=""/>
            <p>How to reduce debt</p>
          </div>

          <div class="item">
            <img src="./media/stocks.png" height="100px" width="100px" alt=""/>
            <p>All about the STOCK MARKET and INVESTING</p>
          </div>

          <div class="item">
            <img src="./media/plus.png" height="100px" width="100px" alt=""/>
            <p>And More !!</p>
          </div>
        </ul>
      </div>

      <div class="course">
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
        <a 
          href="/enroll" class="white_buttons"
          style={{
            borderRadius: '50px',
            padding: '20px 30px',
            width: "400px",
            margin: "60px 0px 20px"}}>+ Enroll
        </a>
      </div>
        
      <ParallaxImg img={display_board} size={"400px"}/>

      <div id="workshop">
        <div id="list_div">
          <h1 id="titel" class="dark_purple bold">WORKSHOPS</h1>
          <h3 id="behaviors">
            Employees will learn to address the behaviors that lead to debt creation.
            They will learn budgeting/saving strategies and ultimately what it takes to become financially secure.
          </h3>

          <ul id="list" >
            <li>Let’s make a budget using a budgeting app.</li>
            <li>Time to focus on debt reduction : Snowball Method</li>
            <li>The psychology of spending</li>
            <li>Options for managing retirement accounts</li>
            <li>Whole Life vs. Term Life insurance</li>
            <li>Saving for college</li>
            <li>Planning for retirement</li>
            <li>Tips for saving</li>
            <li>Becoming a home owner</li>
            <li>New car vs. used</li>
            <li>Custom topics</li>
          </ul>
        </div>
      </div>

      <ParallaxImg img={numbers} size={"400px"}/>
      <div class="purple_block" style={{height: "600px"}}/>
      <ParallaxImg img={wall_street} size={"400px"}/>
      <SignUp accountPopup={accountPopup} setAccountPopup={setAccountPopup}/>
      <LogIn accountPopup={accountPopup} setAccountPopup={setAccountPopup}/>
    </React.Fragment>
  );
}

export default Home;