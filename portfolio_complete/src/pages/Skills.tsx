import React from 'react'
export default function Skills() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>

      <div className="card">
        <h3 className="font-semibold">Full stack</h3>
        <ul className="list-disc ml-6 mt-2">
          <li>Languages: JavaScript, HTML5, CSS3</li>
          <li>Frameworks & Libraries: React.js, Node.js, Express.js, Tailwind CSS</li>
          <li>Databases: MySQL, DBMS concepts, MongoDB</li>
          <li>Developer Tools: Git, GitHub, VS Code, Cursor</li>
          <li>Core Concepts: REST APIs, Operating Systems, UI/UX Design</li>
        </ul>
      </div>

      <div className="card mt-4">
        <h3 className="font-semibold">App Development</h3>
        <ul className="list-disc ml-6 mt-2">
          <li>Languages: Java, XML</li>
          <li>Basic Languages: C++, Kotlin, Swift</li>
          <li>Frameworks & Libraries: React.js, Node.js</li>
          <li>Databases: Firebase Database, MySQL</li>
          <li>Developer Tools: GitHub, VS Code, Android Studio, Flutter</li>
        </ul>
      </div>

      <div className="mt-4 card">
        <h3 className="font-semibold">Skill distribution (languages)</h3>
        <ul className="mt-2">
          <li>TypeScript — 91.7%</li>
          <li>JavaScript — 4.3%</li>
          <li>CSS — 2.6%</li>
          <li>HTML — 1.4%</li>
        </ul>
      </div>
    </section>
  )
}
