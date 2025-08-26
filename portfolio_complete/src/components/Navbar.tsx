import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const links = [
  { to: '/', label: 'Home' },
  { to: '/experience', label: 'Experience' },
  { to: '/education', label: 'Education' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const loc = useLocation()
  return (
    <motion.header initial={{ y: -50, opacity: 0 }} animate={{ y:0, opacity:1 }} transition={{ duration: 0.6 }} className="sticky top-0 z-40 bg-slate-900/70 backdrop-blur border-b border-slate-700">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="text-white font-bold text-lg">Shubham Gosai</Link>
        <nav className="hidden md:flex gap-6">
          {links.map(l=> (
            <Link key={l.to} to={l.to} className={`text-slate-200 hover:text-white ${loc.pathname===l.to ? 'underline' : ''}`}>{l.label}</Link>
          ))}
        </nav>
        <div className="md:hidden text-slate-200">Menu</div>
      </div>
    </motion.header>
  )
}
