import React from 'react'
import './Sidebar.scss'
// font awesome svg icon imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const Sidebar = () => (
  <aside className="sidebar">
    <img
      src="https://imagizer.imageshack.com/a/img924/2852/sJJjFD.jpg"
      alt="Headshot of woman"
    />
    <h2>Jane Doe</h2>
    <p>Non col pellentesque ut cep augue at cep ata sed commodo quam</p>
    <nav>
      <a href="#">About</a>
      <a href="#">Things I Can Do</a>
      <a href="#">A Few Accomplishments</a>
      <a href="#">Contact</a>
    </nav>
    <div>
      <a href="https://twitter.com/">
        <FontAwesomeIcon icon={['fab', 'twitter']} />
      </a>
      <a href="https://www.facebook.com/">
        <FontAwesomeIcon icon={['fab', 'facebook']} />
      </a>
      <a href="https://www.instagram.com/">
        <FontAwesomeIcon icon={['fab', 'instagram']} />
      </a>
      <a href="https://github.com/">
        <FontAwesomeIcon icon={['fab', 'github']} />
      </a>
      <a href="mailto:someone@example.com">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  </aside>
)

export default Sidebar
