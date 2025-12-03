import React from 'react'

export default function Hero(){
  const scrollToProjects = (e)=>{
    e.preventDefault()
    const el = document.getElementById('projects')
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'})
  }

  return (
    <section id="home" className="section hero">
      <div className="hero-card">
        <h1>Hi, I am Gireesh</h1>
        <div className="role">Frontend Developer</div>
        <p className="tagline">I build responsive, accessible, and modern web interfaces using React.</p>
        <div className="cta">
          <button className="btn" onClick={scrollToProjects}>View Projects</button>
          <a className="btn ghost" href="#contact">Contact Me</a>
        </div>
      </div>

      <aside className="hero-card">
        <h3>Quick Info</h3>
        <p className="small muted">Based in: Placeholder City</p>
        <p className="small muted">Open to opportunities • Available for freelance</p>
      </aside>
    </section>
  )
}
