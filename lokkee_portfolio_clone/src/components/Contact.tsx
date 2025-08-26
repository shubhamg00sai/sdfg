import React, { useState } from 'react'
import { saveMessage, incrementResumeDownload } from '../utils/firebase'
import { motion } from 'framer-motion'

export default function Contact(){
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [message,setMessage]=useState('')
  const [status,setStatus]=useState<'idle'|'sending'|'sent'|'error'>('idle')

  async function handleSubmit(e:any){
    e.preventDefault()
    if(!name||!email||!message){ setStatus('error'); setTimeout(()=>setStatus('idle'),2000); return }
    setStatus('sending')
    try{
      await saveMessage(name,email,message)
      setName(''); setEmail(''); setMessage('')
      setStatus('sent'); setTimeout(()=>setStatus('idle'),3000)
    }catch(e){
      console.error(e); setStatus('error'); setTimeout(()=>setStatus('idle'),3000)
    }
  }

  async function handleResume(){
    try{ await incrementResumeDownload() }catch(e){}
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input value={name} onChange={e=>setName(e.target.value)} className="w-full p-3 rounded bg-transparent border border-white/10" placeholder="Your name" />
            <input value={email} onChange={e=>setEmail(e.target.value)} className="w-full p-3 rounded bg-transparent border border-white/10" placeholder="Your email" />
            <textarea value={message} onChange={e=>setMessage(e.target.value)} rows={6} className="w-full p-3 rounded bg-transparent border border-white/10" placeholder="Message"></textarea>
            <div className="flex gap-3">
              <button type="submit" disabled={status==='sending'} className="px-4 py-2 hero-cta rounded">{status==='sending' ? 'Sending...' : 'Send Message'}</button>
              <a onClick={handleResume} href="/ShubhamGosaiResume.pdf" download className="px-4 py-2 border rounded">Download Resume</a>
            </div>
            {status==='sent' && <div className="text-green-400">Message sent!</div>}
            {status==='error' && <div className="text-red-400">Error — please check fields.</div>}
          </form>

          <div className="card flex flex-col items-center">
            <h3 className="font-semibold mb-3">Connect</h3>
            <div className="flex gap-4 footer-icons">
              <a href="https://www.instagram.com/shubhamg0sai/" target="_blank" rel="noreferrer"><img src="/assets/icons/instagram.svg" alt="ig" className="w-8 h-8"/></a>
              <a href="https://linkedin.com/in/shubhamg0sai/" target="_blank" rel="noreferrer"><img src="/assets/icons/linkedin.svg" alt="li" className="w-8 h-8"/></a>
              <a href="https://github.com/ShuBhamg0sai" target="_blank" rel="noreferrer"><img src="/assets/icons/github.svg" alt="gh" className="w-8 h-8"/></a>
              <a href="https://x.com/shubhamg0sai" target="_blank" rel="noreferrer"><img src="/assets/icons/x.svg" alt="x" className="w-8 h-8"/></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
