import React from 'react'
export default function NotFound(){
  return (
    <main className="container">
      <section style={{padding:'6rem 0',textAlign:'center'}}>
        <h1>404 — Page not found</h1>
        <p>We couldn't find that page. Go back home.</p>
        <a className="btn" href="/">Home</a>
      </section>
    </main>
  )
}
