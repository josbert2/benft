import React, { useState, useEffect, useRef } from 'react';

/*function Card() {
    const blobRef = useRef(null);
    const fakeblobRef = useRef(null);
  
    function handleMouseMove(ev) {
      const blob = blobRef.current;
      const fblob = fakeblobRef.current;
      const rec = fblob.getBoundingClientRect();
      blob.style.opacity = "1";
  
      blob.animate(
        [
          {
            transform: `translate(${
              (ev.clientX - rec.left) - (rec.width / 2)
            }px,${(ev.clientY - rec.top) - (rec.height / 2)}px)`
          }
        ],
        {
          duration: 300,
          fill: "forwards"
        }
      );
    }
  
    function handleMouseLeave() {
      const blob = blobRef.current;
      blob.style.opacity = "0";
    }
  
    return (
      <div className="card" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <div className="inner">
          <h1>Hi</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ut </p>
        </div>
        <div className="blob" ref={blobRef}></div>
        <div className="fakeblob" ref={fakeblobRef}></div>
      </div>
    );
  }

const Team = () => {
  return (
    <div className="body">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};
 */

function Card() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
    function handleMouseMove(ev) {
      setMousePos({ x: ev.clientX, y: ev.clientY });
    }
  
    return (
      <div className="card" onMouseMove={handleMouseMove} style={{ "--mouse-x": `${mousePos.x}px`, "--mouse-y": `${mousePos.y}px` }}>
        <div className="card-inner magical-borders-inner" >
          {/* contenido de la tarjeta */}
        </div>
      </div>
    );
}
function Team() {
    return (
        <>
            <div className="cards-grid magical-borders-content">
                <Card />
                <Card />
            </div>
        </>
    )
}
export default Team;