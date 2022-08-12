import React from 'react'
import './experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Possess</h5>
      <h2>My Experience</h2>
      
      <div className="container experience__container">
        <div className="experience__qa">
          <h3>Test Engineering</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Java</h4>
                <h6><i>JUnit 5 - Unit Test</i></h6>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Python Selenium</h4>
                <h6><i>BDD Testing</i></h6>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Postman API</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Manual Testing (Web/Mobile)</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
            <div>
              <h4>Performance Testing</h4>
              <small className='text-light'>Good</small>
            </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Good</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF QA DESCRIPTION */}

        <div className="experience__scrum-master">
          <h3>Scrum Master</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Leadership</h4>
                <small className='text-light'>Excellent</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Problem Solving</h4>
                <small className='text-light'>Good</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Team Bonding</h4>
                <small className='text-light'>Excellent</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Communication</h4>
                <small className='text-light'>Excellent</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Task Management</h4>
                <small className='text-light'>Good</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience