import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="bg-white border-b">
      <div className="container flex items-center justify-between py-4">
        <Link to='/' className="text-xl font-semibold">Shubham Gosai</Link>
        <nav className="space-x-4">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/experience">Experience</Link>
          <Link className="nav-link" to="/education">Education</Link>
          <Link className="nav-link" to="/skills">Skills</Link>
          <Link className="nav-link" to="/projects">Projects</Link>
          <Link className="nav-link" to="/certifications">Certifications</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
