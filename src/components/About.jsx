import React from 'react'
import aboutimage from '../images/about.avif'
function About() {
  return (
    <div id='about'>
        <div className='about-image'>
           <img  src={aboutimage} alt=''/>
 {/* <video width="640" height="360" controls autoPlay  loop muted plays-inline>
        <source src=".\videos\vedio1.mp4" type="video/mp4" />
         */}
        </div>
        <div className='about-text'>
            <h1>LEARN MORE ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, deserunt dolorum. Labore nostrum perferendis mollitia facere. Assumenda natus veritatis odio.</p>
       <button>READ MORE</button>
        </div>
    </div>
  )
}

export default About;