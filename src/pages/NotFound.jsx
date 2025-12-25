import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFound(){
  return (
    <main id="main" className="container">
      <section style={{padding:'6rem 0',textAlign:'center'}}>
        <h1>404 — Page not found</h1>
        <p>We couldn't find that page. Go back home.</p>
        <Link className="btn" to="/">Home</Link>
      </section>
    </main>
  )
} 
