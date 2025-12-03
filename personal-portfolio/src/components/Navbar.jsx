import React, { useState } from 'react'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const links = [
    {label:'Home', href:'#home'},
    {label:'About', href:'#about'},
    {label:'Projects', href:'#projects'},
    {label:'Skills', href:'#skills'},
    {label:'Contact', href:'#contact'}
  ]

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="brand">D Gireesh</div>
      </div>

      <div className="nav-links">
        {links.map(l=> (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </div>

      <button className="hamburger" onClick={()=>setOpen(v=>!v)} aria-label="Toggle menu">{open? '✕' : '☰'}</button>

      {open && (
        <div className="mobile-menu">
          {links.map(l=> (
            <a key={l.href} href={l.href} onClick={()=>setOpen(false)}>{l.label}</a>
          ))}
        </div>
      )}
    </nav>
  )
}
