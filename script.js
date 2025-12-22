// script.js — basic interaction: sliders, lightbox, mobile menu, fade-in, FAQ
document.addEventListener('DOMContentLoaded',function(){
  // Set year in multiple pages
  const year = new Date().getFullYear();
  document.querySelectorAll('#year, #year-about, #year-services, #year-gallery, #year-testimonials, #year-blog, #year-faq, #year-contact').forEach(el=>{ if(el) el.textContent = year });

  // Normalize WhatsApp links and phone placeholders (replaces placeholders at runtime)
  // CEO phone: +234 802 582 2375
  const CEO_PHONE_DIGITS = '2348025822375'; // for wa.me links
  const CEO_PHONE_DISPLAY = '+234 802 582 2375'; // visible format
  // Update wa.me links that may contain placeholders or old numbers
  document.querySelectorAll('a[href*="wa.me"]').forEach(a=>{
    a.href = a.href.replace(/wa\.me\/[0-9X\+]+/, 'wa.me/' + CEO_PHONE_DIGITS);
  });
  // Replace visible phone placeholder strings like "+234 XXXXXXXXXXX"
  document.querySelectorAll('body *').forEach(el=>{
    if(el.children.length===0 && el.textContent && el.textContent.includes('+234 X')){
      el.textContent = el.textContent.replace(/\+234\s*X+/g, CEO_PHONE_DISPLAY);
    }
  });

  // Normalize email placeholders and mailto links
  const CEO_EMAIL = 'tenelevenevents@gmail.com';
  document.querySelectorAll('a[href^="mailto:"], body *').forEach(el=>{
    if(el.tagName === 'A' && el.href && el.href.startsWith('mailto:')){
      // Update mailto links
      el.href = 'mailto:' + CEO_EMAIL;
      // update visible link text if it contains a placeholder
      if(el.textContent && /info@|@\w+/.test(el.textContent)) el.textContent = CEO_EMAIL;
    } else if(el.children.length===0 && el.textContent && /info@1011events\.ng/i.test(el.textContent)){
      el.textContent = el.textContent.replace(/info@1011events\.ng/gi, CEO_EMAIL);
    } else if(el.children.length===0 && el.textContent && /info@|@\w+/.test(el.textContent)){
      el.textContent = el.textContent.replace(/info@[\w\.\-]+/gi, CEO_EMAIL);
    }
  });

  // Mobile hamburger
  function initHamburger(idSelector){
    const ham = document.querySelector(idSelector||'.hamburger');
    const nav = document.querySelector('.main-nav');
    if(!ham || !nav) return;
    ham.addEventListener('click',()=>{
      nav.classList.toggle('open');
      ham.classList.toggle('is-open');
    });
  }
  initHamburger(); initHamburger('#hamburger'); initHamburger('#hamburger-2');

  // Hero slider
  (function(){
    const slides = document.querySelectorAll('.hero-slider .slide');
    if(!slides.length) return;
    let idx=0;
    slides[idx].classList.add('active');
    const next = ()=>{ slides[idx].classList.remove('active'); idx=(idx+1)%slides.length; slides[idx].classList.add('active'); }
    const prev = ()=>{ slides[idx].classList.remove('active'); idx=(idx-1+slides.length)%slides.length; slides[idx].classList.add('active'); }
    let timer = setInterval(next,5000);
    const restart = ()=>{ clearInterval(timer); timer = setInterval(next,5000); }
    const sliderEl = document.querySelector('.hero-slider');
    const nxtBtn=document.getElementById('next'); const prevBtn=document.getElementById('prev');
    if(nxtBtn) nxtBtn.addEventListener('click',()=>{ next(); restart(); });
    if(prevBtn) prevBtn.addEventListener('click',()=>{ prev(); restart(); });
    if(sliderEl){
      sliderEl.addEventListener('mouseenter',()=>clearInterval(timer));
      sliderEl.addEventListener('mouseleave',()=>restart());
      sliderEl.setAttribute('tabindex','-1');
      sliderEl.addEventListener('keydown', (e)=>{ if(e.key==='ArrowLeft'){ prev(); restart(); } else if(e.key==='ArrowRight'){ next(); restart(); } });
    }
    // Global keyboard fallback when user is not typing in a form field
    document.addEventListener('keydown', (e)=>{ if(document.activeElement && (document.activeElement.tagName==='INPUT' || document.activeElement.tagName==='TEXTAREA' || document.activeElement.isContentEditable)) return; if(e.key==='ArrowLeft'){ prev(); restart(); } else if(e.key==='ArrowRight'){ next(); restart(); } });
  })();

  // Testimonials slider (simple)
  (function(){
    const wrap = document.getElementById('testiSlider');
    if(!wrap) return;
    let tIdx=0;
    const items = wrap.children;
    const show = ()=>{ Array.from(items).forEach((it,i)=> it.style.transform = `translateX(${(i-tIdx)*100}%)`); };
    show();
    let tTimer = setInterval(()=>{ tIdx=(tIdx+1)%items.length; show(); },4500);
    wrap.addEventListener('mouseenter', ()=> clearInterval(tTimer));
    wrap.addEventListener('mouseleave', ()=> { clearInterval(tTimer); tTimer = setInterval(()=>{ tIdx=(tIdx+1)%items.length; show(); },4500); });
  })();

  // Fade-up on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-up').forEach(el=>io.observe(el));

  // Lightbox for gallery
  const lightbox = document.getElementById('lightbox');
  if(lightbox){
    const lbImg = document.getElementById('lightboxImg');
    const lbCaption = document.getElementById('lightboxCaption');
    const closeBtn = document.getElementById('lightboxClose');
    const openLightbox = (src, caption) => {
      lbImg.src = src;
      lbImg.alt = caption || '';
      lbCaption.textContent = caption || '';
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden','false');
      if(closeBtn) closeBtn.focus();
    };

    document.querySelectorAll('.gallery-item').forEach(item=>{
      // clickable
      item.addEventListener('click',function(e){e.preventDefault();const src=this.dataset.src||(this.querySelector('img') && this.querySelector('img').src);const caption=this.dataset.caption||(this.querySelector('img') && this.querySelector('img').alt);openLightbox(src, caption)});
      // keyboard accessible (Enter / Space)
      item.setAttribute('tabindex','0');
      item.addEventListener('keydown',function(e){ if(e.key==='Enter' || e.key===' '){ e.preventDefault(); const src=this.dataset.src||(this.querySelector('img') && this.querySelector('img').src); const caption=this.dataset.caption||(this.querySelector('img') && this.querySelector('img').alt); openLightbox(src, caption); } });
    });

    if(closeBtn) closeBtn.addEventListener('click',()=>{ lightbox.classList.remove('open'); lightbox.setAttribute('aria-hidden','true'); lbImg.src=''; });
    lightbox.addEventListener('click',(e)=>{ if(e.target===lightbox) { lightbox.classList.remove('open'); lightbox.setAttribute('aria-hidden','true'); lbImg.src=''; } });
    document.addEventListener('keydown', (e)=>{ if(e.key==='Escape' && lightbox.classList.contains('open')){ lightbox.classList.remove('open'); lightbox.setAttribute('aria-hidden','true'); lbImg.src=''; } });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(btn=>{btn.addEventListener('click',()=>{const a = btn.nextElementSibling;const open = a.style.display==='block';document.querySelectorAll('.faq-a').forEach(x=>x.style.display='none');if(!open) a.style.display='block'} )});

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{const href=a.getAttribute('href'); if(href.length>1){ e.preventDefault(); const target=document.querySelector(href); if(target) target.scrollIntoView({behavior:'smooth',block:'start'})}})});

  // Basic performance tip: mark images loading=lazy where possible (already used in markup)
});