import React from 'react'
export default function Certifications(){ 
  const certs = [
    {title:'Machine Learning – SoloLearn', img:'/assets/certs/cert1.png', link:'#'},
    {title:'Python Core – SoloLearn', img:'/assets/certs/cert2.png', link:'#'},
    {title:'C Language – SoloLearn', img:'/assets/certs/cert3.png', link:'#'}
  ]
  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">Certifications</h2>
        <div className="grid md:grid-cols-3 gap-6 certs-grid">
          {certs.map((c,i)=>(
            <a key={i} href={c.link} target="_blank" rel="noreferrer" className="card group overflow-hidden">
              <img src={c.img} alt={c.title} className="w-full h-40 object-cover rounded" />
              <h3 className="mt-3 font-semibold">{c.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
