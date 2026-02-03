import React from 'react'
import LightRays from './LightRays';
import Silk from './Silk';

const BackgroundAnimation = () => {
 const icon1 = "ri-terminal-window-line";
  const icon2 = "ri-file-code-line";
  const iconArray = [];
  for (let i = 0; i <= 11; i++) {
    if (i % 2 == 0) {
      iconArray.push(icon1);
    } else iconArray.push(icon2);
  }
  return (
    <div className="w-full min-h-screen absolute top-0">
<div style={{ width: '100%', height: '100%', position: 'fixed', }}>
  <LightRays
    raysOrigin="top-center"
    raysColor="#ffffff"
    raysSpeed={1.2}
    lightSpread={0.7}
    rayLength={3}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0}
    distortion={0}
    className="custom-rays"
    pulsating={false}
    fadeDistance={1}
    saturation={1}
/>

</div>
<div className='sm:opacity-20 ' style={{ width: '100%', height: '100%', position: 'fixed', }}>
<Silk
  speed={5}
  scale={1}
  color="#7B7481"
  noiseIntensity={1.5}
  rotation={0}
/>

</div>

        
        </div>
  )
}

export default BackgroundAnimation