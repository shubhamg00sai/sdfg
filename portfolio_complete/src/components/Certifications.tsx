import React from 'react'
import { motion } from 'framer-motion'

export default function Certifications(){
  const certs = ['Machine Learning – SoloLearn','Python Core – SoloLearn','C Language – SoloLearn','Go Language – SoloLearn','HTML – SoloLearn','Swift4 – SoloLearn']
  return (
    <section id="certifications" className="section">
      <h2 className="text-3xl font-bold mb-6">Certifications</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {certs.map((c,i)=>(
          <motion.a key={i} href="#" target="_blank" rel="noreferrer" className="card hover:bg-slate-800/60" initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}}>
            <h3 className="font-semibold">{c}</h3>
            <div className="mt-3 text-teal-300 underline">View Certificate</div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
