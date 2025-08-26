import React from 'react'

export default function Education(){
  const ed = [
    {title:'B.Sc. in Information Technology', inst:'Graphic Era Hill University, Dehradun, IN', years:'2020 – 2023', note:'CGPA: 7'},
    {title:'Master in Computer Application (Distance)', inst:'Graphic Era University, Dehradun, IN', years:'2024 – 2026', note:''}
  ]
  return (
    <section id="education" className="section">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {ed.map((e,idx)=> (
          <div key={idx} className="card">
            <h3 className="font-semibold">{e.title}</h3>
            <p className="text-sm text-slate-400">{e.inst} • {e.years} {e.note}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
