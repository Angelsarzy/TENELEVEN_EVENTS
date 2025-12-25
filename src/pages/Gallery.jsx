import React from 'react'
export default function Gallery(){
  const photos = [
    'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=369881366038914',
    'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=2950657156475453401',
    'https://partynowtampa.com/wp-content/uploads/2024/04/backdrop-balloon-decoration-tampa-01.webp',
    'https://www.katebackdrop.com/cdn/shop/files/BH1049581B.jpg?v=1711515570&width=1000',
    'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3782342367102777990',
    'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3740365462929652254'
  ]
  return (
    <main className="container">
      <section className="page-hero" style={{backgroundImage:"url('https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=1272611814869063')"}}>
        <div className="hero-overlay small">
          <h1>Portfolio</h1>
          <p className="lead">Gallery of our recent work</p>
        </div>
      </section>
      <section className="portfolio-preview container fade-in">
        <h3>Featured Portfolio</h3>
        <div className="grid">
          {photos.map((p,i)=> (
            <a key={i} className="portfolio-item" href="#">
              <img src={p} alt={`portfolio-${i}`} loading="lazy" />
              <span>Project {i+1}</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
