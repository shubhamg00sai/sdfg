import React from 'react';

const projects = [
  { name: 'Voice_Gpt', link: '#'},
  { name: 'Image_gpt', link: '#'},
  { name: 'boobleshooter game', link: '#'},
  { name: 'sea_diving Game', link: '#'},
  { name: 'RdmVideoCall', link: '#'},
  { name: 'Face-attendance-app', link: '#'},
  { name: 'MoviesMod', link: '#'},
  { name: 'Erp_geu', link: '#'},
  { name: 'FlyToHigh', link: '#'},
  { name: 'UNO', link: '#'},
  { name: 'portfolio', link: '#'},
  { name: 'jewelry', link: '#'}
];

const Projects = () => (
  <section>
    <h2>Projects</h2>
    <div className="card-grid">
      {projects.map((p, i) => (
        <div key={i} className="card">
          <h3>{p.name}</h3>
          <a href={p.link} target="_blank">View Project</a>
        </div>
      ))}
    </div>
  </section>
);
export default Projects;