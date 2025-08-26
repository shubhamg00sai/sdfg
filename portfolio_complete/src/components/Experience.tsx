import React from 'react'
import { motion } from 'framer-motion'

export default function Experience(){
  const items = [
    {role:'Application Developer Intern', org:'SoloLearn (Remote)', date:'Sept 2023', desc:'Worked with Java and Kotlin.'},
    {role:'Full Stack Developer Intern', org:'Nova Nectar Services Pvt. Ltd., Dehradun', date:'May 2024', desc:'Worked on React + Node projects.'},
    {role:'Computer Operator', org:'CIPET Doiwala', date:'Dec 2024 – Present', desc:'Admin department duties.'}
  ]
  return (
    <section id="experience" className="section">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {items.map((it,i)=>(
          <motion.div key={i} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} className="card">
            <h3 className="font-semibold">{it.role}</h3>
            <p className="text-sm text-slate-400">{it.org} — {it.date}</p>
            <p className="mt-2 text-slate-300">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
