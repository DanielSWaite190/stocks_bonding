import React from 'react';
import './Team.css'

function Team () {
  return (
    <React.Fragment>
      <div id="meet" class="purple_block">
        <h1>MEET THE TEAM</h1>
      </div>

      <div id="team_members">
        <div class="team_card">
          <img class="card_img" src="/media/melissa_waite.jpg" alt=""/>

          <div class="card_body">
            <h1 class="card_titel">
              Melissa Waite <br/>
              Founder and CEO
            </h1>

            <p class="bio">
              The majority of my adult life was spent as a stay at home mom supporting
              my husband and raising my son and daughter. However, once both children had
              graduated and were in college, I immediately began studying for my series 7.
              I passed my exam, began my career as a financial advisor and stayed in the
              industry for two brief years. While in the industry, a few things quickly
              became apparent to me. <br/><br/>
              The fact that there was a huge demand for learning
              about the stock market was the most exciting thing. In order to organically
              grow my business as an advisor and also because I have a passion for teaching, 
              I started a womens’ social group called Stocks and Bonding. The group was 
              designed for women to learn about the stock market while in a fun and relaxing
              environment. The huge demand for learning about investing was indicated by the
              rapid growth of the Stocks and Bonding group from one group to several in a very
              short period of time. However, even though the enthusiasm for learning about
              the stock market was great, I also learned that very few in my classes
              possessed even the most basic of financial skills, such as budgeting, credit
              card independence and saving. These are all skills that are undisputedly
              necessary to lead a financially secure life. I therefore saw a need! I 
              resigned from my career as an advisor, had countless discussions with fellow 
              colleagues and ultimately recruited a couple of them to join me on this venture 
              to bring my idea of a corporate financial wellness solution to fruition.<br/><br/>
              Our 
              ultimate goal is to encourage healthy behaviors that will lead to positive 
              financial outcomes for your team members and therefore decrease the financial 
              stress that, research shows, detrimentally affects work performance.<br/><br/>
              I am so 
              excited for your team to meet ours!
            </p>
          </div>
        </div>

        <div class="team_card">
          <img class="card_img" src="/media/caroline_kelly.jpg" alt=""/>

          <div class="card_body">
            <h1 class="card_titel">
              Caroline Kelly <br/>
              Master Financial Coach
            </h1>

            <p class="bio">
            Caroline Kelly utilizes her expertise as a Master Financial Coach and Transformational 
            Life Coach to help clients dispel myths and reset their mindset around financial, 
            relational, and business challenges.  This allows those she works with to bring clearer 
            focus to what their best life looks like, make a plan to achieve it, and acquire skills 
            and accountability to work through behaviors that may prevent them from meeting their 
            goals.<br/><br/> She works with individuals, couples, and families to overcome the overwhelm of 
            daily finances.  They are able to discuss what the next season of their life looks like, 
            understand how financial behaviors work for and against obtaining their money goals, and 
            create a personalized budgeting plan to conquer daily financial challenges that can take 
            them away from set goals.   Clients walk away with skills that allow them to confidently 
            conquer the unknown of daily financial behaviors.
            </p>
          </div>
        </div>

        <div class="team_card">
          <img class="card_img" src="/media/guest_lecturers.jpg" alt=""/>

          <div class="card_body">
            <h1 class="card_titel">Guest Lecturers</h1>
            <p class="bio">
              <a class="text" href="https://www.edwardjones.com/us-en/financial-advisor/daisy-fernandez">Daisy Fernandez</a>, Edward Jones Financial Advisor
            </p>
            <p class="bio">
              <a class="text" href="https://www.edwardjones.com/us-en/financial-advisor/tammy-l-martinez">Tammy Martinez</a>, Edward Jones Financial Advisor
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Team;