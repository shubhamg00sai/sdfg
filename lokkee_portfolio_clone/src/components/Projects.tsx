import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {title:'Voice_Gpt', img:'/assets/projects/project1.png', link:'#'},
  {title:'Image_gpt', img:'/assets/projects/project2.png', link:'#'},
  {title:'BoobleShooter', img:'/assets/projects/project3.png', link:'#'},
  {title:'Sea_Diving', img:'/assets/projects/project4.png', link:'#'},
  {title:'RdmVideoCall', img:'/assets/projects/project5.png', link:'#'},
  {title:'Face-attendance-app', img:'/assets/projects/project6.png', link:'#'}
]

export default function Projects(){
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6 projects-grid">
          {projects.map((p,i)=>(
            <motion.a key={i} href={p.link} target="_blank" rel="noreferrer" initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} className="card group overflow-hidden">
              <div className="relative">
                <img src={p.img} alt={p.title} className="w-full h-44 object-cover rounded" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 opacity-0 group-hover:opacity-100 transition">
                  <span className="px-3 py-2 bg-gradient-to-r from-green-400 to-pink-500 rounded text-black">View</span>
                </div>
              </div>
              <h3 className="mt-3 font-semibold">{p.title}</h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
