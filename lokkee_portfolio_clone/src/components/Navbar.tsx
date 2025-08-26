import React from 'react'

export default function Navbar({dark,setDark}:{dark:boolean,setDark:(v:boolean)=>void}){
  const links = ['home','experience','education','skills','projects','certifications','contact']
  return (
    <header className="fixed w-full z-50 top-0 left-0 backdrop-blur bg-black/20">
      <div className="container flex items-center justify-between py-4">
        <a href="#home" className="logo text-2xl">Shubham<span className="text-accent">.</span></a>
        <nav className="hidden md:flex gap-6 items-center">
          {links.map(l=> <a key={l} href={'#'+l} className="nav-link hover:text-white/90 capitalize">{l}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={()=> setDark(!dark)} className="px-3 py-1 rounded bg-white/5">{dark? 'Light':'Dark'}</button>
        </div>
      </div>
    </header>
  )
}
