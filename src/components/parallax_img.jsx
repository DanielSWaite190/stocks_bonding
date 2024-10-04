import React from 'react';

// import background from "../../public/media/citty.webp";
// import background from "./iskra.jpeg";

function parallax_img() {
  return (
    <>
        {/* <div id="citty"/> */}

        <div style={{
            backgroundImage: `url("./iskra.jpeg")`,
            // backgroundImage: `url(${background})`,
            height: "300px"
        }}/>


        <div style={{
            // backgroundImage: `url(${process.env.PUBLIC_URL + './iskra'}`,
            // backgroundColor: "red",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "800px"
        }}/>

        <div id="citty"/>
    </>
  );
}

export default parallax_img 