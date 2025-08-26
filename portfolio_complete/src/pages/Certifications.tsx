import React from 'react'
import { motion } from 'framer-motion'

export default function Certifications(){
  const certs = [
    { title: 'Machine Learning — SoloLearn', link: '#' },
    { title: 'Python Core — SoloLearn', link: '#' },
    { title: 'C Language — SoloLearn', link: '#' },
    { title: 'Go Language — SoloLearn', link: '#' },
    { title: 'HTML — SoloLearn', link: '#' },
    { title: 'Swift4 — SoloLearn', link: '#' },
  ]

  return (
    <section>
      <h2 className="section-title">Certifications</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {certs.map((c, i) => (
          <motion.a key={i} href={c.link} target="_blank" rel="noreferrer" className="card hover:bg-slate-800/80" initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
            <h3 className="font-semibold">{c.title}</h3>
            <div className="mt-2"><span className="text-teal-300 underline">View Certificate</span></div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
