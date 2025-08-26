import React from 'react'

export default function Contact() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <div className="card">
        <p>Email: <a className="text-blue-600" href="mailto:shubham@example.com">shubham@example.com</a></p>
        <p className="mt-2">You can download my resume here:</p>
        <a className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded" href="/ShubhamGosaiResume.pdf" download>Download Resume</a>
      </div>
    </section>
  )
}
