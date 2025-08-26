import React from 'react'

export default function Navbar({dark,setDark}:{dark:boolean,setDark:(v:boolean)=>void}){
  const links = ['home','experience','education','skills','projects','certifications','contact']
  return (
    <header className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur z-50">
      <div className="container flex items-center justify-between py-4">
        <a href="#home" className="text-xl font-bold">Shubham Gosai</a>
        <nav className="hidden md:flex gap-6">
          {links.map(l=> <a key={l} href={'#'+l} className="hover:text-white capitalize">{l}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={()=> setDark(!dark)} className="px-3 py-1 rounded bg-white/5">{dark? 'Dark' : 'Light'}</button>
        </div>
      </div>
    </header>
  )
}
