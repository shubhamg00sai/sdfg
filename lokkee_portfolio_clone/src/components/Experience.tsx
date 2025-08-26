import React from 'react'
export default function Experience(){
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card"><h3 className="font-semibold">Application Developer Intern</h3><p className="text-slate-400 text-sm">SoloLearn — Sept 2023</p></div>
          <div className="card"><h3 className="font-semibold">Full Stack Developer Intern</h3><p className="text-slate-400 text-sm">Nova Nectar — May 2024</p></div>
          <div className="card"><h3 className="font-semibold">Computer Operator</h3><p className="text-slate-400 text-sm">CIPET Doiwala — Dec 2024</p></div>
        </div>
      </div>
    </section>
  )
}
