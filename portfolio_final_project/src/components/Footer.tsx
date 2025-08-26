import React from 'react'
export default function Footer(){ return (
  <footer className="py-8 mt-12 border-t border-slate-700">
    <div className="container text-center text-slate-400">
      <div className="flex justify-center gap-6 mb-3">
        <a href="https://www.instagram.com/shubhamg0sai/" target="_blank" rel="noreferrer">
          <img src="/assets/icons/instagram.svg" alt="Instagram" className="w-6 h-6 inline-block"/>
        </a>
        <a href="https://linkedin.com/in/shubhamg0sai/" target="_blank" rel="noreferrer">
          <img src="/assets/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6 inline-block"/>
        </a>
        <a href="https://github.com/ShuBhamg0sai" target="_blank" rel="noreferrer">
          <img src="/assets/icons/github.svg" alt="GitHub" className="w-6 h-6 inline-block"/>
        </a>
        <a href="https://x.com/shubhamg0sai" target="_blank" rel="noreferrer">
          <img src="/assets/icons/x.svg" alt="X" className="w-6 h-6 inline-block"/>
        </a>
      </div>
      <div>© 2025 Shubham Gosai</div>
    </div>
  </footer>
) }
