import React from 'react'

export default function About(){
  return (
    <section id="about" className="section">
      <h2>About</h2>
      <div className="details">
        <div className="info">
          <p>Hello! I'm a frontend developer specializing in building (and occasionally designing) exceptional digital experiences. Currently focused on building responsive web apps with React.</p>
          <p>I enjoy turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding, I like reading and traveling (placeholder text).</p>
        </div>

        <div className="info">
          <h4>Details</h4>
          <ul className="small-list">
            <li><strong>Andhara Pradesh</strong> Vijayawada</li>
            <li><strong>Education:</strong> Computer Science and Engineering</li>
            <li><strong>Availability:</strong> Student </li>
            <li><strong>Interests:</strong> Web, UI, Accessibility</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
