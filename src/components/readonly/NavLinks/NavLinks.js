import React, { Component } from 'react'
import './NavLinks.scss'

export default class NavLinks extends Component {
  render() {
    return (
      <nav className="navlinks">
        <a href="#">About</a>
        <a href="#">Things I Can Do</a>
        <a href="#">A Few Accomplishments</a>
        <a href="#">Contact</a>
      </nav>
    )
  }
}
