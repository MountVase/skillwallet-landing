import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Parallax from 'react-rellax'

import Fade from 'react-reveal/Fade'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import OtherSection from './components/OtherSection'
import Footer from './components/Footer'

const Emptiness = styled.div`
  display: flex;
  min-height: 25vh;
`

const App = () => {
  const [offsetY, setOffsetY] = useState(0)

  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Navbar />
      <Hero />

      <Section />

      <Emptiness />

      <OtherSection />

      <Emptiness />

      <Section />

      <Emptiness />

      <Footer />
    </>
  )
}

export default App
