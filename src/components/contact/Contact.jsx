import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hl1fvdy', 'template_69x1ruv', form.current, '8DEvJwFAasWF689Ho')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
    };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>lauklinsman@gmail.com</h5>
            <a href="mailto:lauklinsman@gmail.com" target='_blank'>Send me an email</a>
          </article>
          <article className="contact__option">
            <AiFillLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>@lau-klinsman</h5>
            <a href="https://www.linkedin.com/in/lau-klinsman" target='_blank'>Connect via LinkedIn</a>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>(+60)11-1147 7738</h5>
            <a href="https://api.whatsapp.com/send?phone=601111477738" target='_blank'>Drop me a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <input type="text" name='company' placeholder='Your Company Name' />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary' onClick="alert('Successful!')">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact