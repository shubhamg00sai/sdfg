import React from 'react';

const certifications = [
  { name: 'Machine Learning – SoloLearn', link: '#' },
  { name: 'Python Core – SoloLearn', link: '#' },
  { name: 'C Language – SoloLearn', link: '#' },
  { name: 'Go Language – SoloLearn', link: '#' },
  { name: 'HTML – SoloLearn', link: '#' },
  { name: 'Swift4 – SoloLearn', link: '#' }
];

const Certifications = () => (
  <section>
    <h2>Certifications</h2>
    <div className="card-grid">
      {certifications.map((c, i) => (
        <div key={i} className="card">
          <h3>{c.name}</h3>
          <a href={c.link} target="_blank">View Certificate</a>
        </div>
      ))}
    </div>
  </section>
);
export default Certifications;