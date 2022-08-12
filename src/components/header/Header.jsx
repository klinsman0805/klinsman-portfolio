import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/klinsman-profile-2.png'
import SocialMedia from './SocialMedia'
import Typewriter from "typewriter-effect"
import Fade from 'react-reveal/Fade'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <Fade bottom><h1>Klinsman Lau</h1></Fade>
        <h3 className='text-light'>Software</h3>
        <h5 className="text-light">
        <Typewriter
           options={{
            autoStart: true,
            loop: true
           }}
           onInit={(typewriter) => {
            typewriter
            .typeString("Test Engineer")
            .pauseFor(1000)
            .deleteChars(13)
            .typeString("Quality Assurance Engineer")
            .start()
           }}
          />
        </h5>
        <CTA />
        <SocialMedia />

        <div className="me">
          <Fade bottom><img src={ME} alt="me" /></Fade>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header