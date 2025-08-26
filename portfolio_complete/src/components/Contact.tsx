import React, { useState } from 'react'
import { saveMessage } from '../utils/firebase'
import { useToast } from './ToastProvider'

export default function Contact(){
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [message,setMessage]=useState('')
  const [loading,setLoading]=useState(false)
  const toast = useToast()

  async function handleSubmit(e:any){
    e.preventDefault()
    if(!name||!email||!message){ toast.show('Please fill all fields','error'); return }
    setLoading(true)
    try{
      await saveMessage(name,email,message)
      setName(''); setEmail(''); setMessage('')
      toast.show('Message sent successfully!','success')
    }catch(err){
      console.error(err)
      toast.show('Failed to send message. Try again later.','error')
    }finally{ setLoading(false) }
  }

  async function handleResumeDownload(){
    toast.show('Resume download started','info')
  }

  return (
    <section id="contact" className="section">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-4">
        <input value={name} onChange={e=>setName(e.target.value)} className="p-3 rounded bg-transparent border border-white/10" placeholder="Your name" />
        <input value={email} onChange={e=>setEmail(e.target.value)} className="p-3 rounded bg-transparent border border-white/10" placeholder="Your email" />
        <textarea value={message} onChange={e=>setMessage(e.target.value)} className="p-3 rounded bg-transparent border border-white/10" rows={6} placeholder="Message" />
        <div className="flex gap-3">
          <button type="submit" disabled={loading} className="px-4 py-2 bg-teal-500 rounded">{loading? 'Sending...':'Send Message'}</button>
          <a href="/ShubhamGosaiResume.pdf" download onClick={handleResumeDownload} className="px-4 py-2 border rounded">Download Resume</a>
        </div>
      </form>
    </section>
  )
}
