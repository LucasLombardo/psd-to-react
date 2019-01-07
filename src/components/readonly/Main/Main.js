import React from 'react'
import './Main.scss'
import Header from '../Header/Header'
import Skills from '../Skills/Skills'
import Accomplishments from '../Accomplishments/Accomplishments'
import Contact from '../Contact/Contact'

const Main = () => (
  <main className="main">
    <img
      src="https://imagizer.imageshack.com/a/img924/7096/inAlux.jpg"
      alt="mountains"
    />
    <Header />
    <Skills />
    <Accomplishments />
    <Contact />
    <footer>
      <p>© Untitled. All rights reserved.</p>
    </footer>
  </main>
)

export default Main
