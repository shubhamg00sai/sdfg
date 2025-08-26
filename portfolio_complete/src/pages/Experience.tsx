import React from 'react'
import { motion } from 'framer-motion'

export default function Experience(){
  const items = [
    { role: 'Application Developer Intern', org: 'SoloLearn (Remote)', date: 'Sept 2023', desc: 'Worked with Java and Kotlin on internship tasks.' },
    { role: 'Full Stack Developer Intern', org: 'Nova Nectar Services Pvt. Ltd., Dehradun', date: 'May 2024', desc: 'Built front-end features with React and backend APIs with Node/Express.' },
    { role: 'Computer Operator', org: 'CIPET Doiwala Dehradun', date: 'Dec 2024 – Present', desc: 'Admin department and technical support duties.' },
  ]

  return (
    <section>
      <h2 className="section-title">Experience</h2>
      <div className="grid gap-4">
        {items.map((it, i) => (
          <motion.article key={i} whileHover={{scale:1.02}} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4}} className="card">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{it.role}</h3>
                <p className="text-sm text-slate-400">{it.org}</p>
              </div>
              <div className="text-sm text-slate-400">{it.date}</div>
            </div>
            <p className="mt-3 text-slate-300">{it.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
