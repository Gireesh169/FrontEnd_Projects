import React from 'react'

const projects = [
  {id:1,title:'Calculator',desc:'Created a simple calculator app for doing simple calculations.',tech:['React','CSS','Vite'],url:'#'},
  {id:2,title:'Login form',desc:'Created a basic login form for uderstanding structure dev server',tech:['JavaScript','HTML','CSS'],url:'#'},
  {id:3,title:'Protfolio',desc:'Created a personal portfolio website to showcase projects and skills.',tech:['React','Fetch','API'],url:'#'},
  {id:4,title:'Study-Job Network App',desc:'Crated in one night hackathon that connects the genral users and the companines to uplift their skills',tech:['Figma','CSS','React'],url:'#'},
  {id:5,title:'To_do_list',desc:'My father generally forgets things so I craeted and gave him to use this app',tech:['Webpack','JS'],url:'#'},
  {id:6,title:'Project Six',desc:'A short description of project six. Testing and CI.',tech:['Jest','CI'],url:'#'}
]

export default function Projects(){
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(p=> (
          <article key={p.id} className="card">
            <h3>{p.title}</h3>
            <p className="muted">{p.desc}</p>
            <div className="badges">
              {p.tech.map(t=> <span key={t} className="badge">{t}</span>)}
            </div>
            <div className="links">
              <a className="link-btn" href={p.url} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
