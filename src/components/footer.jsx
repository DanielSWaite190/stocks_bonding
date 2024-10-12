import './footer.css'
import React from 'react';
import Image from 'react-bootstrap/Image'


function footer() {
  return (
    <div id="footer">
      <div id="footer_img">
        <Image src="media/s_b_box.webp"/>
      </div>

      <div id="contact">
        <button class="white_buttons" id="contact_button">
          Contact us for pricing: Melissa@stocksandbonding.com
        </button>
      </div>
    </div>
  );
}

export default footer;