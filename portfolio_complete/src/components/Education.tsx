import React from 'react'
import { motion } from 'framer-motion'

export default function Education(){
  const ed=[{title:'B.Sc. in Information Technology', inst:'Graphic Era Hill University, Dehradun', years:'2020–2023, CGPA:7'},{title:'MCA (Distance)', inst:'Graphic Era University', years:'2024–2026'}]
  return (
    <section id="education" className="section">
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {ed.map((e,i)=>(
          <motion.div key={i} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} className="card">
            <h3 className="font-semibold">{e.title}</h3>
            <p className="text-sm text-slate-400">{e.inst}</p>
            <p className="mt-2 text-slate-300">{e.years}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
