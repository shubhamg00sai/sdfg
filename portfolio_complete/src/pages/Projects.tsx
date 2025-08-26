import React from 'react'
export default function Projects() {
  const projects = [
    { title: 'Voice_Gpt', desc: 'Control through voice in Windows/Linux terminal using OpenAI API', link: '#' },
    { title: 'Image_gpt', desc: 'Voice-based image creation tool', link: '#' },
    { title: 'boobleshooter game', desc: 'Game using JavaScript, CSS, HTML, PHP', link: '#' },
    { title: 'sea_diving Game', desc: 'Game using JavaScript, CSS, HTML', link: '#' },
    { title: 'RdmVideoCall', desc: 'Coin-based video call app using Firebase Realtime DB', link: '#' },
    { title: 'Face-attendance-app', desc: 'Realtime face attendance application', link: '#' },
    { title: 'MoviesMod', desc: 'Movies downloader application', link: '#' },
    { title: 'Erp_geu', desc: 'ERP for Graphic Era Hill University', link: '#' },
    { title: 'FlyToHigh', desc: 'Android app for booking flights', link: '#' },
    { title: 'UNO', desc: 'UNO game application with new logic', link: '#' },
    { title: 'Portfolio', desc: 'My portfolio built with TypeScript, React, Tailwind', link: '#' },
    { title: 'Jewelry', desc: 'Jewelry website built with JS, CSS, HTML', link: '#' }
  ]

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="card">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm mt-1">{p.desc}</p>
            <div className="mt-3">
              <a className="text-blue-600" href={p.link}>View Project</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
