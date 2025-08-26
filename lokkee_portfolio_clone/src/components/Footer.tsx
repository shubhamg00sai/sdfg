import React from 'react'
export default function Footer(){ return (
  <footer className="py-8 mt-12 border-t border-white/5">
    <div className="container text-center text-slate-400">
      <div className="flex justify-center gap-6 mb-3">
        <a href="https://www.instagram.com/shubhamg0sai/" target="_blank" rel="noreferrer"><img src="/assets/icons/instagram.svg" alt="ig" className="w-6 h-6"/></a>
        <a href="https://linkedin.com/in/shubhamg0sai/" target="_blank" rel="noreferrer"><img src="/assets/icons/linkedin.svg" alt="li" className="w-6 h-6"/></a>
        <a href="https://github.com/ShuBhamg0sai" target="_blank" rel="noreferrer"><img src="/assets/icons/github.svg" alt="gh" className="w-6 h-6"/></a>
        <a href="https://x.com/shubhamg0sai" target="_blank" rel="noreferrer"><img src="/assets/icons/x.svg" alt="x" className="w-6 h-6"/></a>
      </div>
      <div>© 2025 Shubham Gosai</div>
    </div>
  </footer>
)}