import React from 'react'

export default function Contact(){
  const handleSubmit = (e)=>{
    e.preventDefault()
    alert('Message sent (demo)')
    e.target.reset()
  }

  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="row">
          <input name="name" className="input" placeholder="Your name" required />
          <input name="email" className="input" type="email" placeholder="Your email" required />
        </div>
        <textarea name="message" placeholder="Message" required />
        <div style={{marginTop:12}}>
          <button className="btn" type="submit">Send Message</button>
        </div>
      </form>
    </section>
  )
}
