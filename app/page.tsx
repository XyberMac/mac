import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import React from 'react'

export default function page() {
  return (
    <div>
      <Hero/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}
