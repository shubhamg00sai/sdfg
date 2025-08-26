import React from 'react'
import { motion } from 'framer-motion'

const certs = [
  {title:'Machine Learning – SoloLearn', img:'/assets/certs/cert1.png', link:'#'},
  {title:'Python Core – SoloLearn', img:'/assets/certs/cert2.png', link:'#'},
  {title:'C Language – SoloLearn', img:'/assets/certs/cert3.png', link:'#'},
  {title:'Go Language – SoloLearn', img:'/assets/certs/cert4.png', link:'#'},
  {title:'HTML – SoloLearn', img:'/assets/certs/cert5.png', link:'#'},
  {title:'Swift4 – SoloLearn', img:'/assets/certs/cert6.png', link:'#'}
]

export default function Certifications(){
  return (
    <section id="certifications" className="section">
      <h2 className="text-2xl font-bold mb-4">Certifications</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {certs.map((c,i)=>(
          <motion.a key={i} href={c.link} target="_blank" rel="noreferrer" className="card group overflow-hidden" initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}}>
            <div className="relative">
              <img src={c.img} alt={c.title} className="w-full h-40 object-cover rounded" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/30">
                <span className="px-3 py-2 bg-teal-400 text-black rounded">View Certificate</span>
              </div>
            </div>
            <h3 className="mt-3 font-semibold">{c.title}</h3>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
