import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Fade from 'react-reveal/Fade'


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Fade Big><About /></Fade>
      <Fade bottom><Experience /></Fade>
      <Fade bottom><Services /></Fade>
      <Contact />
      <Footer />
    </>
  )
}

export default App