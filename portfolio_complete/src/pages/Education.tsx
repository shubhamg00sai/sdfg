import React from 'react'
import { motion } from 'framer-motion'

export default function Education(){
  const ed = [
    { title: 'B.Sc. in Information Technology', inst: 'Graphic Era Hill University, Dehradun', years: '2020 – 2023', note: 'CGPA: 7' },
    { title: 'Master in Computer Application (Distance)', inst: 'Graphic Era University, Dehradun', years: '2024 – 2026', note: '' }
  ]
  return (
    <section>
      <h2 className="section-title">Education</h2>
      <div className="grid gap-4">
        {ed.map((e,i) => (
          <motion.div key={i} whileHover={{translateY:-4}} initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="card">
            <h3 className="font-semibold">{e.title}</h3>
            <p className="text-sm text-slate-400">{e.inst} • {e.years} {e.note ? '• ' + e.note : ''}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
