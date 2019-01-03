import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartArea, faCog, faFile } from '@fortawesome/free-solid-svg-icons'
import NavList from '../NavList/NavList'
import Container from '../Container/Container'
import './Footer.scss'

const navItems = [
  { text: 'Phasellus sed scelerisque', href: '#' },
  { text: 'Donec tempus et tortor ultricies', href: '#' },
  { text: 'Eget pellentesque turpis ultrices', href: '#' },
  { text: 'Vestibulum ut nulla vel magna', href: '#' },
  { text: 'Iaculis arcu nulla vel lorem nisl', href: '#' },
  { text: 'Quis ultricies tellus et imperdiet', href: '#' },
]

const Footer = () => (
  <div id="Footer">
    <Container>
      <div>
        <NavList header="Feugiat sed consequat" navItems={navItems} />
        <NavList header="Pellentesque et turpis" navItems={navItems} />
      </div>
      <div>
        <h3>Malesuada vivamus lacus</h3>
        <p>
          Phasellus dapibus convallis scelerisque. Donec tempus augue id tortor
          ultricies eget pellentesque turpis ultrices. Vestibulum ut nulla sem,
          vel iaculis arcu. Nulla vel lorem nisl sed quis ultricies tellus. Nunc
          laoreet. Nunc imperdiet elit sed dolore lacus venenatis rutrum.
        </p>
        <h3>Tellus nunc dapibus</h3>
        <div>
          <div>
            <li>
              1234 Somewhere Rd. <br />
              Nashville, TN 00000
            </li>
            <li>(000) 000-0000</li>
          </div>
          <div>
            <li>info@untitled.tld</li>
            <li>@untitledcorp-tld</li>
          </div>
        </div>
      </div>
    </Container>
    <p>© Untitled. All rights reserved.</p>
  </div>
)

export default Footer
