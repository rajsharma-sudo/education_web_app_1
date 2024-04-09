import React from 'react'
import './About.css'
import About_img from '../../assets/about.png'
import Play_icon from '../../assets/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
           <img src={About_img} alt="" className='about-img' />
           <img src={Play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}} />
      </div>
      <div className="about-right">
       <h3>ABOUT UNIVERSITY</h3>
       <h2>Nurturing Tomorrow's Leaders Today</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum esse eaque perferendis quasi beatae reiciendis necessitatibus quisquam non vel laudantium?</p>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet provident voluptatem adipisci soluta qui sunt illo vero ullam.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ut maxime, suscipit dolore, magni libero quaerat voluptatum hic fugiat fuga at quidem voluptas culpa illum et, nihil maiores ad repellendus.</p>
      </div>
    </div>
  )
}

export default About
