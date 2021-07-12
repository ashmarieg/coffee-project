import React from 'react'
import './Hero.scss'
import hero from '../../assets/pablo-merchan-montes-SCbq6uKCyMY-unsplash.jpg'


function Hero() {
  return (
<div className="hero">
   <div className="hero__container"> 
  {/* <img className="hero__img" src={hero}/> */}
  <div className="hero__content">
    <p className="hero__text">Never run out of coffee</p>
    <button className="hero__button">VISIT OUR SHOP</button>
  </div>
  </div>
  
  
</div>
  )
}

export default Hero
