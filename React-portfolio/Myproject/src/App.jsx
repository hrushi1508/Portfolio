import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Styles/App.css'
import Nav from './Navfile.jsx'
import Header from './Header.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Education from './Education.jsx'
function App() {

  return (
    <>
      
      <Nav/>
      <Header/>
      <About/>
      <Contact/>
      <Education/>
    </>
  )
}

export default App
