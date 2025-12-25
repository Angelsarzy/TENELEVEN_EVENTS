import React from 'react'
export default function Faq(){
  const faqs = [{q:'How do I book?',a:'Contact us via WhatsApp or the booking form'},{q:'Do you provide catering?',a:'Yes, we provide full catering packages'},{q:'Do you travel outside Umuahia?',a:'Yes, contact us for travel fees and availability'}]
  const [open,setOpen] = React.useState(null)
  return (
    <main id="main" className="container">
      <section className="page-hero" style={{backgroundImage:"url('https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3782342367102777990')"}}>
        <div className="hero-overlay small">
          <h1>FAQ</h1>
          <p className="lead">Common questions answered</p>
        </div>
      </section>
      <section className="faq container fade-in">
        <h3>FAQ</h3>
        <div className="faqs">
          {faqs.map((f,i)=> (
            <div key={i} className="faq-item">
              <h4 onClick={()=> setOpen(open === i ? null : i)} style={{cursor:'pointer'}}>{f.q}</h4>
              {open===i && <p>{f.a}</p>}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
