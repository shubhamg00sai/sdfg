import React from 'react'
import { motion } from 'framer-motion'

export default function Home(){
  return (
    <section className="grid gap-8">
      <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-extrabold">Hi — I'm <span className="text-teal-300">Shubham Gosai</span></h1>
          <p className="mt-3 text-lg text-slate-300">Full Stack Developer Intern / Fresher — I build responsive, user-friendly, and scalable web apps with modern tools.</p>
          <div className="mt-6 flex gap-3">
            <a className="px-4 py-2 bg-teal-500 text-slate-900 rounded-md font-medium shadow" href="/ShubhamGosaiResume.pdf" download>Download Resume</a>
            <a className="px-4 py-2 border border-slate-700 rounded-md" href="/projects">View Projects</a>
          </div>
        </div>
        <motion.div initial={{scale:0.95, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:0.6}} className="card">
          <h3 className="font-semibold">Quick Info</h3>
          <ul className="mt-3 text-sm text-slate-300 space-y-1">
            <li>Location: Dehradun, India</li>
            <li>Role: Full Stack Developer Intern / Fresher</li>
            <li>Email: <a href="mailto:shubham@example.com" className="text-teal-300">shubham@example.com</a></li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  )
}
