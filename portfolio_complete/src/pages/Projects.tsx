import React from 'react'
import { motion } from 'framer-motion'

export default function Projects(){
  const projects = [
    { title: 'Voice_Gpt', desc: 'Control through voice in Windows/Linux terminal using OpenAI API', link: '#' },
    { title: 'Image_gpt', desc: 'Voice-based image creation tool', link: '#' },
    { title: 'BoobleShooter', desc: 'Classic shooter game using JS/CSS/HTML/PHP', link: '#' },
    { title: 'Sea_Diving', desc: '2D game built with JS & CSS', link: '#' },
    { title: 'RdmVideoCall', desc: 'Coin-based video call app using Firebase', link: '#' },
    { title: 'Face-attendance-app', desc: 'Realtime face attendance application', link: '#' },
    { title: 'MoviesMod', desc: 'Movies downloader app', link: '#' },
    { title: 'Erp_geu', desc: 'ERP for Graphic Era Hill University', link: '#' },
    { title: 'FlyToHigh', desc: 'Android app to book flights', link: '#' },
    { title: 'UNO', desc: 'UNO game application with new logic', link: '#' },
    { title: 'Portfolio', desc: 'This portfolio built with TypeScript & React', link: '#' },
    { title: 'Jewelry', desc: 'E-commerce jewelry website', link: '#' },
  ]

  return (
    <section>
      <h2 className="section-title">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.a key={i} href={p.link} target="_blank" rel="noreferrer" className="card hover:scale-105 transform transition" whileHover={{ y:-6 }} initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-slate-300 mt-2">{p.desc}</p>
            <div className="mt-4">
              <span className="text-teal-300 underline">View Project</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
