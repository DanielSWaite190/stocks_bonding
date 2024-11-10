import React from 'react';
import Image from 'react-bootstrap/Image'
import './Footer.css'


function Footer() {
  return (
    <div id="footer">
      <div id="footer_img">
        <Image src="media/s_b_box.webp"/>
      </div>

      <div id="contact">
        <button
          class="white_buttons"
          id="contact_button"
          style={{borderRadius: '50px', padding: '20px 30px', width: "600px"}}>
          Contact us for pricing: Melissa@stocksandbonding.com
        </button>
      </div>
    </div>
  );
}

export default Footer;