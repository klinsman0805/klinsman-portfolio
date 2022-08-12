import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const SocialMedia = () => {
  return (
    <div className='social__media'>
        <a href='https://www.linkedin.com/in/lau-klinsman/' target="_blank"><BsLinkedin /></a>
        <a href='https://github.com/klinsman0805?tab=projects&type=new' target="_blank"><BsGithub /></a>
        <a href='https://www.instagram.com/im_klinsman/' target="_blank"><BsInstagram /></a>
    </div>
  )
}

export default SocialMedia