import React from 'react'
import SocialLinks from '../SocialLinks/SocialLinks'
import NavLinks from '../NavLinks/NavLinks'
import './Sidebar.scss'

const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar-content">
      <div className="sidebar-top">
        <img
          src="https://imagizer.imageshack.com/a/img924/2852/sJJjFD.jpg"
          alt="Headshot of woman"
        />
        <h2>Jane Doe</h2>
        <p>Non col pellentesque ut cep augue at cep ata sed commodo quam</p>
        <NavLinks />
      </div>
      <SocialLinks />
    </div>
  </aside>
)

export default Sidebar
