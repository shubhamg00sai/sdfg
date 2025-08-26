import React from 'react'

export default function SkillChart(){
  return (
    <section id="skills" className="section">
      <h2 className="text-2xl font-bold mb-4">Skills for App Development</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="card">
          <h3 className="font-semibold">Languages</h3>
          <p className="text-slate-300 mt-2">Java, XML</p>
        </div>
        <div className="card">
          <h3 className="font-semibold">Basic Languages</h3>
          <p className="text-slate-300 mt-2">C++, Kotlin, Swift</p>
        </div>
        <div className="card">
          <h3 className="font-semibold">Frameworks & Libraries</h3>
          <p className="text-slate-300 mt-2">React.js, Node.js</p>
        </div>
        <div className="card">
          <h3 className="font-semibold">Databases</h3>
          <p className="text-slate-300 mt-2">Firebase Database, MySQL</p>
        </div>
        <div className="card">
          <h3 className="font-semibold">Developer Tools</h3>
          <p className="text-slate-300 mt-2">GitHub, VS Code, Android Studio, Flutter</p>
        </div>
      </div>
    </section>
  )
}
