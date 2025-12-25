import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import Faq from './pages/Faq'
import Testimonials from './pages/Testimonials'
import NotFound from './pages/NotFound'
import { AnimatePresence, motion } from 'framer-motion'
export default function App(){
  return (
    <div>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.45}}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/testimonials" element={<Testimonials/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/faq" element={<Faq/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
