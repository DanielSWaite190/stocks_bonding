import React from 'react';

import "./HeroImage.css"

function HeroImage() {
  return (
    // <div id="section"><div id="back-g"/></div>
    // <img id="second" src="/media/citty.webp"/>
    <div>
      <p>Scroll Up and Down this page to see the parallax scrolling effect.</p>
      <div class="parallax"></div>
      <div style={{height:"1000px;", backgroundColor: "red;", fontSize: "36px"}}>
        Scroll Up and Down this page to see the parallax scrolling effect.
        This div is just here to enable scrolling.
        Tip: Try to remove the background-attachment property to remove the scrolling effect.
        </div>
    </div>
  );
}


export default HeroImage 