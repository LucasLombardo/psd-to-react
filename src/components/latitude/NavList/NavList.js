import React from 'react'
import PropTypes from 'prop-types'
import './NavList.scss'

const NavList = ({ navItems, header }) => (
  <div className="NavList">
    {header && <h3>{header}</h3>}
    <ul>
      {navItems.map(({ text, href }) => (
        <li key={text + href}>
          <a href={href}>{text}</a>
        </li>
      ))}
    </ul>
  </div>
)

NavList.defaultProps = {
  header: '',
}

NavList.propTypes = {
  navItems: PropTypes.array.isRequired,
  header: PropTypes.string,
}

export default NavList
