import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Typing: React.FC<{texts:string[]}> = ({texts}) => {
  const [idx, setIdx] = useState(0)
  const [sub, setSub] = useState('')
  const [forward, setForward] = useState(true)
  useEffect(()=>{
    const cur = texts[idx]
    let i=0
    let dir = true
    const t = setInterval(()=>{
      if(dir){ setSub(cur.slice(0, i+1)); i++; if(i===cur.length) dir=false }
      else { setSub(cur.slice(0, i-1)); i--; if(i===0){ dir=true; setIdx((p)=> (p+1)%texts.length) } }
    }, 80)
    return ()=> clearInterval(t)
  },[idx, texts])
  return <span className="text-teal-300">{sub}</span>
}

export default function Home(){
  return (
    <section id="home" className="section min-h-screen flex flex-col justify-center items-center text-center">
      <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-5xl font-extrabold">Hi — I'm <span className="text-teal-300">Shubham Gosai</span></motion.h1>
      <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}} className="mt-4 text-lg text-slate-300 max-w-2xl">
        Full Stack Developer Intern / Fresher — <Typing texts={["React.js","TypeScript","Node.js","Firebase"]} />
      </motion.p>
      <div className="mt-6 flex gap-3">
        <a className="px-4 py-2 bg-teal-500 text-black rounded" href="/ShubhamGosaiResume.pdf" download>Download Resume</a>
        <a className="px-4 py-2 border rounded" href="#contact">Contact</a>
      </div>
    </section>
  )
}
