import React from 'react'
export default function Skills(){ return (
  <section id="skills" className="section">
    <div className="container">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="card"><h4 className="font-semibold">Frontend</h4><p className="text-slate-300">React, TypeScript, Tailwind CSS</p></div>
        <div className="card"><h4 className="font-semibold">Backend</h4><p className="text-slate-300">Node.js, Express.js, REST APIs</p></div>
        <div className="card"><h4 className="font-semibold">Mobile & Tools</h4><p className="text-slate-300">Firebase, Android Studio, Git</p></div>
      </div>
    </div>
  </section>
)}