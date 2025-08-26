import React from 'react'

export default function Experience(){
  const items = [
    {role:'Application Developer Intern', org:'SoloLearn (Remote)', date:'Sept 2023', desc:'Worked with Java and Kotlin.'},
    {role:'Full Stack Developer Intern', org:'Nova Nectar Services Pvt. Ltd., Dehradun', date:'May 2024', desc:'Built front-end features with React and backend APIs with Node/Express.'},
    {role:'Computer Operator', org:'CIPET Doiwala', date:'Dec 2024 - Present', desc:'Admin department and technical support duties.'}
  ]
  return (
    <section id="experience" className="section">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {items.map((it,idx)=> (
          <article key={idx} className="card">
            <h3 className="font-semibold">{it.role}</h3>
            <p className="text-sm text-slate-400">{it.org} • {it.date}</p>
            <p className="mt-2 text-slate-300">{it.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
