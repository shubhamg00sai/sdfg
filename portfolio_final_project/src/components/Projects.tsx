import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {title:'Voice_Gpt', desc:'Control through voice in windows and linux terminal using openai API key', img:'/assets/projects/project1.png', link:'#'},
  {title:'Image_gpt', desc:'Control through voice for images creation used in windows and linux terminal', img:'/assets/projects/project2.png', link:'#'},
  {title:'BoobleShooter', desc:'Game (JavaScript, CSS, HTML, PHP)', img:'/assets/projects/project3.png', link:'#'},
  {title:'Sea_Diving', desc:'Game (JavaScript, CSS, HTML)', img:'/assets/projects/project4.png', link:'#'},
  {title:'RdmVideoCall', desc:'Coin-based video call app using Firebase', img:'/assets/projects/project5.png', link:'#'},
  {title:'Face-attendance-app', desc:'Real time face attendance', img:'/assets/projects/project6.png', link:'#'},
  {title:'MoviesMod', desc:'Movies downloader app', img:'/assets/projects/project7.png', link:'#'},
  {title:'Erp_geu', desc:'ERP Application for Graphic Era Hill University', img:'/assets/projects/project8.png', link:'#'},
  {title:'FlyToHigh', desc:'Android app for booking flights', img:'/assets/projects/project9.png', link:'#'},
  {title:'UNO', desc:'UNO game application', img:'/assets/projects/project10.png', link:'#'},
  {title:'Portfolio', desc:'This portfolio using TypeScript, JS, CSS, HTML', img:'/assets/projects/project11.png', link:'#'},
  {title:'Jewelry', desc:'Jewelry website', img:'/assets/projects/project12.png', link:'#'}
]

export default function Projects(){
  return (
    <section id="projects" className="section">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.a key={i} href={p.link} target="_blank" rel="noreferrer" className="card group overflow-hidden" initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}}>
            <div className="relative">
              <img src={p.img} alt={p.title} className="w-full h-40 object-cover rounded" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/30">
                <span className="px-3 py-2 bg-teal-400 text-black rounded">View Project</span>
              </div>
            </div>
            <h3 className="mt-3 font-semibold">{p.title}</h3>
            <p className="text-slate-300 text-sm mt-1">{p.desc}</p>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
