import React from 'react'
import './index.scss'
import Nav from './Nav/Nav'
import Header from './Header/Header'
import Aside from './Aside/Aside'
import MainContent from './MainContent/MainContent'
import Footer from './Footer/Footer'

const Latitude = () => (
  <div id="main">
    {/* <Nav /> */}
    <Header />
    <Aside />
    <MainContent />
    <Footer />
  </div>
)

export default Latitude
