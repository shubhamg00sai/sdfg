import React from 'react'
import { motion } from 'framer-motion'

export default function Skills(){
  const langs = [{name:'TypeScript',pct:91.7},{name:'JavaScript',pct:4.3},{name:'CSS',pct:2.6},{name:'HTML',pct:1.4}]
  return (
    <section id="skills" className="section">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-semibold mb-3">Full Stack Development</h3>
          <ul className="text-slate-300 list-disc ml-6">
            <li>React.js, TypeScript, Node.js, Express.js</li>
            <li>Databases: MySQL, MongoDB</li>
            <li>Tailwind CSS, REST APIs, UI/UX basics</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="font-semibold mb-3">Language Distribution</h3>
          <div className="space-y-4">
            {langs.map(l => (
              <div key={l.name}>
                <div className="flex justify-between text-sm"><span>{l.name}</span><span>{l.pct}%</span></div>
                <div className="w-full bg-white/5 rounded h-3 mt-2">
                  <motion.div initial={{width:0}} whileInView={{width:`${l.pct}%`}} transition={{duration:1.2}} className="h-3 bg-teal-400 rounded"></motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
