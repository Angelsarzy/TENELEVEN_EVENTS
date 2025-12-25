import React from 'react'
export default function Blog(){
  const posts = [
    {title:'2025 Wedding Decor Trends in Nigeria',excerpt:'Discover the latest looks, palettes and statement pieces for modern Nigerian weddings.'},
    {title:'How to Plan a Memorable Birthday in Umuahia',excerpt:'Top tips for themes, logistics and guest experiences that wow.'},
    {title:'Full Catering vs. Cake & Chops: What You Need',excerpt:'Choosing the right food service for your event size and budget.'}
  ]
  return (
    <main className="container">
      <section className="page-hero" style={{backgroundImage:"url('https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=1276969444433300')"}}>
        <div className="hero-overlay small">
          <h1>Blog</h1>
          <p className="lead">Insights and tips from our team</p>
        </div>
      </section>
      <section className="blog-preview container fade-in">
        <h3>Latest From Our Blog</h3>
        <div className="blog-grid">
          {posts.map((p,i)=> (
            <article key={i} className="post">
              <h4>{p.title}</h4>
              <p>{p.excerpt}</p>
              <a href="#" className="read-more">Read more →</a>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
