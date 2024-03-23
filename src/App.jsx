import { motion } from 'framer-motion'
import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import LandingPage2 from './Components/LandingPage2'
import Projects from './Components/Projects'
import Marquees from './Components/Marquees'
import Aboutus from './Components/Aboutus'
import ProjectIdea from './Components/ProjectIdea'
import FixedIcon from './Components/FixedIcon'
import Expertise from './Components/Expertise'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  return (

    <div className=" bg-black min-h-screen " >
      <Navbar/>

      <LandingPage/>
      <LandingPage2/>
      <FixedIcon/>


      <Projects/>

      <Marquees tittle="WE ARE KREYdA" />

      <Aboutus/>

      <ProjectIdea/>

      <Expertise/>
      
      <Marquees tittle="LET’S WORK" />

      <Contact/>

      <Footer/>

   
    </div>
  )
}

export default App