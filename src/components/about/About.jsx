import React from 'react'
import './about.css'
import ME from '../../assets/klinsman-about.JPG'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {AiFillProject} from 'react-icons/ai'
import {BsPatchCheckFill} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2 Years+ Working</small>
            </article>

            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>Education</h5>
              <small>Bachelor's Degree in Computer Science (Software Engineering) with Hons</small>
            </article>

            <article className='about__card'>
              <AiFillProject className='about__icon'/>
              <h5>Achievements</h5>
              <small>
                <ul>
                  <li>Employee of the Month</li>
                  <li>Nominated as Scrum Master</li>
                  <li>Increased team cycle time</li>
                </ul>
              </small>
            </article>
          </div>

          <p>A passionate <strong>Software Tester</strong> who is proficient in noticing small details that can be easily overlooked and performing functionality and non-functionality testing on developed softwares to ensure it makes the most out of itself. Coming with extensive skills in reviewing requirements, writing test cases and test manuals, executing tests and reporting defects whenever there is any. Also a person who continues to seek breakthrough in career and life. Learning never stops. Practises Agile Scrum Methodologies and have knowledge of it mature enough to practise it in different workplaces.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About