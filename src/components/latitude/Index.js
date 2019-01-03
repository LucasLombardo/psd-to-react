import React from 'react'
import './index.scss'
import Nav from './Nav/Nav'
import Header from './Header/Header'
import Aside from './Aside/Aside'
import MainContent from './MainContent/MainContent'
import Footer from './Footer/Footer'

const navLinks = [
  { text: 'Home', href: '#' },
  { text: 'Link One', href: '#' },
  { text: 'Link Two', href: '#' },
  { text: 'Link Three', href: '#' },
  { text: 'Link Four', href: '#' },
]

const Latitude = () => (
  <div id="main">
    <Nav
      navLinks={navLinks}
      fixedBelowId="#Aside"
      homeLink={{ text: 'Latitude', href: '#' }}
    />
    <Header />
    <Aside />
    <MainContent />
    <Footer />
  </div>
)

export default Latitude
