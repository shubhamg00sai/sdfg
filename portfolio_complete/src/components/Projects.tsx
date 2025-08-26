import React from 'react'
import { motion } from 'framer-motion'

export default function Projects(){
  const projects = [
    {title:'Voice_Gpt',desc:'Voice control via OpenAI API',link:'#'},
    {title:'Image_gpt',desc:'Voice-based image creation',link:'#'},
    {title:'BoobleShooter',desc:'Game with JS/CSS/HTML/PHP',link:'#'},
    {title:'Sea_Diving',desc:'2D game',link:'#'},
    {title:'RdmVideoCall',desc:'Coin-based video call (Firebase)',link:'#'},
    {title:'Face-attendance-app',desc:'Realtime attendance',link:'#'}
  ]
  return (
    <section id="projects" className="section">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p,i)=>(
          <motion.a key={i} href={p.link} target="_blank" rel="noreferrer" className="card hover:scale-105 transform transition" initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}}>
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-slate-300 text-sm mt-2">{p.desc}</p>
            <div className="mt-4 text-teal-300 underline">View Project</div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
