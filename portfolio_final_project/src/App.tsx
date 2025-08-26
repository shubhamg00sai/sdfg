import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import SkillChart from './components/SkillChart'

export default function App(){
  const [dark, setDark] = useState<boolean>(() => {
    const stored = localStorage.getItem('theme')
    if(stored) return stored === 'dark'
    return true
  })

  useEffect(()=>{
    if(dark) document.documentElement.classList.remove('dark')
    else document.documentElement.classList.add('dark')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  },[dark])

  return (
    <div className="container">
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Home />
        <Experience />
        <Education />
        <SkillChart />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  )
}
