import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h4>10:11 events</h4>
          <p>Umuahia, Abia State, Nigeria</p>
          <p><a href="mailto:tenelevenevents@gmail.com">tenelevenevents@gmail.com</a></p>
        </div>
        <div>
          <h5>Quick Links</h5>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="copyright">© {year} 10:11 events. All rights reserved.</div>
    </footer>
  )
} 
