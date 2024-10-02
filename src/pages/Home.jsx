import './Home.css'

import React from 'react';
import HeroImage from '../components/heroImage';

function home () {
  return (
    <React.Fragment>
      <HeroImage/>
      <div id="body">
        <img src='./media/mountains.jpg' alt="benefits"/>
        <div id="text">

        <section id="s_one">
          <h1>THE STOCKS AND BONDING ACADEMY</h1>
          <h2>A CORPORATE FINANCIAL WELLNESS SOLUTIO</h2>
        </section> 
            
        <section id="s_two">
          <p>
            Our team of highly professional and very compassionate, 
            licensed financial coaches and advisors, provide engaging virtual workshops, 
            one on one goal setting sessions and UNLIMITED FINANCIAL COACHING appointments.
            Our ultimate goal is, through education, to increase the financial health of your team.
          </p>

          <h2>72% OF EMPLOYEES ARE FINANCIALLY STRESSED</h2>

          <p>Healing your team's financial stress will impact:</p>
        </section>
        
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
        
        </div>
      </div>
    </React.Fragment>
  );
}
export default home;