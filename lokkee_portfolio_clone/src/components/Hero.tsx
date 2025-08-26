import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section id="home" className="section min-h-screen flex items-center">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="text-5xl font-extrabold leading-tight">I build <span style={{color:'var(--accent)'}}>fast</span>, <span style={{color:'var(--accent2)'}}>responsive</span> and modern web apps.</motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}} className="mt-6 text-slate-300 max-w-xl">Full Stack Developer skilled in React, TypeScript, Node.js and Firebase. I create interactive and animated user experiences similar to premium studio sites.</motion.p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="px-4 py-2 hero-cta rounded font-medium">View Projects</a>
            <a href="/ShubhamGosaiResume.pdf" className="px-4 py-2 border rounded">Download Resume</a>
          </div>
        </div>
        <div className="relative">
          <div className="card p-6">
            <div className="text-sm text-slate-400">Featured Project</div>
            <h3 className="mt-2 font-semibold">RdmVideoCall — Realtime coin-based video app</h3>
            <p className="mt-2 text-slate-300 text-sm">Built with Firebase Realtime DB, WebRTC and React. Implements coin purchase flow and live matching.</p>
            <div className="mt-4">
              <a href="#" className="px-3 py-2 bg-teal-400 rounded text-black">Live demo</a>
            </div>
          </div>
          <div style={{position:'absolute', right:-20, top:-40}} className="card p-4 w-40 transform rotate-6">Small widget<br/>Prototype</div>
        </div>
      </div>
    </section>
  )
}
