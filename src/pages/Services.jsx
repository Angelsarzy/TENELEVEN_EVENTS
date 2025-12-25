import React from 'react'
export default function Services(){
  const services = [
    {id:'decorations',title:'Event Decorations',desc:'Stage design, floral arrangements, lighting, draping and bespoke decor packages to match your theme.',img:'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=1272611814869063'},
    {id:'weddings',title:'Wedding Styling',desc:'From intimate ceremonies to large receptions — full styling, aisle designs, stage work and floral arches.',img:'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3625170107705296345'},
    {id:'birthdays',title:'Birthday Parties',desc:'Theme consultations, backdrops, balloons, cakes and entertainment coordination for memorable parties.',img:'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=2950657156475453401'},
    {id:'corporate',title:'Corporate Events',desc:'Conferences, product launches, gala dinners — professional staging, AV and catering.',img:'https://marrymetampabay.com/wp-content/uploads/2022/08/11Modern-Emerald-Green-and-Black-Museum-Wedding.jpg'}
  ]
  const [modal,setModal] = React.useState(false)
  const [pay,setPay] = React.useState({name:'',email:'',amount:'',service:''})
  function open(s){setPay(p=>({...p,service:s}));setModal(true)}
  async function submit(e){
    e.preventDefault()
    if(!window.PaystackPop){
      alert('Paystack not loaded')
      setModal(false)
      return
    }
    const key = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY || 'pk_test_replace_me'
    const handler = window.PaystackPop.setup({
      key,
      email: pay.email,
      amount: (Number(pay.amount)||0)*100,
      metadata: { service: pay.service },
      callback: function(res){ alert('Payment complete: '+res.reference); setModal(false) },
      onClose: function(){ setModal(false) }
    })
    handler.openIframe()
  }
  return (
    <main id="main" className="container">
      <section className="page-hero" style={{backgroundImage:"url('https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3625170107705296345')"}}>
        <div className="hero-overlay small">
          <h1>Our Services</h1>
          <p className="lead">Comprehensive event solutions — styling, catering and coordination.</p>
        </div>
      </section>
      <section className="services-grid fade-in">
        {services.map((s,i)=> (
          <article key={i} id={s.id}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div className="service-images"><img src={s.img} alt={s.title} /></div>
            <a className="btn btn-small btn-gold" href="https://wa.me/2348025822375">Book This Service</a>
            <button className="btn btn-small pay-btn" onClick={()=>open(s.title)}>Pay Deposit</button>
          </article>
        ))}
      </section>
      {modal && (
        <div className="modal">
          <div className="modal-panel">
            <button className="modal-close" onClick={()=>setModal(false)}>×</button>
            <h3>Pay Deposit</h3>
            <form onSubmit={submit}>
              <label>Name<input required className="form-input" value={pay.name} onChange={(e)=>setPay(p=>({...p,name:e.target.value}))} /></label>
              <label>Email<input required className="form-input" value={pay.email} onChange={(e)=>setPay(p=>({...p,email:e.target.value}))} /></label>
              <label>Amount (NGN)<input required type="number" className="form-input" value={pay.amount} onChange={(e)=>setPay(p=>({...p,amount:e.target.value}))} /></label>
              <div style={{display:'flex',gap:8}}>
                <button className="btn btn-gold" type="submit">Pay Now</button>
                <button type="button" className="btn" onClick={()=>setModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  )
}
