import React from 'react'
import { motion } from 'framer-motion'

export default function Contact(){
  return (
    <section>
      <h2 className="section-title">Contact</h2>
      <motion.form className="card max-w-2xl" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
        <label className="block mb-2">Name</label>
        <input className="w-full p-2 rounded bg-slate-800 border border-slate-700" placeholder="Your name" />
        <label className="block mt-4 mb-2">Email</label>
        <input className="w-full p-2 rounded bg-slate-800 border border-slate-700" placeholder="you@example.com" />
        <label className="block mt-4 mb-2">Message</label>
        <textarea className="w-full p-2 rounded bg-slate-800 border border-slate-700" rows={6} placeholder="Hi Shubham..." />
        <div className="mt-4 flex gap-3">
          <button type="button" className="px-4 py-2 bg-teal-500 rounded text-slate-900">Send Message</button>
          <a className="px-4 py-2 border rounded" href="/ShubhamGosaiResume.pdf" download>Download Resume</a>
        </div>
      </motion.form>
    </section>
  )
}
