import React from 'react'
import './Main.scss'
import Header from '../Header/Header'
import Skills from '../Skills/Skills'
import Accomplishments from '../Accomplishments/Accomplishments'
import Contact from '../Contact/Contact'

const Main = () => (
  <main className="main">
    <div className="header-bg">
      <div className="header-img" />
    </div>
    <Header />
    <hr />
    <Skills />
    <hr />
    <Accomplishments />
    <hr />
    <Contact />
    <footer>
      <p>© Untitled. All rights reserved.</p>
    </footer>
  </main>
)

export default Main
