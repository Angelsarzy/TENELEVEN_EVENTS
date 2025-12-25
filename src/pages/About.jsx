import React from 'react'
import { motion } from 'framer-motion'
export default function About(){
  const [show,setShow] = React.useState(true)
  return (
    <main id="main" className="container">
      <section className="page-hero" style={{backgroundImage:"url('https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=1276969444433300')"}}>
        <div className="hero-overlay small">
          <motion.h1 initial={{y:6,opacity:0}} animate={{y:0,opacity:1}}>About 10:11 events</motion.h1>
          <p className="lead">Creative event decorators & planners in Umuahia, Abia State.</p>
        </div>
      </section>
      <section className="about-content fade-in">
        <h2>Our Story</h2>
        <p>Founded with a passion for unforgettable celebrations, 10:11 events specializes in crafting elegant, luxurious experiences for weddings, birthdays, and corporate events. Our approach combines creative design, meticulous planning, and top-tier catering to bring your vision to life.</p>
        <div className="ceo-profile fade-in">
          <img className="ceo-photo" src="/assets/chief.jpg" alt="CEO" />
          <div className="ceo-bio">
            <h3>Meet the CEO</h3>
            <p><strong>Ibezim Bruno Chidozie</strong> — Founder & CEO. With years of experience in event design and hospitality, Bruno leads a talented team dedicated to exceptional service and attention to detail.</p>
          </div>
        </div>
        <h3>Mission & Vision</h3>
        <p><strong>Mission:</strong> To create memorable, high-quality events that reflect each client's personality and style.</p>
        <p><strong>Vision:</strong> To be the most trusted and creative event design company in Abia State and beyond.</p>
        <h3>Contact</h3>
        <p>Email: <a href="mailto:tenelevenevents@gmail.com">tenelevenevents@gmail.com</a></p>
      </section>
    </main>
  )
}
