import React from 'react'
import { motion } from 'framer-motion'

export default function Skills(){
  return (
    <section>
      <h2 className="section-title">Skills</h2>
      <motion.div className="grid md:grid-cols-2 gap-4">
        <div className="card">
          <h3 className="font-semibold">Full Stack Development</h3>
          <ul className="mt-3 list-disc ml-6 text-slate-300">
            <li>Languages: JavaScript, HTML5, CSS3</li>
            <li>Frameworks & Libraries: React.js, Node.js, Express.js, Tailwind CSS</li>
            <li>Databases: MySQL, DBMS concepts, MongoDB</li>
            <li>Developer Tools: Git, GitHub, VS Code, Cursor</li>
            <li>Core Concepts: REST APIs, Operating Systems, UI/UX Design</li>
          </ul>
        </div>

        <div className="card">
          <h3 className="font-semibold">App Development</h3>
          <ul className="mt-3 list-disc ml-6 text-slate-300">
            <li>Languages: Java, XML</li>
            <li>Basic Languages: C++, Kotlin, Swift</li>
            <li>Frameworks & Libraries: React.js, Node.js</li>
            <li>Databases: Firebase Database, MySQL</li>
            <li>Developer Tools: GitHub, VS Code, Android Studio, Flutter</li>
          </ul>
        </div>
      </motion.div>

      <motion.div className="card mt-4" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
        <h3 className="font-semibold">Language distribution</h3>
        <ul className="mt-3 text-slate-300">
          <li>TypeScript — 91.7%</li>
          <li>JavaScript — 4.3%</li>
          <li>CSS — 2.6%</li>
          <li>HTML — 1.4%</li>
        </ul>
      </motion.div>
    </section>
  )
}
