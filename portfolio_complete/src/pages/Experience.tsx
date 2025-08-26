import React from 'react'
export default function Experience() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
      <div className="space-y-4">
        <div className="card">
          <h3 className="font-semibold">Application Developer Intern — SoloLearn (Remote)</h3>
          <p className="text-sm text-slate-600">Sept 2023</p>
          <p className="mt-2">Worked with Java and Kotlin during internship tasks and small projects.</p>
        </div>

        <div className="card">
          <h3 className="font-semibold">Full Stack Developer Intern — Nova Nectar Services Pvt. Ltd., Dehradun</h3>
          <p className="text-sm text-slate-600">May 2024</p>
          <p className="mt-2">Contributed to front-end and back-end features using React, Node.js, and Express.</p>
        </div>

        <div className="card">
          <h3 className="font-semibold">Computer Operator — CIPET, Doiwala Dehradun</h3>
          <p className="text-sm text-slate-600">Dec 2024 – Present</p>
          <p className="mt-2">Admin department duties and technical support roles for computer systems.</p>
        </div>
      </div>
    </section>
  )
}
