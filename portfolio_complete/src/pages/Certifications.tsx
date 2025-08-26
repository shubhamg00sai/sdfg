import React from 'react'
export default function Certifications() {
  const certs = [
    { title: 'Machine Learning — SoloLearn', link: '#' },
    { title: 'Python Core — SoloLearn', link: '#' },
    { title: 'C Language — SoloLearn', link: '#' },
    { title: 'Go Language — SoloLearn', link: '#' },
    { title: 'HTML — SoloLearn', link: '#' },
    { title: 'Swift4 — SoloLearn', link: '#' }
  ]

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Certifications</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {certs.map((c) => (
          <div key={c.title} className="card">
            <h3 className="font-semibold">{c.title}</h3>
            <a className="text-blue-600 mt-2 inline-block" href={c.link}>View Certificate</a>
          </div>
        ))}
      </div>
    </section>
  )
}
