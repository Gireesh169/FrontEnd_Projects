import React from 'react'

export default function Footer(){
  return (
    <footer className="footer">
      <div>© {new Date().getFullYear()} D Gireesh. All rights reserved.</div>
      <div style={{marginTop:8}}>
        <a href="https://github.com/Gireesh169" style={{color:'var(--muted)',marginRight:12}}>GitHub</a>
        <a href="https://www.linkedin.com/in/gireesh-davaleswarapu-483a682a2/" style={{color:'var(--muted)',marginRight:12}}>LinkedIn</a>
      
      </div>
    </footer>
  )
}
