import React from 'react'

const skillList = ['HTML','CSS','JavaScript','React','Git','GitHub','Accessibility','Responsive Design','Node.js','Vite','Testing','API Integration','Webpack','Figma','Machine Learning Basics','SQL Queries']

export default function Skills(){
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillList.map(s=> (
          <div key={s} className="skill">{s}</div>
        ))}
      </div>
    </section>
  )
}
