import React from 'react'
import { motion } from 'framer-motion'

export default function Home(){
  return (
    <section id="home" className="section min-h-screen flex items-center justify-center">
      <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="text-center">
        <h1 className="text-5xl font-extrabold">Shubham Gosai</h1>
        <p className="mt-4 text-lg text-slate-300 max-w-xl">Full Stack Developer with strong foundation in front-end and back-end development. Skilled in React.js, Node.js, Express.js, MySQL, MongoDB.</p>
        <div className="mt-6 flex justify-center gap-4">
          <a className="px-4 py-2 bg-teal-500 rounded text-black" href="/ShubhamGosaiResume.pdf" download>Download Resume</a>
          <a className="px-4 py-2 border rounded" href="#contact">Contact</a>
        </div>
      </motion.div>
    </section>
  )
}
