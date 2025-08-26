import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import ToastProvider from './components/ToastProvider'
import './styles/custom.css'

export default function App() {
  const [dark, setDark] = useState<boolean>(()=>{
    const stored = localStorage.getItem('theme')
    if(stored) return stored==='dark'
    return typeof window!=='undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(()=>{
    if(dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', dark?'dark':'light')
  },[dark])

  const projects = Array.from({length:6},(_,i)=>({title:'Project '+(i+1),image:'/assets/images/project-placeholder.png',link:'#'}))
  const certificates = Array.from({length:4},(_,i)=>({title:'Certificate '+(i+1),image:'/assets/images/certificate-placeholder.png',link:'#'}))

  return(
    <ToastProvider>
      <Navbar dark={dark} setDark={setDark} />
      <section id="home" className="section min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-2">Hi, I'm Shubham Gosai</h1>
        <p className="text-xl">Full Stack Developer</p>
      </section>

      <section id="skills" className="section">
        <h2 className="text-3xl font-semibold mb-6">Skills for App Development</h2>
        <ul className="list-disc ml-6">
          <li>Languages: Java, Xml</li>
          <li>Basic Languages: C++, Kotlin, Swift</li>
          <li>Frameworks & Libraries: React.js, Node.js</li>
          <li>Databases: Firebase Database, MySQL</li>
          <li>Developer Tools: GitHub, VS Code, Android Studio, Flutter</li>
        </ul>
      </section>

      <section id="projects" className="section">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map(p=>(
            <a key={p.title} href={p.link} target="_blank" className="card hover:scale-105 transition relative">
              <img src={p.image} alt={p.title} className="rounded"/>
              <p className="mt-2 text-center">{p.title}</p>
            </a>
          ))}
        </div>
      </section>

      <section id="certifications" className="section">
        <h2 className="text-3xl font-semibold mb-4">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map(c=>(
            <a key={c.title} href={c.link} target="_blank" className="card hover:scale-105 transition relative">
              <img src={c.image} alt={c.title} className="rounded"/>
              <p className="mt-2 text-center">{c.title}</p>
            </a>
          ))}
        </div>
      </section>

      <section id="contact" className="section">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <form className="flex flex-col gap-4 max-w-md mx-auto">
          <input type="text" placeholder="Your Name" className="p-2 border rounded"/>
          <input type="email" placeholder="Email" className="p-2 border rounded"/>
          <textarea placeholder="Message" className="p-2 border rounded"/>
          <button type="submit" className="p-2 bg-teal-500 text-white rounded">Send</button>
        </form>
      </section>

      <footer className="py-6 border-t border-slate-700 text-center flex flex-col items-center gap-2">
        <div className="flex gap-4">
          <a href="https://www.instagram.com/shubhamg0sai/" target="_blank">Instagram</a>
          <a href="https://linkedin.com/in/shubhamg0sai/" target="_blank">LinkedIn</a>
          <a href="https://github.com/ShuBhamg0sai" target="_blank">GitHub</a>
          <a href="https://x.com/shubhamg0sai" target="_blank">X/Twitter</a>
        </div>
        <p>© 2025 Shubham Gosai. All rights reserved.</p>
      </footer>
    </ToastProvider>
  )
}