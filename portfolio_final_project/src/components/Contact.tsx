import React, { useState } from 'react'

function Toast({ message, type }: { message: string; type: 'success'|'error'|'info' }){
  const bg = type==='success' ? 'bg-green-600' : type==='error' ? 'bg-red-600' : 'bg-blue-600'
  return <div className={`${bg} text-white px-4 py-2 rounded fixed right-6 bottom-6`}>{message}</div>
}

export default function Contact(){
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [message,setMessage]=useState('')
  const [toast,setToast]=useState<{msg:string,type:'success'|'error'|'info'} | null>(null)
  const [loading,setLoading]=useState(false)

  async function handleSubmit(e:any){
    e.preventDefault()
    if(!name||!email||!message){ setToast({msg:'Please fill all fields','type':'error'}); setTimeout(()=>setToast(null),3000); return }
    setLoading(true)
    try{
      // placeholder: in production, call Firebase or backend here
      await new Promise(res=> setTimeout(res,800))
      setName(''); setEmail(''); setMessage('')
      setToast({msg:'Message sent successfully!','type':'success'})
      setTimeout(()=>setToast(null),3000)
    }catch(err){
      setToast({msg:'Failed to send message','type':'error'})
      setTimeout(()=>setToast(null),3000)
    }finally{ setLoading(false) }
  }

  return (
    <section id="contact" className="section">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input className="w-full p-3 rounded bg-transparent border border-white/10" placeholder="Your name" value={name} onChange={e=>setName(e.target.value)} />
          <input className="w-full p-3 rounded bg-transparent border border-white/10" placeholder="Your email" value={email} onChange={e=>setEmail(e.target.value)} />
          <textarea className="w-full p-3 rounded bg-transparent border border-white/10" rows={6} placeholder="Your message" value={message} onChange={e=>setMessage(e.target.value)} />
          <div className="flex gap-3">
            <button type="submit" disabled={loading} className="px-4 py-2 bg-teal-400 rounded text-black">{loading? 'Sending...':'Send Message'}</button>
            <a href="/ShubhamGosaiResume.pdf" download className="px-4 py-2 border rounded">Download Resume</a>
          </div>
        </form>
        <div className="card">
          <h3 className="font-semibold">Contact Info</h3>
          <p className="mt-2">Email: <a href="mailto:shubham@example.com" className="text-teal-400">shubham@example.com</a></p>
          <p className="mt-2">Location: Dehradun, India</p>
          <div className="mt-4 flex gap-3">
            <a href="https://www.instagram.com/shubhamg0sai/" target="_blank" className="p-2 bg-white/5 rounded">Instagram</a>
            <a href="https://linkedin.com/in/shubhamg0sai/" target="_blank" className="p-2 bg-white/5 rounded">LinkedIn</a>
            <a href="https://github.com/ShuBhamg0sai" target="_blank" className="p-2 bg-white/5 rounded">GitHub</a>
            <a href="https://x.com/shubhamg0sai" target="_blank" className="p-2 bg-white/5 rounded">X</a>
          </div>
        </div>
      </div>
      {toast && <Toast message={toast.msg} type={toast.type} />}
    </section>
  )
}
