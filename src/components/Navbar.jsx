import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
export default function Navbar(){
  const [open,setOpen] = React.useState(false)
  const links = [{to:'/',label:'Home'},{to:'/about',label:'About'},{to:'/services',label:'Services'},{to:'/gallery',label:'Portfolio'},{to:'/testimonials',label:'Testimonials'},{to:'/blog',label:'Blog'},{to:'/faq',label:'FAQ'},{to:'/contact',label:'Contact'}]
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a className="logo" href="/">
          <img className="logo-img" src="/10 11 logo.png" alt="logo" />
          <span className="sub">events</span>
        </a>
        <nav className="main-nav">
          <ul>
            {links.map((l,i)=> (
              <li key={i}>
                <NavLink to={l.to} className={({isActive})=>isActive? 'active' : ''}>
                  <span style={{padding:'6px 8px'}}>{l.label}</span>
                </NavLink>
              </li>
            ))}
            <li><a className="btn btn-gold" href="/contact">Contact</a></li>
          </ul>
        </nav>
        <button className="hamburger" onClick={()=>setOpen(!open)}>
          ☰
        </button>
      </div>
    </header>
  )
}
