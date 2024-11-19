import React from 'react';

function ParallaxImg(props) {
  return (
    <div style={{
      backgroundImage: `url(${props.img})`,
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: props.size
    }}/>
  );
}

export default ParallaxImg