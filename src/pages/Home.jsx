import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
export default function Home(){
  const slides = [
    {title:'Elevate Your Events with Luxury Decor',text:'10:11 Events — Premium event decorations & planning in Umuahia',btn:'Book Now via WhatsApp',img:'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=1272611814869063'},
    {title:'Luxurious Wedding Stages & Floral Designs',text:'Let us transform your venue into a dream.',btn:'Chat with CEO',img:'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=1276969444433300'},
    {title:'Memorable Birthdays & Corporate Events',text:'Full catering and venue setup packages available.',btn:'Get a Quote',img:'https://cdn0.weddingwire.com/vendor/677289/3_2/960/jpg/1505218733646-om-event-decorations-mandap-wedding-indian-sweet-s.jpeg'}
  ]
  const [idx,setIdx] = React.useState(0)
  const [paused,setPaused] = React.useState(false)
  React.useEffect(()=>{
    if(paused) return
    const t = setInterval(()=>{setIdx((s)=> (s+1)%slides.length)},4000)
    return ()=>clearInterval(t)
  },[paused, slides.length])
  return (
    <main id="main">
      <section className="hero-slider">
        <div className="slides" tabIndex="0" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} onFocus={()=>setPaused(true)} onBlur={()=>setPaused(false)} style={{transform:`translateX(-${idx*100}%)`,transition:'transform .8s ease'}}>
          {slides.map((s,i)=>(
            <div key={i} className="slide" style={{backgroundImage:`url('${s.img}')`}}>
              <div className="hero-overlay">
                <motion.h1 initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.1}}>{s.title}</motion.h1>
                <p className="lead">{s.text}</p>
                <a className="btn btn-cta" href="https://wa.me/2348025822375">{s.btn}</a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="intro container fade-in">
        <div className="intro-grid">
          <img className="welcome-img" src="/10 11 logo.png" alt="emblem" />
          <div>
            <h2>Welcome to 10:11 events</h2>
            <p className="lead">We are a premier event decoration, planning and catering company based in Umuahia, Abia State, Nigeria. Owned by CEO Ibezim Bruno Chidozie, our team creates elegant, inspiring celebrations — from intimate gatherings to large-scale weddings and corporate galas.</p>
          </div>
        </div>
      </section>
      <section className="services-preview container fade-in">
        <h3>Featured Services</h3>
        <div className="cards">
          {[{t:'Wedding Styling',img:'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3740365462929652254',p:'Elegant stage, floral arches, table setups and guest experiences tailored to your love story.'},{t:'Birthday Parties',img:'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3625170107705296345',p:'Creative themes, balloons, backdrops and cakes for all ages.'},{t:'Corporate Events',img:'https://marrymetampabay.com/wp-content/uploads/2022/08/11Modern-Emerald-Green-and-Black-Museum-Wedding.jpg',p:'Professional stage design, lighting and catering for corporate functions.'}].map((c,i)=> (
            <article key={i} className="card">
              <img src={c.img} alt={c.t} />
              <h4>{c.t}</h4>
              <p>{c.p}</p>
              <Link className="btn btn-small" to="/services">Book This Service</Link>
            </article>
          ))}
        </div>
      </section> 
      <section className="testimonials container fade-in">
        <h3>What Clients Say</h3>
        <div className="testimonials-slider">
          {[{n:'Adaobi',t:'10:11 events made our wedding magical. Every detail was perfect.',img:'https://i.pravatar.cc/96?u=adaobi'},{n:'Chukwu',t:'Professional and creative. Highly recommended for corporate events.',img:'https://i.pravatar.cc/96?u=chukwu'},{n:'Funmi',t:'Amazing birthday setup for my daughter. Guests loved it.',img:'https://i.pravatar.cc/96?u=funmi'}].map((p,i)=> (
            <div key={i} className="testi">
              <div className="testi-card">
                <img className="testi-avatar" src={p.img} alt={p.n} />
                <div className="testi-text">"{p.t}" — {p.n}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="cta-strong fade-in">
        <div className="container">
          <h2>Ready to transform your event?</h2>
          <p>Contact CEO Ibezim Bruno Chidozie directly to discuss your vision.</p>
          <a className="btn btn-gold btn-large" href="https://wa.me/2348025822375">Chat with CEO on WhatsApp</a>
        </div>
      </section>
    </main>
  )
}
