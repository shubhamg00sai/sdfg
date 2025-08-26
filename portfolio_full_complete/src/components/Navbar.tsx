import React from 'react'
export default function Navbar({dark,setDark}:{dark:boolean,setDark:(v:boolean)=>void}){
  const sections=['home','skills','projects','certifications','contact']
  return <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur">
    <div className="container flex items-center justify-between py-4">
      <a href="#home" className="text-xl font-semibold">Shubham Gosai</a>
      <nav className="hidden md:flex gap-6">{sections.map(s=><a key={s} href={`#${s}`} className="hover:text-teal-300 capitalize">{s}</a>)}</nav>
      <button onClick={()=>setDark(!dark)} className="px-3 py-1 rounded bg-white/5">{dark?'☀️ Light':'🌙 Dark'}</button>
    </div>
  </header>
}