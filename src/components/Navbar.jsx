import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
export default function Navbar(){
  const [open,setOpen] = React.useState(false)
  const links = [{to:'/',label:'Home'},{to:'/about',label:'About'},{to:'/services',label:'Services'},{to:'/gallery',label:'Portfolio'},{to:'/testimonials',label:'Testimonials'},{to:'/blog',label:'Blog'},{to:'/faq',label:'FAQ'},{to:'/contact',label:'Contact'}]
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="container nav-wrap">
          <Link className="logo" to="/">
            <img className="logo-img" src="/assets/10-11-logo.png" alt="10:11 events logo" />
            <span className="sub">events</span>
          </Link>
          <nav className="main-nav" aria-hidden={open? 'false' : 'true'}>
            <ul>
              {links.slice(0,links.length-1).map((l,i)=> (
                <li key={i}>
                  <NavLink to={l.to} className={({isActive})=>isActive? 'active' : ''}>
                    <span style={{padding:'6px 8px'}}>{l.label}</span>
                  </NavLink>
                </li>
              ))}
              <li><NavLink to="/contact" className="btn btn-gold">Contact</NavLink></li>
            </ul>
          </nav>
          <button className="hamburger" aria-controls="mobile-menu" aria-expanded={open} onClick={()=>setOpen(!open)}>
            ☰
          </button>
        </div>
      </header>
      {open && (
        <motion.nav id="mobile-menu" initial={{y:-20,opacity:0}} animate={{y:0,opacity:1}} exit={{y:-20,opacity:0}} className="mobile-menu">
          <ul>
            {links.map((l,i)=>(
              <li key={i}><NavLink to={l.to} onClick={()=>setOpen(false)} className={({isActive})=>isActive? 'active' : ''}>{l.label}</NavLink></li>
            ))}
          </ul>
        </motion.nav>
      )}
    </>
  )
}
