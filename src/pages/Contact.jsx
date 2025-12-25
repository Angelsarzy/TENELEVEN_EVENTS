import React from 'react'
export default function Contact(){
  const [form,setForm] = React.useState({name:'',phone:'',email:'',message:''})
  function change(e){
    const {name,value} = e.target
    setForm(prev=> ({...prev,[name]:value}))
  }
  return (
    <main id="main" className="container">
      <section className="page-hero" style={{backgroundImage:"url('/assets/chief.jpg')"}}>
        <div className="hero-overlay small">
          <h1>Contact & Booking</h1>
          <p className="lead">Ready to plan your next event? Reach out now.</p>
        </div>
      </section>
      <section className="contact-grid fade-in">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><strong>Address:</strong> Umuahia, Abia State, Nigeria</p>
          <p><strong>Phone:</strong> +234 802 582 2375</p>
          <p><strong>Email:</strong> <a href="mailto:tenelevenevents@gmail.com">tenelevenevents@gmail.com</a></p>
          <p><a className="btn btn-gold" href="https://wa.me/2348025822375">Chat with CEO on WhatsApp</a></p>
          <h4>Request a Quote</h4>
          <p>Fill the form and we will respond within 24-48 hours.</p>
        </div>
        <div className="contact-form">
          <form onSubmit={(e)=>{e.preventDefault(); alert('Request sent') }}>
            <label>Name<input className="form-input" name="name" value={form.name} onChange={change} required /></label>
            <label>Phone<input className="form-input" name="phone" value={form.phone} onChange={change} required /></label>
            <label>Email<input className="form-input" name="email" value={form.email} onChange={change} /></label>
            <label>Message<textarea className="form-input" name="message" value={form.message} onChange={change} rows="4"></textarea></label>
            <button className="btn btn-gold" type="submit">Send Request</button>
          </form>
        </div>
      </section>
      <section className="map fade-in">
        <h3>Our Location</h3>
        <div className="map-wrap">
          <iframe src="https://www.google.com/maps?q=Umuahia,+Abia+State,+Nigeria&output=embed" loading="lazy" style={{width:'100%',height:300,border:0}}></iframe>
        </div>
      </section>
    </main>
  )
}
