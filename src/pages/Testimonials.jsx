import React from 'react'
export default function Testimonials(){
  const items = [
    {name:'Adaobi',text:'10:11 events made our wedding magical. Every detail was perfect.'},
    {name:'Chukwu',text:'Professional and creative. Highly recommended for corporate events.'},
    {name:'Funmi',text:'Amazing birthday setup for my daughter. Guests loved it.'},
    {name:'Emeka',text:'Great catering and beautiful table styling.'}
  ]
  return (
    <main className="container">
      <section className="page-hero" style={{backgroundImage:"url('https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=1272611814869063')"}}>
        <div className="hero-overlay small">
          <h1>Testimonials</h1>
          <p className="lead">What clients say about us</p>
        </div>
      </section>
      <section className="testimonials container fade-in">
        <h3>Client Stories</h3>
        <div className="testimonials-slider">
          {items.map((it,i)=> (
            <div key={i} className="testi">
              <div className="testi-card">
                <img className="testi-avatar" src={`https://i.pravatar.cc/96?u=${it.name}`} alt={it.name} />
                <div className="testi-text">"{it.text}" — {it.name}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
