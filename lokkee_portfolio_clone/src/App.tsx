import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  const [dark,setDark] = useState<boolean>(()=> {
    const v = localStorage.getItem('theme'); return v ? v==='dark' : true
  })

  useEffect(()=>{
    if(dark) document.documentElement.classList.remove('light')
    else document.documentElement.classList.add('light')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  },[dark])

  return (
    <div>
      <Navbar dark={dark} setDark={setDark} />
      <main className="container">
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
