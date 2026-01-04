import React from 'react'

const projects = [
  {id:1,title:'Calculator',desc:'Created a simple calculator app for doing simple calculations.',tech:['React','CSS','Vite'],url:'https://github.com/Gireesh169/FrontEnd_Projects/tree/main/Calculator'},
  {id:2,title:'Card Game',desc:'A simple card game built using JavaScript, HTML, and CSS.',tech:['JavaScript','HTML','CSS'],url:'https://github.com/Gireesh169/FrontEnd_Projects/tree/main/Card_Game'},
  {id:3,title:'Protfolio',desc:'Created a personal portfolio website to showcase projects and skills.',tech:['React','Fetch','API'],url:'https://github.com/Gireesh169/FrontEnd_Projects/tree/main/personal-portfolio'},
  {id:4,title:'Study-Job Network App',desc:'Crated in one night hackathon that connects the genral users and the companines to uplift their skills',tech:['Figma','CSS','React'],url:'https://github.com/Gireesh169/Front_End_Hackathon_Project'},
  {id:5,title:'To_do_list',desc:'My father generally forgets things so I craeted and gave him to use this app',tech:['Webpack','JS'],url:'https://github.com/Gireesh169/FrontEnd_Projects/tree/main/To_Do_List_App'},
  {id:6,title:'Student Emotion Based Learning website',desc:'A website that adapts learning content based on student emotions to enhance engagement and effectiveness.',tech:['React','CSS','Emotion'],url:'#'},
  {id:7,title:'Machine learning Fruit and Vegetable detector',desc:'A machine learning model that detects fruits and vegetables from images to assist in inventory management and quality control.',tech:['JavaScript','API','CSS'],url:'#'},
  {id:8,title:'Crowd Panic Detection using Machine learning',desc:'Practiced and implemented various SQL queries to manage and manipulate databases effectively.',tech:['SQL Queries','Database Management', 'firebase', 'vite'],url:'https://github.com/Gireesh169/TechSpirit_Project'}
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
