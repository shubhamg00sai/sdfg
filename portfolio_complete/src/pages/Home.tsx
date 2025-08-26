import React from 'react'
export default function Home() {
  return (
    <section>
      <h1 className="text-3xl font-bold">Hi — I'm Shubham Gosai</h1>
      <p className="mt-3 text-lg">Full Stack Developer Intern / Fresher</p>

      <div className="mt-6 card">
        <h2 className="text-xl font-semibold">Summary</h2>
        <p className="mt-2">
          Full Stack Developer with strong foundation in front-end and back-end development. Skilled in HTML, CSS, JavaScript, React.js, Node.js, Express.js, and databases (MySQL/MongoDB), with hands-on experience through academic projects and internships. Passionate about building responsive, user-friendly, and scalable web applications while continuously learning modern frameworks and tools.
        </p>
        <div className="mt-4 flex gap-3">
          <a href="/ShubhamGosaiResume.pdf" download className="px-4 py-2 bg-blue-600 text-white rounded">Download Resume</a>
          <a href="/projects" className="px-4 py-2 border rounded">View Projects</a>
        </div>
      </div>
    </section>
  )
}
