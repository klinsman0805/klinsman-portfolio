import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>KLINSMAN</a>

      <ul className='permalink'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__social">
        <a href="https://www.linkedin.com/in/lau-klinsman/"><BsLinkedin /></a>
        <a href="https://www.instagram.com/im_klinsman/"><AiFillInstagram /></a>
        <a href="https://www.facebook.com/klinSman.lau234/"><AiFillFacebook /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Klinsman's Personal Portfolio | All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer