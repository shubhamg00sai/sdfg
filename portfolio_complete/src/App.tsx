import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ToastProvider from './components/ToastProvider'

export default function App() {
  const [dark, setDark] = useState<boolean>(() => {
    const val = localStorage.getItem('theme')
    return val ? val === 'dark' : true
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <ToastProvider>
      <div className={dark ? 'dark' : ''}>
        <div className="min-h-screen">
          <Navbar dark={dark} setDark={setDark} />
          <main className="container">
            <Home />
            <Experience />
            <Education />
            <Skills />
            <Projects />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ToastProvider>
  )
}
