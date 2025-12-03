import React from 'react'

export default function Footer(){
  return (
    <footer className="footer">
      <div>© {new Date().getFullYear()} D Gireesh. All rights reserved.</div>
      <div style={{marginTop:8}}>
        <a href="#" style={{color:'var(--muted)',marginRight:12}}>GitHub</a>
        <a href="#" style={{color:'var(--muted)',marginRight:12}}>LinkedIn</a>
        <a href="#" style={{color:'var(--muted)'}}>Twitter</a>
      </div>
    </footer>
  )
}
